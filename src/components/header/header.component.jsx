import React from "react";
import { useDispatch } from "react-redux";
////// project files
import styles from "./header.module.scss";
import SearchBox from "../search-box/search-box.components";
import { fetchWeatherDataStart } from "../../redux/weather/weather.actions";

const Header = () => {
  /// Hooks
  const dispatch = useDispatch();
  //// ^^^^
  const onSearchClick = searchTerm => {
    dispatch(fetchWeatherDataStart(searchTerm));  
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.search}>
        <SearchBox onSearchClick={onSearchClick} />
      </div>
      <div className={styles.nav} >Navigation</div>
    </div>
  );
};

export default Header;
