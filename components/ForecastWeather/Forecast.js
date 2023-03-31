import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import './forecast.css';

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Forecast = ({ data }) => {
  console.log(data);
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title text-white text-2xl mt-3">Weekly</label>
      <Accordion className='accordion mt-1'>
        {data?.list?.splice(0, 7).map((item, idx) => {
          return (
            <Accordion.Item className='accordionItem' eventKey={idx}>
              <Accordion.Header>
                <div className="daily-item">
                  <div className="left">
                    <img
                      src = {
                        `https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`
                      }
                      className="icon-small"
                      alt="weather"
                    />
                    <label className="day">{forecastDays[idx]}</label>
                  </div>
                  <div className="right">
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_max)}°C /
                      {Math.round(item.main.temp_min)}°C
                    </label>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body style={{ height: ' fit-content' }}>
                ^
                <div className="daily-details-grid">
                  <div className="descLeft">
                    <div className="daily-details-grid-item">
                      <label>Pressure:</label>
                      <label>{item.main.pressure}</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Humidity:</label>
                      <label>{item.main.humidity}</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Clouds:</label>
                      <label>{item.clouds.all}%</label>
                    </div>
                  </div>
                  <div className="descRight">
                    <div className="daily-details-grid-item">
                      <label>Wind speed:</label>
                      <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Sea level:</label>
                      <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Feels like:</label>
                      <label>{item.main.feels_like}°C</label>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
};

export default Forecast;
