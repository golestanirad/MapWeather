import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
// project files
import { weatherActionTypes } from "./weather.actionTypes";
import {
  fetchWeatherDataSuccess,
  fetchWeatherDataFailure
} from "./weather.actions";
import { mapCenter } from "../map/map.actions";

/// helpers
function* fetchWeatherData(query) {
  const [currentWeatherResponse, forecasttWeatherResponse] = yield all([
    axios.get(
      `http://api.openweathermap.org/data/2.5/weather?${query}&units=metric&appid=b3e4ac819a75b7e1ffe53d3d5701cc90`
    ),
    axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?${query}&units=metric&appid=b3e4ac819a75b7e1ffe53d3d5701cc90`
    )
  ]);
  return new Array(currentWeatherResponse, forecasttWeatherResponse);
}
/////   workers
function* fetchWeatherDataStart(action) {
  try {
    let currentWeatherResponse = null;
    let forecasttWeatherResponse = null;
    const isItGeographicSearch = Object.keys(action.payload).includes("lat");

    if (isItGeographicSearch) {
      [currentWeatherResponse, forecasttWeatherResponse] = yield call(
        fetchWeatherData,
        `lat=${action.payload.lat}&lon=${action.payload.lng}`
      );
    } else {
      [currentWeatherResponse, forecasttWeatherResponse] = yield call(
        fetchWeatherData,
        `q=${action.payload},ca`
      );
    }

    yield put(
      fetchWeatherDataSuccess({
        currentWeather: currentWeatherResponse.data,
        forecast: forecasttWeatherResponse.data
      })
    );
    yield put(
      mapCenter(
        currentWeatherResponse.data.coord.lat,
        currentWeatherResponse.data.coord.lon
      )
    );
  } catch (error) {
    console.log(333333, error);
    yield put(fetchWeatherDataFailure(error));
  }
}

/////  Watchers
function* watchfetchWeatherDataStart() {
  yield takeLatest(
    weatherActionTypes.FETCH_WEATHER_DATA_START,
    fetchWeatherDataStart
  );
}

////
export function* weatherSagas() {
  yield all([call(watchfetchWeatherDataStart)]);
}
