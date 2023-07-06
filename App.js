import React from "react";
import { InputPassword } from "./InputPassword";
import { SnakeInput } from "./SnakeInput";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <SnakeInput />
      <InputPassword />
    </div>
  );
};

export default App;
