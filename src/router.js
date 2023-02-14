import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "features/auth/login";
import Registration from "features/auth/registration";
import Dashboard from "features/dashboard";
import GetClients from "features/clients/getClients";
import GetLoans from "features/loans/getLoans";

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
    {
      path: "/loans",
      element: <GetLoans />,
    },
  ]);
export default Routes;
