import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
///// project files
import styles from "./weather-tile.module.scss";
import MySlideShow from "../slide-show/slide-show.component";
import WeatherInformation from "../weather-card/weather-information/weather-information.component";

const WeatherInformationTile = () => {
  ////HOOKS
  const selectedLocationInfo = useSelector(state => {
    const selected = state.weather.selected;
    console.log("selectedddddddd", selected);
    return state.weather.weatherData[selected];
  });

  console.log("selectedLocationInfooooooooo", selectedLocationInfo);
  ////
  const { main, weather, name, wind, sys } =
    selectedLocationInfo?.currentWeather ?? {};
  const { list } = selectedLocationInfo?.forecast ?? {};

  ////
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
      {selectedLocationInfo ? (
        <>
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
          </div>{" "}
        </>
      ) : null}
    </div>
  );
};

export default WeatherInformationTile;
