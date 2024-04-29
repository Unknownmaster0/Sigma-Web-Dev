const colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("click");
const body = document.querySelector("body");
const writeColor = document.getElementById("color");

btn.addEventListener("click", function () {
    let hexId = '#';
    for(let i=0; i<6; i++){
        hexId += colorArray[Math.floor(Math.random() * colorArray.length)];
    }

    body.style.backgroundColor = hexId;
    writeColor.textContent = hexId;
});
