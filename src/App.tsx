import * as React from "react";
import { Provider } from "react-redux";
import { Route, Router } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";

import history from "./history";
import { ICurrent } from "./types";
import Nav from "./components/Nav";
import currentReducer from "./reducers/current";
import Pages from "./routes/Pages";

const store = createStore<ICurrent, any, any, any>(
  currentReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  undefined,
);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Router history={history}>
            <Nav />
            <Route component={Pages} />
          </Router>
        </header>
      </div>
    </Provider>
  );
}

export default App;
