import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Finder from "./Finder";
import Book from "./Book";
import Home from "./Home";
import Navigation from "./Navigation";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/movie">
            <Finder />
          </Route>
          <Route exact path="/book">
            <Book />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
