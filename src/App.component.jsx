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
// 4) weather tile
// 5) make location icon emty and filled when selected