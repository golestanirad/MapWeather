import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
/// project files
import styles from "./search-history.module.scss";
import WeatherCard from "../weather-card/weather-card.component";
import LoadingWeatherCard from "../weather-card/loading-weather-card/loading-weather-card";

const SearchHistory = () => {
  //// Hooks
  const weatherData = useSelector(state => state.weather.weatherData);
  console.log(3333, weatherData);
  ////^^^
  const renderWeatherCardsList = () => {
    return _.map(weatherData, (weatherInfo, cityId) => {
      console.log(4444);
      return (
        <WeatherCard key={cityId} weatherInfo={weatherInfo} cityId={cityId} />
        // <LoadingWeatherCard />
      );
    });
  };

  return <div className={styles.container}>{renderWeatherCardsList()}</div>;
};

export default SearchHistory;
