import * as React from "react";
import { connect } from "react-redux";

import { unauthenticate } from "../../actions/current";

interface IProps {
  unauthenticateConnect: () => void;
}

const LogOut = ({ unauthenticateConnect }: IProps) => (
  <>
    <p>Logout page</p>
    <button onClick={unauthenticateConnect}>log me out</button>
  </>
);

const mapDispatchToProps = {
  unauthenticateConnect: unauthenticate
};

export default connect(
  null,
  mapDispatchToProps,
)(LogOut);
