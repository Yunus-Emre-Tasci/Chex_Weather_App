import { toastWarnNotify } from '../../helpers/ToastNotify';
import React, { useState,useEffect } from 'react'
import { useDispatch } from "react-redux";

const Card = ({ data }) => {
  const [card, setCard] = useState([]);
  console.log(data);
  
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${data.sys.country}`)
      .then((response) => response.json())
      .then((data2) => {
        const data3 = data2[0];
        console.log(data3);
        setCard(data3);
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchError());
        toastWarnNotify("Geçerli şehir ya da ülke giriniz!")
      });
  }, [data.sys.country]);
  
  console.log(card);

  return (
    <>
      <div className="weather mx-auto mt-3 cities">
        <div className="top">
          <div>
            <p className="city">{data?.name}</p>
            <p className="weather-description">
              {data?.weather[0]?.description}
            </p>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@4x.png`}
            alt="weather"
            className="weather-icon"
          />
        </div>
        <div className="bottom">
          <div className="temprature">{Math.floor(data?.main.temp)}°C</div>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label font-weight-bold text-md ">
                Details
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {Math.floor(data?.main.feels_like)}°C
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">{data?.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{data?.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{data?.main.pressure}hPa</span>
            </div>
          </div>
        </div>
        <div className="country">
          <img src={`${card?.flags?.png}`} alt="flags" className="countryImg" />
          <div className="countryData">
            <h4 className="countryName">{card?.name?.official}</h4>
            <h5 className="countryRegion">{card?.region}</h5>
            <a
              className="map"
              href={`${card?.maps?.googleMaps}`}
              target="_blank"
            >
              Country Map
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card