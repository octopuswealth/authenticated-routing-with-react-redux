import * as React from "react";
import { Route } from "react-router-dom";

interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const LoggedInRoute = ({
  component: Component
}: IProps) => {
  return (
    <>
      <header>
        Logged In Header
      </header>
      <Route
        render={props => (
          <>
            <Component {...props} />
          </>
        )}
      />
      <footer>
        Logged In Footer
      </footer>
    </>
  );
};

export default LoggedInRoute;
