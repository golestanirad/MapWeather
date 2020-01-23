import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteForever from "@material-ui/icons/DeleteForever";
import RoomOutlined from "@material-ui/icons/RoomOutlined";
import Room from "@material-ui/icons/Room";
import _ from "lodash";
///// project files
import styles from "./weather-card.module.scss";
import {
  makeThisRecordFavorite,
  makeThisRecordUnfavorite,
  deleteThisCity,
  selectedLocation
} from "../../redux/weather/weather.actions";
import { mapCenter } from "../../redux/map/map.actions";
import MySlideShow from "../slide-show/slide-show.component";
import WeatherInformation from "./weather-information/weather-information.component";

const WeatherCard = ({ weatherInfo, cityId }) => {
  ////Hooks
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.weather.favorites);
  const selected = useSelector(state => state.weather.selected);
  ////
  const { main, weather, name, wind, sys } = weatherInfo.currentWeather;
  const { list } = weatherInfo.forecast;
  const isFavorite = favorites.includes(cityId);

  //// event handlers
  const onFavoriteClick = () => {
    isFavorite
      ? dispatch(makeThisRecordUnfavorite(cityId))
      : dispatch(makeThisRecordFavorite(cityId));
  };
  const onMapIconClick = () => {
    dispatch(selectedLocation(cityId));
    dispatch(
      mapCenter(
        weatherInfo.currentWeather.coord.lat,
        weatherInfo.currentWeather.coord.lon
      )
    );
  };
  const onDeleteClick = () => {
    dispatch(deleteThisCity(cityId));
  };

  //// renders
  const renderForcastList = () => {
    let i = 0;
    const newList = _.map(list, ({ main, weather, wind, dt_txt }) => {
      if (i < 3) {
        i++;
        return (
          <WeatherInformation
            image="image"
            main={main}
            weather={weather}
            wind={wind}
            time={dt_txt}
            key={dt_txt}
          />
        );
      }
    });
    return _.filter(newList);
  };

  return (
    <div className={styles.container}>
      <span className={styles.cityName}>City(neighbourhood): {name}</span>
      <span className={styles.cityName}>Country: {sys.country}</span>
      <div className={styles.currentWeather}>
        <span>Current Weather:</span>
        <WeatherInformation
          image="image"
          main={main}
          weather={weather}
          wind={wind}
        />
      </div>

      <div className={styles.divider} />

      <div className={styles.forecast}>
        <span>Forecast Weather:</span>
        <MySlideShow>{renderForcastList()}</MySlideShow>
      </div>

      <div className={styles.cardActions}>
        <IconButton
          color="secondary"
          aria-label="favorite"
          onClick={onFavoriteClick}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <IconButton color="secondary" aria-label="map" onClick={onMapIconClick}>
          {selected === cityId ? <Room /> : <RoomOutlined />}
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="delete"
          onClick={onDeleteClick}
        >
          <DeleteForever />
        </IconButton>
      </div>
    </div>
  );
};

export default WeatherCard;
