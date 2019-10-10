import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Notfound from "./Notfound";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
