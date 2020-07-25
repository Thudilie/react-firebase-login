import React from "react";

const SignupName = (props) => {
  return (
    <>
      <label htmlFor="inputName" className="sr-only">
        Name
      </label>
      <input
        value={props.name}
        type="text"
        id="inputName"
        className="form-control"
        placeholder="name"
        onChange={(event) => props.setName(event.target.value)}
        required
      />
    </>
  );
};
export default SignupName;
