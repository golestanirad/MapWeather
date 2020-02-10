import { combineReducers } from "redux";
//// project fiels
import weatherReducer from "./weather/weather.reducer.new";
import mapReducer from "./map/map.reducer.new";

const rootReducer = combineReducers({
  weather: weatherReducer,
  map: mapReducer 
});

export default rootReducer;
