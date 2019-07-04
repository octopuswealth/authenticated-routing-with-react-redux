import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import About from "../components/pages/About";
import Home from "../components/pages/Home";
import LogIn from "../components/pages/LogIn";
import NotFound from "../components/pages/NotFound";
import LoggedOutRoute from "../routes/LoggedOutRoute";

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <LoggedOutRoute path="/log-in" exact={true} component={LogIn} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Pages;
