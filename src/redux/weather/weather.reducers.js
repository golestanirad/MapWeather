import _ from "lodash";
/// project files
import { weatherActionTypes } from "./weather.actionTypes";

const INITIAL_STATE = { error: "", weatherData: {}, favorites: [] };
///weatherData: { [cityId]:{ currentWeather:{},forcast:{} }, ...}

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case weatherActionTypes.FETCH_WEATHER_DATA_SUCCESS:
      const key = "_" + action.payload.currentWeather.id;
      // const test = {
      //   ...state.weatherData,
      //   [key]: action.payload
      // };
      // console.log("teest", test);
      return {
        ...state,
        error: "",
        weatherData: {
          ...state.weatherData,
          //// action.payload.currentWeather.id is the searched city id
          [key]: action.payload
        }
      };

    case weatherActionTypes.FETCH_WEATHER_DATA_FAILURE:
      return { ...state, error: action.payload };

    case weatherActionTypes.MAKE_IT_FAVORITE:
      const newFavorites = [...state.favorites];
      newFavorites.push(action.payload);
      return { ...state, favorites: newFavorites };

    case weatherActionTypes.MAKE_IT_UNFAVORITE:
      const newFavorites2 = [...state.favorites];
      _.pullAt(newFavorites2, state.favorites.indexOf(action.payload));
      return { ...state, favorites: newFavorites2 };

    case weatherActionTypes.DELETE_CITY:
      return {
        ...state,
        weatherData: _.omit(state.weatherData, action.payload)
      };

    default:
      return state;
  }
};

export default weatherReducer;
