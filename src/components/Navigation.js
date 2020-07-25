import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <>
    <Link to="/signin">
      <span className="nav-text">signin</span>
    </Link>
    <Link to="/signup">
      <span className="nav-text">signup</span>
    </Link>
  </>
);

export default Navigation;
