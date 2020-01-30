import _ from "lodash";
/// project files
import { weatherActionTypes } from "./weather.actionTypes";

const INITIAL_STATE = {
  loading: false,
  error: "",
  weatherData: {},
  favorites: [],
  selected: null
};
///weatherData: { [cityId]:{ currentWeather:{},forcast:{} }, ...}

const weatherReducer = (state = INITIAL_STATE, action) => {
  let newFavorites = [];
  switch (action.type) {
    case weatherActionTypes.FETCH_WEATHER_DATA_START:
      return { ...state, loading: true };

    case weatherActionTypes.FETCH_WEATHER_DATA_SUCCESS:
      const key = "_" + action.payload.currentWeather.id;
      return {
        ...state,
        loading: false,
        error: "",
        weatherData: {
          [key]: action.payload,
          ...state.weatherData
        },
        selected: key
      };

    case weatherActionTypes.SELECTED_LOCATION:
      if (state.favorites.includes(action.payload)) {
        newFavorites = [...state.favorites];
        newFavorites.splice(newFavorites.indexOf(action.payload), 1);
        newFavorites.unshift(action.payload);
      } else {
        newFavorites = [...state.favorites];
      }
      return {
        ...state,
        favorites: newFavorites,
        weatherData: {
          [action.payload]: state.weatherData[action.payload],
          ...state.weatherData
        },
        selected: action.payload
      };

    case weatherActionTypes.FETCH_WEATHER_DATA_FAILURE:
      return { ...state, error: action.payload };

    case weatherActionTypes.MAKE_IT_FAVORITE:
      newFavorites = [...state.favorites];
      newFavorites.push(action.payload);
      return { ...state, favorites: newFavorites };

    case weatherActionTypes.MAKE_IT_UNFAVORITE:
      newFavorites = [...state.favorites];
      _.pullAt(newFavorites, state.favorites.indexOf(action.payload));
      return { ...state, favorites: newFavorites };

    case weatherActionTypes.DELETE_CITY:
      newFavorites = [...state.favorites];
      _.pullAt(newFavorites, state.favorites.indexOf(action.payload));
      return {
        ...state,
        favorites: newFavorites,
        weatherData: _.omit(state.weatherData, action.payload)
      };

    default:
      return state;
  }
};

export default weatherReducer;
