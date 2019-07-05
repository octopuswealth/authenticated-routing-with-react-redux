import * as React from "react";
import { connect } from "react-redux";

import { logIn } from "../../actions/current";

interface IProps {
  logInConnect: () => void;
}

const LogIn = ({ logInConnect }: IProps) => (
  <>
    <p>Login page</p>
    <button onClick={logInConnect}>log me in</button>
  </>
);

const mapDispatchToProps = {
  logInConnect: logIn
};

export default connect(
  null,
  mapDispatchToProps,
)(LogIn);
