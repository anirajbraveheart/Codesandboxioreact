import React from "react";
import ReactDOM from "react-dom";
//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
const name = "Aneeraj";
let date = new Date();
const year = date.getFullYear();
ReactDOM.render(
  <div>
    <h2>Created by {name}</h2>
    <p>Copyright {year} </p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
