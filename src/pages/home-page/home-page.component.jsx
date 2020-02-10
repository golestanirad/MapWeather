import React from "react";
import { useSelector } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import { useMediaQuery } from "react-responsive";
////project fiels
import styles from "./home-page.module.scss";
import Map from "../../components/map/map.component";
import SearchHistory from "../../components/search-history/search-history.component";
import FavoriteList from "../../components/favorite-list/favorite-list.component";

const HomePage = () => {
  /// HOOKS
  const loading = useSelector(state => state.weather.loading);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  console.log(1111, isTabletOrMobile);
  ///// STYLE

  /// RENDER
  return (
    <LoadingOverlay
      active={loading}
      spinner
      text="Loading your content..."
      className={isTabletOrMobile ? styles.smallContainer : styles.bigContainer}
    >
      <SearchHistory />
      <Map />
      <FavoriteList />
    </LoadingOverlay>
  );
};

export default HomePage;
