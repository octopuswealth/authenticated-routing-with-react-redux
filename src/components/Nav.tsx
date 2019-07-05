import * as React from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import { ICurrent } from "../types";

interface IProps {
  isAuthenticated: boolean | null;
  uuid: string | null;
}

const Nav = ({ isAuthenticated, uuid }: IProps) => {
  const logInOut = isAuthenticated ? (
    <li>
      <NavLink to="/log-out">
        Log out
      </NavLink>
    </li>
  ) : (
    <li>
      <NavLink to="/log-in">
        Log in
      </NavLink>
    </li>
  );

  const mainLinks = isAuthenticated ? (
    <li>
      <NavLink to="/home">
        Home
      </NavLink>
    </li>
  ) : (
    <>
      <li>
        <NavLink to="/">
          Landing
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <p>Auth state: {isAuthenticated ? `Logged in user: ${uuid}` : "Logged out"}</p>
      <ul>
        {mainLinks}
        <li>
          <NavLink to="/terms">
            Terms
          </NavLink>
        </li>
        <li>
          <NavLink to="/broken-link">
            Broken link
          </NavLink>
        </li>
        {logInOut}
      </ul>
    </>
  );
};

const mapStateToProps = (state: ICurrent) => ({
  uuid: state.uuid,
  isAuthenticated: state.isAuthenticated,
});

export default connect(
  mapStateToProps,
)(Nav);
