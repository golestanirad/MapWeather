import React from "react";
import { useSelector } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
////project fiels
import styles from "./home-page.module.scss";
import Map from "../../components/map/map.component";
import SearchHistory from "../../components/search-history/search-history.component";
import FavoriteList from "../../components/favorite-list/favorite-list.component";
import WeatherTile from "../../components/weather-tile/weather-tile.component";

const HomePage = () => {
  /// HOOKS
  const loading = useSelector(state => state.weather.loading);

  /// RENDER
  return (
    <LoadingOverlay
      active={loading}
      spinner
      text="Loading your content..."
      className={styles.container}
    >
      <SearchHistory />
      <div className={styles.mapAndTile}>
        <Map />
        {/* <WeatherTile /> */}
      </div>
      <FavoriteList />
    </LoadingOverlay>
  );
};

export default HomePage;
