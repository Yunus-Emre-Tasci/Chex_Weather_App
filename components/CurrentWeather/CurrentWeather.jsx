import './currentWeather.css';
import React, {
  useState,
  useEffect
} from "react";
import axios from "axios"
import {
  usePosition
} from "use-position"
import {
  toastErrorNotify
} from '../../helpers/ToastNotify';


const CurrentWeather = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null)
 
  const api_Key = "226b643ce59aeeeb00e4b2bb779743ab"

  const {
    latitude,
    longitude
  } = usePosition()

        
        async function getServerSideProps(lat, lon) {
          const lang = navigator.language.split("-")[0]
          try {
            const {
              data
            } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_Key}&lang=${lang}&units=metric
`)
            console.log(data);
            setWeather(data)
          } catch (error) {
            toastErrorNotify("Hata oluştu")
          }
        }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  useEffect(() => {
    latitude && longitude && getServerSideProps(latitude, longitude)

  }, [latitude, longitude])

  console.log(latitude, longitude);

  function tick() {
    setTime(new Date());
  }

  if(!weather){
    return <p className='text-white'>Konumuzun hava durumu alınıyor..</p>
  }

  return (
    <div className="weather" id='current'>
      <div className="top">
        <div>
          <p className="city">{weather.name}</p>
          <p className="weather-description">{weather.weather[0].description}</p>
        </div>
        <img
          src = {
            `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
          }
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <div className="temprature">{Math.floor(weather.main.temp)}°C</div>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.floor(weather.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{weather.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Hour</span>
            <span className="parameter-value">{time.toLocaleTimeString()}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Date</span>
            <span className="parameter-value">{new Date(weather.dt*1000).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather
