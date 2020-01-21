import _ from "lodash";
/// project files
import { weatherActionTypes } from "./weather.actionTypes";

const INITIAL_STATE = {
  error: "",
  weatherData: {},
  favorites: [],
  selected: null
};
///weatherData: { [cityId]:{ currentWeather:{},forcast:{} }, ...}

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case weatherActionTypes.FETCH_WEATHER_DATA_SUCCESS:
      const key = "_" + action.payload.currentWeather.id;
      return {
        ...state,
        error: "",
        weatherData: {
          [key]: action.payload,
          ...state.weatherData
        },
        selected: key
      };

    case weatherActionTypes.SELECTED_LOCATION:
      return { ...state, selected: action.payload};

    case weatherActionTypes.FETCH_WEATHER_DATA_FAILURE:
      return { ...state, error: action.payload };

    case weatherActionTypes.MAKE_IT_FAVORITE:
      const newFavorites = [...state.favorites];
      newFavorites.push(action.payload);
      return { ...state, favorites: newFavorites };

    case weatherActionTypes.MAKE_IT_UNFAVORITE:
      const  newFavorites2 = [...state.favorites];
      _.pullAt(newFavorites2, state.favorites.indexOf(action.payload));
      return { ...state, favorites: newFavorites2 };

    case weatherActionTypes.DELETE_CITY:
      const newFavorites3 = [...state.favorites];
      _.pullAt(newFavorites3, state.favorites.indexOf(action.payload))
      return {
        ...state,
        selected: action.payload === state.selected ? null : state.selected,
        favorites:  newFavorites3,
        weatherData: _.omit(state.weatherData, action.payload)
      };

    default:
      return state;
  }
};

export default weatherReducer;
