import React from "react";
////project fiels
import styles from "./home-page.module.scss";
import Map from "../../components/map/map.component";
import SearchHistory from "../../components/search-history/search-history.component";
import FavoriteList from "../../components/favorite-list/favorite-list.component";
import WeatherInfo from "../../components/weather-info/weather-info.component";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <SearchHistory />
      <div className={styles.mapAndInfo}>
        <Map />
        <WeatherInfo />
      </div>
      <FavoriteList />
    </div>
  );
};

export default HomePage;
