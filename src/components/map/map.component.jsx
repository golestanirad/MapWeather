import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { usePosition } from "use-position";
/// project files
import styles from "./map.module.scss";
import { fetchWeatherDataStart } from "../../redux/weather/weather.actions";

const Map = () => {
  /// Hooks
  const { latitude, longitude, timestamp, accuracy, error } = usePosition();
  const dispatch = useDispatch();
  useEffect(() => {
    if (latitude)
      dispatch(fetchWeatherDataStart({ lat: latitude, lng: longitude }));
  }, [latitude]);

  //// selector
  const selectedLocation = useSelector(
    ({ weather }) => weather.weatherData[weather.selected]
  );
  console.log("selectedLocationnnnnnnnnnnn", selectedLocation);

  ///// event handelers
  const onContextMenu = e => {
    dispatch(fetchWeatherDataStart(e.latlng));
  };

  ////
  let center = [];
  if (selectedLocation) {
    center = [
      selectedLocation.currentWeather.coord.lat,
      selectedLocation.currentWeather.coord.lon
    ];
  } else {
    center = [40.73, -73.93];
  }
  //////
  return (
    <LeafletMap
      center={center}
      zoom={15}
      className={styles.map}
      onContextMenu={onContextMenu}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </LeafletMap>
  );
};

export default Map;
