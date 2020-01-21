import { combineReducers } from "redux";
//// project fiels
import weatherReducer from "./weather/weather.reducers";
import mapReducer from "./map/map.reducers";

const rootReducer = combineReducers({
  weather: weatherReducer,
  map: mapReducer 
});

export default rootReducer;
