import { useState } from "react";

export default (initialVal) => {
  const [value, setVal] = useState(initialVal);
  const handleChange = (e) => {
    setVal(e);
  };
  const reset = () => {
    setVal("");
  };

  return [value, handleChange, reset];
};
