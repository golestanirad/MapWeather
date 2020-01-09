import { combineReducers } from "redux";
//// project fiels
import weatherReducer from "./weather/weather.reducers";


const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;
