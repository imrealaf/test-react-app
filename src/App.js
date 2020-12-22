import React from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

import { Header, Main } from "./components";

const App = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <div id="app">
        <Header />
        <Main />
      </div>
    </Router>
  );
};

export default App;
