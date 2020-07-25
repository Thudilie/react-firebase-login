import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => (
  <nav className="justify-content-md-center navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <div className="justify-content-md-center">
      <ul className="navbar-nav">
        <div className="container">
          <a className="navbar-brand" href="/">
            Code Challenge
          </a>
        </div>
        {!props.username && (
          <>
            <Link className="nav-item" to="/">
              <span className="nav-link">home</span>
            </Link>
            <Link className="nav-item" to="/signin">
              <span className="nav-link">Signin</span>
            </Link>
            <Link className="nav-item" to="/signup">
              <span className="nav-link">Signup</span>
            </Link>
          </>
        )}
      </ul>
    </div>
  </nav>
);

export default Navigation;
