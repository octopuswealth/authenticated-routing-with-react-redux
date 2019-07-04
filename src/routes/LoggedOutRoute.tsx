import * as React from "react";
import { Route } from "react-router-dom";

interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const LoggedOutRoute = ({
  component: Component
}: IProps) => {
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

export default LoggedOutRoute;
