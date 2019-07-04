import * as React from "react";
import { Route, Router } from "react-router-dom";

import history from "./history";
import Nav from "./components/Nav";
import Pages from "./routes/Pages";

const App: React.FC = () => {
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

export default App;
