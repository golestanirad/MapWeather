import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
// project files
import styles from "./search-box.module.scss";

const SearchBox = () => {
  return (
    <Paper className={styles.root}>
      <InputBase
        className={styles.input}
        placeholder="Search Locations"
        inputProps={{ "aria-label": "Search Locations" }}
      />
      <Divider className={styles.divider} orientation="vertical" />
      <IconButton className={styles.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBox;
