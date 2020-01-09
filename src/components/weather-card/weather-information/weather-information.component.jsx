import React from "react";
/////// project files
import styles from "./weather-information.module.scss";

const WeatherInformation = ({ main, weather, wind, image, time }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>{image}</div>
      {time ? <span className={styles.information}>Time: {time}</span> : null}
      <span className={styles.information}>Temp: {main.temp} &#8451;</span>
      <span className={styles.information}>Humidity: {main.humidity} %</span>
      <span className={styles.information}>Wind: {wind.speed} meter/sec</span>
      <span className={styles.information}>Weather: {weather[0].main}</span>
    </div>
  );
};

export default WeatherInformation;
