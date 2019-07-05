import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import history from "../history";
import { ICurrent } from "../types";

interface IProps {
  exact?: boolean;
  isAuthenticated: boolean | null;
  path: string;
  component: React.ComponentType<any>;
}

const LoggedOutRoute = ({
  component: Component,
  isAuthenticated
}: IProps) => {
  React.useEffect(() => {
    if (isAuthenticated === true) {
      history.push("/home");
      alert("this is a logged out route, you are logged in, redirected to home page");
    }
  }, [isAuthenticated]);

  return (
    <>
      <header>
        Logged Out Header
      </header>
      <Route
        render={props => (
          <>
            <Component {...props} />
          </>
        )}
      />
      <footer>
        Logged Out Footer
      </footer>
    </>
  );
};

const mapStateToProps = (state: ICurrent) => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(
  mapStateToProps
)(LoggedOutRoute);
