import React from "react";
import AlgoliaPlaces from "algolia-places-react";
import { useDispatch } from "react-redux";
/// project files
import styles from "./search-box.module.scss";
import { fetchWeatherDataStart } from "../../redux/weather/weather.actions";

const SearchBox = () => {
  /// Hooks
  const dispatch = useDispatch();
  ///
  let inputRef = null;
  ///
  return (
    <div className={styles.container}>
      <AlgoliaPlaces
        placesRef={ref => (inputRef = ref)}
        className={styles.search}
        placeholder="Write the city name here"
        options={{
          type: "city"
          // appId: 'my-app-id',
          // apiKey: 'sharing-is-caring',
          // language: 'sv',
          // countries: ['se'],
          // Other options from https://community.algolia.com/places/documentation.html#options
        }}
        onChange={result => {
          // Fired when suggestion selected in the dropdown or hint was validated.
          inputRef.setVal("");
          dispatch(fetchWeatherDataStart(result.suggestion.latlng));
        }}
        // onSuggestions={({ rawAnswer, query, suggestions }) =>
        //   console.log(
        //     "Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed."
        //   )
        // }
        // onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) =>
        //   console.log("Fired when arrows keys are used to navigate suggestions.")
        // }
        // onClear={() => console.log("Fired when the input is cleared.")}
        // onLimit={({ message }) =>
        //   console.log("Fired when you reached your current rate limit.")
        // }
        // onError={({ message }) =>
        //   console.log(
        //     "Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit."
        //   )
        // }
      />
    </div>
  );
};

export default SearchBox;

// import React, { useState } from "react";
// import Paper from "@material-ui/core/Paper";
// import InputBase from "@material-ui/core/InputBase";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";
// // project files
// import styles from "./search-box.module.scss";

// const SearchBox = ({onSearchClick}) => {

//   ////Hooks
//   const [searchInput, setSearchInput] = useState("calgary");
//   //// ^^

//   const onSearchInpoutChange = ({ target: { value } }) => {
//     setSearchInput(value);
//   };

//   return (
//     <Paper className={styles.root}>
//       <InputBase
//         className={styles.input}
//         placeholder="Search"
//         inputProps={{ "aria-label": "Search" }}
//         onChange={event => onSearchInpoutChange(event)}
//         value={searchInput}
//       />
//       <Divider className={styles.divider} orientation="vertical" />
//       <IconButton className={styles.iconButton} aria-label="search" onClick={() => onSearchClick(searchInput)}>
//         <SearchIcon />
//       </IconButton>
//     </Paper>
//   );
// };

// export default SearchBox;
