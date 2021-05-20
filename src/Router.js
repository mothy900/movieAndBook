import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Finder from "./Finder";
import Home from "./Home";
import Navigation from "./Navigation";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/finder">
            <Finder />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
