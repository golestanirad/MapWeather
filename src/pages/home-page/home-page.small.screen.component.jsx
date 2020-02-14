import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
////project fiels
import styles from "./home-page.module.scss";
import Map from "../../components/map/map.component";
import SearchHistory from "../../components/search-history/search-history.component";
import FavoriteList from "../../components/favorite-list/favorite-list.component";
import WeatherCard from "../../components/weather-card/weather-card.component";

const HomePage = () => {
  /// HOOKS
  const loading = useSelector(state => state.weather.loading);
  const [value, setValue] = useState(1);
  const { selected, selectedData } = useSelector(state => {
    const selected = state.weather.selected;
    const selectedData = state.weather.weatherData[selected];
    return { selected, selectedData };
  });

  //// EVET HANDELERS
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  ///// STYLE

  /// RENDER
  return (
    <LoadingOverlay
      active={loading}
      spinner
      text="Loading your content..."
      className={styles.smallContainer}
    >
      <AppBar position="static" color="default" style={{ zIndex: 90 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="fullWidth"
        >
          <Tab label="History" />
          <Tab label="Map" />
          <Tab label="Favorite" />
        </Tabs>
      </AppBar>

      {value === 0 && <SearchHistory />}
      {value === 1 && (
        <>
          <Map />
          {selected && (
            <div className={styles.card}>
              <WeatherCard weatherInfo={selectedData} cityId={selected} />
            </div>
          )}
        </>
      )}
      {value === 2 && <FavoriteList />}
    </LoadingOverlay>
  );
};

export default HomePage;
