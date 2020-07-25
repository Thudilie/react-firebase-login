import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingLogged from "./components/LandingLogged";
import LandingNotLogged from "./components/LandingNotLogged";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingNotLogged} />
          <Route exact path="/" component={LandingLogged} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
