import React from "react";

const SignupPassword = (props) => {
  return (
    <>
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        value={props.password}
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        onChange={(event) => props.setPassword(event.target.value)}
        required
      />
    </>
  );
};
export default SignupPassword;
