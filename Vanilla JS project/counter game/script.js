"use strict";

let counter = 0;

const number = document.getElementById("num");
const decr = document.getElementById("decr");
const reset = document.getElementById("reset");
const incr = document.getElementById("incr");

decr.addEventListener("click", function () {
  counter--;
  print(number, counter);
  checkCounter(counter);
});

reset.addEventListener("click", function () {
  counter = 0;
  print(number, counter);
  checkCounter(counter);
});

incr.addEventListener("click", function () {
  counter++;
  print(number, counter);
  checkCounter(counter);
});

function print(number, counter) {
  number.textContent = counter;
}

function checkCounter(counter) {
  if (counter > 0) number.style.color = "Green";
  else if (counter < 0) number.style.color = "Red";
  else number.style.color = "Black";
}
