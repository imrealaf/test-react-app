import * as paths from "./paths";
import { Home, Dashboard } from "../views";

const routes = [
  /**
   * Public routes
   */
  {
    path: paths.HOME,
    component: Home,
  },

  /**
   * Private routes
   */
  {
    path: paths.DASHBOARD,
    component: Dashboard,
    isPrivate: true,
  },
];

export default routes;
