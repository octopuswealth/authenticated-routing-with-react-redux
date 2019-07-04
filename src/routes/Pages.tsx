import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import About from "../components/pages/About";
import Home from "../components/pages/Home";
import NotFound from "../components/pages/NotFound";

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Pages;
