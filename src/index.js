import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const timeOfDay = date.getHours();

let greeting;

const customStyle = { color: "" };

if (timeOfDay < 12) {
  greeting = "Good Morning";
  customStyle.color = "Red";
} else if (timeOfDay < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "Green";
} else {
  greeting = "Good Evening";
  customStyle.color = "Blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
