import { produce } from "immer";
/// project files
import { mapActionTypes } from "./map.action.types";

const INITAL_STATE = { mapCenter: { lat: 40.73, lng: -73.93 } };

const mapReducer = (state = INITAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
        
      case mapActionTypes.MAP_CENTER:
        draft.mapCenter = { lat: action.payload.lat, lng: action.payload.lng };
        break;

      default:
        return draft;
    }
  });
};

export default mapReducer;
