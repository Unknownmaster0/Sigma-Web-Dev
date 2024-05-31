"use strict";

const data = [
  {
    id: 1,
    personName: "Sagar",
    jobRole: "Web Dev",
    img: "https://unsplash.com/photos/man-wearing-black-suit-y9L5-wmifaY",
    text: "Hii how are you sagar here.",
  },
  {
    id: 2,
    personName: "Satyam",
    jobRole: "Teacher",
    img: "https://unsplash.com/photos/man-standing-beside-wall-pAtA8xe_iVM",
    text: "Hii how are you satyam here.",
  },
  {
    id: 3,
    personName: "Bholu",
    jobRole: "Professor",
    img: "C:UserssagarSigma Web DevVanilla JS project\review website\bholu.jpg",
    text: "Hii how are you bholu here.",
  },
  {
    id: 4,
    personName: "Shalu",
    jobRole: "intern",
    img: "https://unsplash.com/photos/shallow-focus-photo-of-woman-in-gray-jacket-0Zx1bDv5BNY",
    text: "Hiiiiiiii How are you. Shalu here.",
  },
];

// we have created the array
const size = data.length;

const surprise = document.getElementById("random");
const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");

const summary = document.querySelector(".info");
const personName = document.getElementById("person-name");
const job = document.querySelector(".job-role");
// const img = document.querySelector(".person-img");

function display() {
  const item = data[crntIdx];
  job.textContent = item.jobRole;
  personName.textContent = item.personName;
  summary.textContent = item.text;
}

surprise.addEventListener("click", function () {
  const rand = Math.floor(Math.random() * size);
//   const item = data[rand];
//   job.textContent = item.jobRole;
//   personName.textContent = item.personName;
//   summary.textContent = item.text;
    crntIdx = rand;
    display();
});

let crntIdx = 0; // locating the crntIdx of the array.
window.addEventListener("DOMContentLoaded", function () {
  // this is when the window is loaded and all the html is loaded in the page, then what to listen.
  display();
});

prev.addEventListener("click", function () {
  crntIdx--;
  if (crntIdx < 0) crntIdx = size - 1;
  display();
});

next.addEventListener("click", function () {
  crntIdx++;
  if (crntIdx > size - 1) crntIdx = 0;
  display();
});
