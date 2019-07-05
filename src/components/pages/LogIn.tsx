import * as React from "react";
import { connect } from "react-redux";

import { authenticate } from "../../actions/current";

interface IProps {
  authenticateConnect: () => void;
}

const LogIn = ({ authenticateConnect }: IProps) => (
  <>
    <p>Login page</p>
    <button onClick={authenticateConnect}>log me in</button>
  </>
);

const mapDispatchToProps = {
  authenticateConnect: authenticate
};

export default connect(
  null,
  mapDispatchToProps,
)(LogIn);
