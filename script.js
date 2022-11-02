let arrayOfTodos = [];
let button = document.getElementById("button");
const ulElement = document.querySelector("ul");
let inputHandler = button.addEventListener("click", () => {
  let input = document.querySelector(".input").value;
  let liListener = document.querySelector("li");
  arrayOfTodos.push(input);
  console.log(arrayOfTodos); 
  const divElement = document.createElement("div");
  ulElement.appendChild(divElement);
  const liElement = document.createElement("li");
  const buttonElement = document.createElement("input");
  buttonElement.type = "button";
  buttonElement.value = "delete";
  buttonElement.className = "close";  
  divElement.appendChild(liElement);
  divElement.appendChild(buttonElement);
    arrayOfTodos.forEach(todo => {    
    //newLiElement.innerText = arrayOfTodos.ulElement.appendChild(newLiElement);
    liElement.innerText = todo;
  });
  let close = document.getElementsByClassName("close");
  let inputHandler2 = buttonElement.addEventListener("click", () => {
    divElement.style.display = "none";
  });
})

/* let close = document.getElementsByClassName("close");
console.log(close);
console.log('vor der schleife');
const temp = () => {for (let i = 0; i < close.length; i++) {
  console.log(`i = ${i}`);
  close[i].onclick = () => {
    console.log("schleife");
    let div = this.parentElement;
    div.style.display = "none";
  }}  
}
let temp2 = temp; */
