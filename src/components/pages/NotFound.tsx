import * as React from "react";

import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <p>404: Not Found</p>
    <Link to="/">Take me home</Link>
  </>
);

export default NotFound;
