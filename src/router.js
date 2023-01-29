import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "features/auth/login";
import Registration from "features/auth/registration";
import Dashboard from "features/dashboard";

const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Registration />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
export default Routes;
