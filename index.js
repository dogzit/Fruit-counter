const FruitList = document.getElementsByClassName("fruitlist");
const input = document.getElementById("FruitInput");
const button = document.getElementById("button");
const word = document.getElementById("word");
const diff = document.getElementById("different");
const total = document.getElementById("Total");
let fruitID = 0;

function add() {
  fruitID++;
  const currentID = fruitID;
  if (input.value === "") {
    alert("Write some fruit name . . .");
    word.removeChild(newDiv);
  }
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<div style= " margin-top:15px ; display:flex; ga:10px;"><div style="display:flex">${input.value} <div style=" display:flex ;margin-left: 5px"> Count:<div class="countNumber">1</div></div><button style=" margin-left:10px" ; class="increaseButton">Increase</button> <button style=" margin-left:10px" ; class="removeButton">Remove</button></div>`;
  word.appendChild(newDiv);
  input.value = "";
  const a = word.childElementCount;
  diff.innerText = a;
  total.innerText = a;

  const removeButton = newDiv.querySelector(".removeButton");
  removeButton.addEventListener("click", function () {
    word.removeChild(newDiv);
  });

  let countNumber = newDiv.querySelector(".countNumber").innerText;
  const increaseButton = newDiv.querySelector(".increaseButton");
  increaseButton.addEventListener("click", function () {
    countNumber = Number(countNumber) + 1;
    total.innerText = Number(total.innerText) + 1;
    newDiv.querySelector(".countNumber").innerText = countNumber;
  });
}

button.addEventListener("click", add);
addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    add();
  }
});

function count() {
  const shinediv = document.createElement("div");
}
