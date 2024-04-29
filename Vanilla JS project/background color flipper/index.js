"use strict";

/* 1. Red
2. Green
3. Blue
4. white
5. yellow*/

const color = ["Red", "Green", "Blue", "Pink", "Yellow"];

const body = document.querySelector("body");
const writeColor = document.getElementById("color");

document.querySelector("#click").addEventListener("click", function () {
  const rand = Math.floor(Math.random() * color.length);
  body.style.backgroundColor = color[rand];
  writeColor.textContent = color[rand];
});
