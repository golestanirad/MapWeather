import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
/// project files
import styles from "./map.module.scss";
import { fetchWeatherDataStart } from "../../redux/weather/weather.actions";

const Map = () => {
  /// Hooks
  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(-0.09);
  const [zoom, setZoom] = useState(13);
  const dispatch = useDispatch();

  ///// event handelers
  const onContextMenu = e => {
    console.log(1111111, e.latlng);
    dispatch(fetchWeatherDataStart(e.latlng));
  };

  //////
  const position = [lat, lng];

  return (
    <LeafletMap
      center={position}
      zoom={zoom}
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
