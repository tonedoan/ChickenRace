let names = [];

const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const nameList = document.getElementById("nameList");
let numOfRacers = 0;

const displayButton = document.getElementById("displayButton");

nameForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page refresh
  const name = nameInput.value.trim();
  if (name) {
    names.push(name);
    nameInput.value = "";
    displayNames();
  }
});

function displayNames() {
  nameList.innerHTML = ""; // Clear previous names
  names.forEach((name) => {
    const li = document.createElement("li");
    li.className = "list-none mb-2 p-2 bg-blue-100 rounded";
    li.textContent = name;
    nameList.appendChild(li);
  });
}

const canvas = document.getElementById("raceCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "lightblue";
ctx.fillRect(10, 10, canvas.width, canvas.height);
