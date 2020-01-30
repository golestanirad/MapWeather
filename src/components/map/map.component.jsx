import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { usePosition } from "use-position";
/// project files
import styles from "./map.module.scss";
import { fetchWeatherDataStart } from "../../redux/weather/weather.actions";
import { mapCenter } from "../../redux/map/map.actions";

const Map = () => {
  /// Hooks
  const dispatch = useDispatch();
  const mapCenterCoords = useSelector(({ map }) => {
    return map.mapCenter;
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        dispatch(mapCenter(latitude, longitude));
        dispatch(fetchWeatherDataStart({ lat: latitude, lng: longitude }));
      }
    );
  }, []);

  ///// event handelers
  const onContextMenu = e => {
    dispatch(fetchWeatherDataStart(e.latlng));
  };

  //////
  return (
    <LeafletMap
      center={[
        mapCenterCoords.lat + Math.random() / 10000,
        mapCenterCoords.lng
      ]}
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
