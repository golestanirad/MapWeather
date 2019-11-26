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
