import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { lang } = useSelector((state) => state);

  const isAuth = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to={`/${lang}/login`} />
      }
    />
  );
};

export default PrivateRoute;
