import React from "react";
const SubmitButton = props =>
  <input {...props}  className="btn" type="submit">
    {props.children}
  </input>;

export default SubmitButton