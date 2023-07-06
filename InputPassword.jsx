import React from "react";
import { useState } from "react";
import hide from "./hide.png";
import view from "./view.png";

export const InputPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-box">
      <input type={showPassword ? "type" : "password"} required />
      <span>password</span>
      <img
        src={showPassword ? view : hide}
        alt="icon"
        className="icon"
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      />
    </div>
  );
};
