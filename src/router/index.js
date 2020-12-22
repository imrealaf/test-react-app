import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";
import PrivateRoute from "../components/hoc/PrivateRoute";

const Routes = ({ lang }) => {
  return (
    <Switch>
      {routes.map((route, i) =>
        // Private route that needs auth ..
        route.isPrivate ? (
          <PrivateRoute exact key={i} {...route} />
        ) : (
          // Regular public route ..
          <Route exact key={i} {...route} />
        )
      )}
    </Switch>
  );
};

export default Routes;
