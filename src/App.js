import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Pablo", animal: "Human", breed: "ovo" }),
    React.createElement(Pet),
    React.createElement(Pet)
  ]);
};

render(React.createElement(App), document.getElementById("root"));
