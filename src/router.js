import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "features/Auth/Login";
import Registration from "features/Auth/Registration";
import Dashboard from "features/Dashboard";
import GetClients from "features/Clients/GetClients";

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
    {
      path: "/clients",
      element: <GetClients />,
    },
  ]);
export default Routes;
