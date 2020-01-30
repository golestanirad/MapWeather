import React from "react";
import { Facebook } from "react-content-loader";
///// project files
import styles from "./loading-weather-card.module.scss";

const LoadingWeatherCard = () => {
  return (
    <div className={styles.container}>
      <Facebook backgroundColor="#cacaca" foregroundColor="#5f5a5a" />
    </div>
  );
};
export default LoadingWeatherCard;
