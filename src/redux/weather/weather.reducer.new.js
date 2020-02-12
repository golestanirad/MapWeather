import _ from "lodash";
import { produce } from "immer";
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
  return produce(state, draft => {
    switch (action.type) {
      case weatherActionTypes.FETCH_WEATHER_DATA_START:
        draft.loading = true;
        break;

      case weatherActionTypes.FETCH_WEATHER_DATA_SUCCESS:
        const key = "_" + action.payload.currentWeather.id;
        draft.loading = false;
        draft.error = "";
        draft.weatherData = {
          [key]: action.payload,
          ...draft.weatherData
        };
        draft.selected = key;
        break;

      case weatherActionTypes.SELECTED_LOCATION:
        /// if the selected one is also in favorite list we need to move it to the top of the list
        if (draft.favorites.includes(action.payload)) {
          _.pullAt(draft.favorites, draft.favorites.indexOf(action.payload));
          draft.favorites.unshift(action.payload);
        }
        /// we are moving the selcted one to the top of the list
        draft.weatherData = {
          [action.payload]: draft.weatherData[action.payload],
          ...draft.weatherData
        };
        ////
        draft.selected = action.payload;
        break;

      case weatherActionTypes.FETCH_WEATHER_DATA_FAILURE:
        draft.error = action.payload;
        break;
      case weatherActionTypes.MAKE_IT_FAVORITE:
        /// if the newly favorite one is also the selected on as well we need to move it to the top of the list
        if (action.payload === draft.selected) {
          _.pullAt(draft.favorites, draft.favorites.indexOf(action.payload));
          draft.favorites.unshift(action.payload);
        } else draft.favorites.push(action.payload);
        break;

      case weatherActionTypes.MAKE_IT_UNFAVORITE:
        _.pullAt(draft.favorites, draft.favorites.indexOf(action.payload));
        break;

      case weatherActionTypes.DELETE_CITY:
        _.pullAt(draft.favorites, draft.favorites.indexOf(action.payload));
        draft.weatherData = _.omit(state.weatherData, action.payload);
        break;

      default:
        return draft;
    }
  });
};

export default weatherReducer;
