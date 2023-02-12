import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/combineStore";

export function RenderWithRouterMatch({ children }) {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
}
