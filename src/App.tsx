import * as React from "react";
import { connect } from "react-redux";
import { Route, Router } from "react-router-dom";

import history from "./history";
import Nav from "./components/Nav";
import Pages from "./routes/Pages";
import { unauthenticate } from "./actions/current";

interface IProps {
  unauthenticateConnect: () => void;
}

const App = ({ unauthenticateConnect }: IProps) => {
  React.useEffect(() => {
    getAuthState();
  }, []);

  const getAuthState = () => {
    // normally you'd do fancy stuff with your server, this will assume logged out
    unauthenticateConnect();
  };

  return (
    <div className="App">
      <header className="App-header">
        <Router history={history}>
          <Nav />
          <Route component={Pages} />
        </Router>
      </header>
    </div>
  );
}

const mapDispatchToProps = {
  unauthenticateConnect: unauthenticate
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
