/// project files
import { mapActionTypes } from "./map.action.types";

const INITAL_STATE = { mapCenter: { lat: 40.73, lng: -73.93 } };

const mapReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case mapActionTypes.MAP_CENTER:
      return {
        ...state,
        mapCenter: { lat: action.payload.lat, lng: action.payload.lng }
      };
    default:
      return state;
  }
};

export default mapReducer;
