import { weatherActionTypes } from "./weather.actionTypes";

export const fetchWeatherDataStart = fetchData => {
  return {
    type: weatherActionTypes.FETCH_WEATHER_DATA_START,
    payload: fetchData
  };
};

export const fetchWeatherDataSuccess = weatherData => {
  return {
    type: weatherActionTypes.FETCH_WEATHER_DATA_SUCCESS,
    payload: weatherData
  };
};

export const fetchWeatherDataFailure = () => {
  return {
    type: weatherActionTypes.FETCH_WEATHER_DATA_FAILURE
  };
};

export const makeThisRecordFavorite = (cityId) => ({
  type: weatherActionTypes.MAKE_IT_FAVORITE,
  payload: cityId
});

export const makeThisRecordUnfavorite = (favorite) => ({
  type: weatherActionTypes.MAKE_IT_UNFAVORITE,
  payload: favorite
});

export const deleteThisCity = (cityId) => ({
  type: weatherActionTypes.DELETE_CITY,
  payload: cityId
})
