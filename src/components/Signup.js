import React from "react";

import useInputState from "./../hooks/useInputState";

import firebase from "./../Firebase";

const Signup = () => {
  const [email, setEmail, resetEmail] = useInputState("");
  const [name, setName, resetName] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.updateProfile({ displayName: name });
      resetName();
      resetEmail();
      resetPassword();
      alert("successfully registered");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form className="container form-signin" onSubmit={onSubmit}>
      <h1 className="h3 mb-3 font-weight-normal">Please Sign up</h1>
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        value={email}
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Email address"
        onChange={(event) => setEmail(event.target.value)}
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
      <label htmlFor="inputName" className="sr-only">
        Name
      </label>
      <input
        value={name}
        type="text"
        id="inputName"
        className="form-control"
        placeholder="name"
        onChange={(event) => setName(event.target.value)}
        required
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign up
      </button>
    </form>
  );
};

export default Signup;
