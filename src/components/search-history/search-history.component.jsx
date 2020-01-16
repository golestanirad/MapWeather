import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
/// project files
import styles from "./search-history.module.scss";
import WeatherCard from "../weather-card/weather-card.component";

const SearchHistory = () => {
  //// Hooks
  const weatherData = useSelector(state => state.weather.weatherData);
  ////^^^
  const renderWeatherCardsList = () => {
    return _.map(weatherData, (weatherInfo, cityId) => {
      return (
        <WeatherCard key={cityId} weatherInfo={weatherInfo} cityId={cityId} />
      );
    });
  };

  return <div className={styles.container}>{renderWeatherCardsList()}</div>;
};

export default SearchHistory;
