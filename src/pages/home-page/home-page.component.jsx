import React from "react";
////project fiels
import styles from "./home-page.module.scss";
import Map from "../../components/map/map.component";

const HomePage = () => {
  return (
    <div className={styles.container} >
      <Map />
    </div>
  );
};

export default HomePage;
