import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "./Firebase";

import Navigation from "./components/Navigation";
import LandingLogged from "./components/LandingLogged";
import LandingNotLogged from "./components/LandingNotLogged";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const ref = firebase.database().ref("user");
    ref.on("value", (snapshot) => {
      setLoggedIn(snapshot.val());
    });
  });
  return (
    <Router>
      <div className="App">
        <Navigation />
        {loggedIn}
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
