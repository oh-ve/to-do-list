//let arrayOfTodos = [];
let button = document.getElementById("button");
const ulElement = document.querySelector("ul");
const areaField = document.getElementById("firstinput");
console.log(areaField);
  let enterClick = areaField.onkeypress = function(e) {     
  if (e.key === 'Enter'){
    document.getElementById("button").click(); }
};
let inputHandler = button.addEventListener("click", () => {
  let input = document.querySelector(".input").value;
  document.querySelector(".input").value = "";
  let liListener = document.querySelector("li");
  const divElement = document.createElement("div");
  ulElement.appendChild(divElement);
  const liElement = document.createElement("li");
  liElement.className = "notdone";
  liElement.className = "notdone0";
  liElement.innerText = input;
  const buttonElement = document.createElement("input");
  buttonElement.type = "button";
  buttonElement.value = "delete";
  buttonElement.className = "close";   
  const buttonElement2 = document.createElement("input");
  buttonElement2.type = "button";
  buttonElement2.value = "edit";
  buttonElement2.className = "edit";
  divElement.appendChild(liElement);
  divElement.appendChild(buttonElement);
  divElement.appendChild(buttonElement2);
  let close = document.getElementsByClassName("close");
  let inputHandler2 = buttonElement.addEventListener("click", () => {
    divElement.remove();
  });
  let edit = document.getElementsByClassName("edit");
  let inputHandler3 = buttonElement2.addEventListener("click", () => {
    console.log("edit button clicked");
    let editArea = document.createElement("input");
    editArea.className = "editField";
    editArea.type = "text";
    editArea.value = liElement.innerText;
    divElement.appendChild(editArea);
      let inputHandler4 = editArea.addEventListener("keypress", (e) => {        
        if (e.key === 'Enter'){
        let input2 = document.querySelector(".editField").value;
        liElement.innerText = input2;
        editArea.remove();
      }
    })  
  });
  let done = document.getElementsByClassName("notdone");
  let inputHandler5 = liElement.addEventListener("click", () => {
    if (liElement.className === "notdone0"){
      liElement.style.textDecoration = "line-through";
      liElement.classList.remove("notdone0");
    } else {
      liElement.style.textDecoration = "none";
      liElement.className = "notdone0";
    }
  })
})