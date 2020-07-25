import React from "react";

import useInputState from "./../hooks/useInputState";

const Signin = (props) => {
  const [email, setEmail] = useInputState("");
  const [password, setPassword] = useInputState("");

  const onSubmit = (event) => {
    event.preventDefault();
    props.login(email, password);
  };

  return (
    <form className="container form-signin" onSubmit={onSubmit}>
      <h1 className="h3 mb-3 font-weight-normal">Please Sign in</h1>
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Email address"
        required
        autoFocus
      />
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        value={password}
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Signin;
