import React,{useEffect} from "react";
import {useDispatch} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/////// project fiels
import styles from "./App.module.scss";
import HomePage from "./pages/home-page/home-page.component";
import Header from "./components/header/header.component";
import { fetchWeatherDataStart } from "./redux/weather/weather.actions";
import { mapCenter } from "./redux/map/map.actions";

const App = () => {
  //// HOOKS
  const dispatch = useDispatch();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        dispatch(mapCenter(latitude, longitude));
        dispatch(fetchWeatherDataStart({ lat: latitude, lng: longitude }));
      }
    );
  }, []);

  //// RENDER
  return (
    <div className={styles.container}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

//1) remove icon - done
// 2) get user location and show weather for that place by default -done
// 3) move map to the selected location and also add a map icon to the cart - done
// 4) weather tile - done
// 5) make location icon emty and filled when selected - done
// 6) weather icons - done
// 7) move the selected one "highlited" and to the top
// 8) make the top one always selected - done
// 9) add loader spiner - done
// 10) add animation via csstransitoingroup from facebook comunity
// 11) fix forcast arrow
// 12) use a nice scroll bar
//13) make it responsive :) - done
// 14) use https://github.com/welldone-software/why-did-you-render
// 15) use hook eslint
// 16) use immer - done
//17 use a library to detect if you accidently mutate the state (note: remove it for prodoction)  - done
// 18) get the name of city out and show beside the neighbourhood name
/// 19) use context api to save screen size