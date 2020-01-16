import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
/// project files
import styles from "./favorite-list.module.scss";
import WeatherCard from "../weather-card/weather-card.component";

const FavoriteList = () => {
  /// Hooks
  const weatherData = useSelector(state => state.weather.weatherData);
  const favorites = useSelector(state => state.weather.favorites);
  ////

  const renderWeatherCardsList = () => {
    const favoritesWeatherData = _.pick(weatherData, favorites);

    return _.map(favoritesWeatherData, (weatherInfo, cityId) => {
      return (
        <WeatherCard key={cityId} weatherInfo={weatherInfo} cityId={cityId} />
      );
    });
  };

  return <div className={styles.container}>{renderWeatherCardsList()}</div>;

};

export default FavoriteList;
