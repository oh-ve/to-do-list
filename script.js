//let arrayOfTodos = [];
let button = document.getElementById("button");
const ulElement = document.querySelector("ul");
const areaField = document.getElementById("firstinput");
console.log(areaField);
let enterClick = (areaField.onkeypress = function (e) {
  if (e.key === "Enter") {
    document.getElementById("button").click();
  }
});
let inputHandler = button.addEventListener("click", () => {
  let input = document.querySelector(".input").value;
  document.querySelector(".input").value = "";
  let liListener = document.querySelector("li");
  const divElement = document.createElement("div");
  ulElement.appendChild(divElement);
  const checkElement = document.createElement("input");
  checkElement.type = "checkbox";
  checkElement.className = "checked0";
  const divTextElement = document.createElement("div");
  const liElement = document.createElement("li");
  liElement.className = "notdone";
  liElement.className = "notdone0";
  liElement.innerText = input;
  const buttonElement = document.createElement("input");
  buttonElement.type = "button";
  buttonElement.value = "delete";
  buttonElement.className = "close";
  divElement.appendChild(checkElement);
  divElement.appendChild(divTextElement);
  divTextElement.appendChild(liElement);
  divElement.appendChild(buttonElement);
  let close = document.getElementsByClassName("close");
  let inputHandler2 = buttonElement.addEventListener("click", () => {
    divElement.remove();
  });
  let done = document.getElementsByClassName("checkbox");
  checkElement.addEventListener("change", () => {
    if (checkElement.checked) {
      liElement.style.textDecoration = "line-through";
    } else {
      liElement.style.textDecoration = "none";
    }
  });

  let inputHandler5 = liElement.addEventListener("click", () => {
    liElement.style.display = "none";
    console.log("edit button clicked");
    let editArea = document.createElement("input");
    editArea.className = "editField";
    editArea.type = "text";
    editArea.value = liElement.innerText;
    divTextElement.appendChild(editArea);
    let inputHandler4 = editArea.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        let input2 = document.querySelector(".editField").value;
        liElement.innerText = input2;
        editArea.remove();
        liElement.style.display = "";
      }
    });
  });
});
