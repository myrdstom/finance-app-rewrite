import React from "react";
import { Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import store from "../redux/combineStore";

const history = createMemoryHistory();

export function RenderWithRouterMatch({ children }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>{children}</Switch>
      </Router>
    </Provider>
  );
}
