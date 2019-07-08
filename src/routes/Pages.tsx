import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import About from "../components/pages/About";
import Home from "../components/pages/Home";
import Landing from "../components/pages/Landing";
import LogIn from "../components/pages/LogIn";
import LogOut from "../components/pages/LogOut";
import NotFound from "../components/pages/NotFound";
import Terms from "../components/pages/Terms";

import LoggedInRoute from "../routes/LoggedInRoute";
import LoggedOutRoute from "../routes/LoggedOutRoute";

const Pages = () => {
  return (
    <Switch>
      <LoggedOutRoute path="/" exact={true} component={Landing} />
      <LoggedOutRoute path="/about" exact={true} component={About} />
      <LoggedOutRoute path="/log-in" exact={true} component={LogIn} />
      <LoggedInRoute path="/log-out" exact={true} component={LogOut} />
      <LoggedInRoute path="/home" exact={true} component={Home} />
      <Route path="/terms" exact={true} component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Pages;
