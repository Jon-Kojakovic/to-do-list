import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../utils/context/auth";

import ALL_ROUTES from "./routes";

const Router = () => {
  const { currentUser } = useContext(AuthContext);

  const getElement = (route) => {
    if (route.hasToBeLoggedIn && !currentUser) {
      return <Navigate to={ALL_ROUTES.LOGIN.path} />;
    } else if (route.hasToBeLoggedOut && currentUser) {
      return <Navigate to={ALL_ROUTES.MY_LISTS.path} />;
    }
    return route.component;
  };

  return (
    <BrowserRouter>
      <Routes>
        {Object.values(ALL_ROUTES).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={getElement(route)}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
