import { useState } from "react";
import Card from "../Card/Card";
import { toastErrorNotify, toastWarnNotify } from "../../helpers/ToastNotify";
import Search from "../Search/Search";
import Forecast from "../ForecastWeather/Forecast";

const Weather = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const api_Key="226b643ce59aeeeb00e4b2bb779743ab"

  const handleOnSearchChange = (searchData) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchData}&appid=${api_Key}&units=metric`
    )
      .then(async (response) => {
        if (response.status === 404) {
          toastWarnNotify("Girilen şehir bulunamadı.");
          return;
        }
        const weatherResponse = await response.json();
        if (weatherResponse) {
          setCurrentWeather(weatherResponse);
        } else {
          toastErrorNotify("Hata oluştu");
        }
      })
      .catch((error) => {
        console.log(error);
        toastErrorNotify("Hata oluştu");
      });
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchData}&appid=${api_Key}&units=metric`
    )
      .then(async (response) => {
        if (response.status === 404) {
          return;
        }
        const forecast = await response.json();
        if (forecast) {
          setForecast(forecast);
        }
        console.log(forecast);
      })
      .catch((error) => {
        console.log(error);
        toastErrorNotify("Hata oluştu");
      });
  };

  return (
    <div class="content d-flex flex-column mx-auto -mt-2">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <Card data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default Weather;
