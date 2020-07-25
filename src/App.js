import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import firebase from "./Firebase";

import Navigation from "./components/Navigation";
import LandingLogged from "./components/LandingLogged";
import LandingNotLogged from "./components/LandingNotLogged";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  const [userName, setUserName] = useState(null);
  const login = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const name = await firebase.auth().currentUser.displayName;
      setUserName(name);
      alert("successfully logged in");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          {userName && <Route path="/" component={LandingLogged} />}
          {!userName && (
            <>
              <Route exact path="/" component={LandingNotLogged} />
              <Route path="/signin" render={() => <Signin login={login} />} />
              <Route exact path="/signup" component={Signup} />
            </>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
