import React from "react";

const SignupEmail = (props) => {
  return (
    <>
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        value={props.email}
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Email address"
        onChange={(event) => props.setEmail(event.target.value)}
        required
        autoFocus
      />
    </>
  );
};
export default SignupEmail;
