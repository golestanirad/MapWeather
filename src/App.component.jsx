import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/////// project fiels
import styles from "./App.module.scss";
import HomePage from "./pages/home-page/home-page.component";
import Header from "./components/header/header.component";

const App = () => {
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
// 7) move the selected one hiligted and to the top 
// 8) make the top one always selected - done
// 9) add loader spiner - done
// 10) add animation via csstransitoingroup from facebook comunity
// 11) fix forcast arrow
// 12) use a nice scroll bar
//13) make it responsive :)
// 14) use https://github.com/welldone-software/why-did-you-render
// 15) use hool eslint