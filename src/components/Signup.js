import React from "react";

import useInputState from "./../hooks/useInputState";

import firebase from "./../Firebase";

import SignupEmail from "./SignupEmail";
import SignupPassword from "./SignupPassword";
import SignupName from "./SignupName";

const Signup = () => {
  const [email, setEmail, resetEmail] = useInputState("");
  const [name, setName, resetName] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");
  const [step, setstep] = useInputState(0);

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

  const before = (event) => {
    event.preventDefault();
    if (step > 0) setstep(step - 1);
  };

  const next = (event) => {
    event.preventDefault();
    if (step < 2) setstep(step + 1);
  };

  return (
    <form className="container form-signin" onSubmit={onSubmit}>
      <h1 className="h3 mb-3 font-weight-normal">Please Sign up</h1>

      {(() => {
        switch (step) {
          case 0:
            return <SignupEmail email={email} setEmail={setEmail} />;
          case 1:
            return (
              <SignupPassword password={password} setPassword={setPassword} />
            );
          case 2:
            return <SignupName name={name} setName={setName} />;
          default:
            return null;
        }
      })()}
      {step > 0 && (
        <button className="btn btn-lg btn-secondary btn-block" onClick={before}>
          before
        </button>
      )}
      {step !== 2 && (
        <button className="btn btn-lg btn-secondary btn-block" onClick={next}>
          next
        </button>
      )}

      {step === 2 && (
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign up
        </button>
      )}
    </form>
  );
};

export default Signup;
