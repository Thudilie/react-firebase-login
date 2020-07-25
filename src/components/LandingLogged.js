import React from "react";

const LandingLogged = (props) => (
  <>
    <h1>Welcome {props.user}</h1>
    <button
      className="btn btn-lg btn-primary"
      type="submit"
      onClick={props.logout}
    >
      Logout
    </button>
  </>
);

export default LandingLogged;
