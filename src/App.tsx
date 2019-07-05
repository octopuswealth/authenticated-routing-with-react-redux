import * as React from "react";
import { connect } from "react-redux";
import { Route, Router } from "react-router-dom";

import history from "./history";
import Nav from "./components/Nav";
import Pages from "./routes/Pages";
import { checkAuthentication } from "./actions/current";

interface IProps {
  checkAuthenticationConnect: () => void;
}

const App = ({ checkAuthenticationConnect }: IProps) => {
  React.useEffect(() => {
    getAuthState();
  }, []);

  const getAuthState = () => {
    checkAuthenticationConnect();
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
  checkAuthenticationConnect: checkAuthentication
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
