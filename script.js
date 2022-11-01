let arrayOfTodos = [];
let button = document.getElementById("button");
const ulElement = document.querySelector("ul");
let inputHandler = button.addEventListener("click", () => {
  let input = document.querySelector(".input").value;
  let liListener = document.querySelector("li");
  arrayOfTodos.push(input);
  console.log(arrayOfTodos);  
  const liElement = document.createElement("li");
  ulElement.appendChild(liElement);
  arrayOfTodos.forEach(todo => {
    
    //newLiElement.innerText = arrayOfTodos.ulElement.appendChild(newLiElement);
    liElement.innerText = todo;
  });
})



