import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import About from "../components/pages/About";
import Landing from "../components/pages/Landing";
import LogIn from "../components/pages/LogIn";
import LogOut from "../components/pages/LogOut";
import NotFound from "../components/pages/NotFound";
import LoggedOutRoute from "../routes/LoggedOutRoute";

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Landing} />
      <Route path="/about" exact={true} component={About} />
      <LoggedOutRoute path="/log-in" exact={true} component={LogIn} />
      <Route path="/log-out" exact={true} component={LogOut} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Pages;
