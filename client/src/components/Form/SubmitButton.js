import React from "react";

export const SubmitButton = props =>
  <input {...props}  className="btn" type="submit">
    {props.children}
  </input>;