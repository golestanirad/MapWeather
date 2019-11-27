import React from "react";
////// project files
import styles from "./header.module.scss";
import SearchBox from "../search-box/search-box.components";

const Header = () => {
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div>
        <SearchBox />
      </div>
      <div>Navigation</div>
    </div>
  );
};

export default Header;
