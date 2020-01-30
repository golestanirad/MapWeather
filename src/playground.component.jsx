import React from "react";
import ContentLoader, { Facebook } from "react-content-loader";
import LoadingOverlay from "react-loading-overlay";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
/// project files
import styles from "./playground.module.scss";

const ComponentOne = () => {
  return (
    <div style={{ width: 200, height: 200, backgroundColor: "red" }}>
      ONE :)
    </div>
  );
};
const ComponentTwo = () => {
  return (
    <div style={{ width: 200, height: 200, backgroundColor: "pink" }}>
      two :)
    </div> 
  );
};
const ComponentThree = () => {
  return (
    <div style={{ width: 200, height: 200, backgroundColor: "green" }}>
      THREE :)
    </div>
  );
};

const Playground = () => {
  return (
    <div className={styles.container}>
      <LoadingOverlay
        active={false}
        spinner
        text="Loading your content..."
        styles={{
          overlay: base => ({
            ...base,
            background: "rgba(255, 0, 0, 0.5)"
          })
        }}
      >
        <LeafletMap center={[10, -140]} zoom={15} style={{width:200,height:200}}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LeafletMap>
      </LoadingOverlay>
    </div>
  );
};

export default Playground;
