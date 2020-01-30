import React from "react";
/////// project files
import styles from "./weather-information.module.scss";

const WeatherInformation = ({ main, weather, wind, time }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
      />
      <span className={styles.information}>Weather: {weather[0].main}</span>
      {time ? <span className={styles.information}>Time: {time}</span> : null}
      <span className={styles.information}>Temp: {main.temp} &#8451;</span>
      <span className={styles.information}>Humidity: {main.humidity} %</span>
      <span className={styles.information}>Wind: {wind.speed} meter/sec</span> 
    </div>
  );
};

export default WeatherInformation;
