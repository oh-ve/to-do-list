/*class Object {
  construtor(msg = "hallo", checked = false) {
    this.msg = msg;
    this.checked = checked;
  }
  objectGetter() {
    return this.msg;
  }
}

const storage = [];

/*function object(msg, checked = false) {
  this.msg = msg;
  this.checked = checked;
}*/
localStorage.clear();

const button = document.getElementById("button");
const ulElement = document.querySelector("ul");
const areaField = document.getElementById("firstinput");
let taskCounter = 0;
areaField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.getElementById("button").click();
  }
});
button.addEventListener("click", () => {
  let input = document.querySelector(".input").value;
  if (!input) {
    alert("Please be serious. You definitely have something to do!");
    return;
  }
  taskCounter++;
  let tempCounter = `tasknr.${taskCounter}`;
  console.log(localStorage);
  window.localStorage.setItem(tempCounter, `${input}0`); //add 0 to input because not done with the task
  document.querySelector(".input").value = "";
  const divElement = document.createElement("div");
  divElement.className = `tasknr.${taskCounter}`;
  const checkElement = document.createElement("input");
  checkElement.type = "checkbox";
  const divTextElement = document.createElement("div");
  const liElement = document.createElement("li");
  liElement.innerText = input;
  const buttonElement = document.createElement("input");
  buttonElement.type = "button";
  buttonElement.value = "delete";
  divElement.appendChild(checkElement);
  divElement.appendChild(divTextElement);
  divTextElement.appendChild(liElement);
  divElement.appendChild(buttonElement);
  buttonElement.addEventListener("click", () => {
    localStorage.removeItem(tempCounter);
    console.log(tempCounter);
    divElement.remove();
    console.log(localStorage);
  });
  document.getElementsByClassName("checkbox");
  checkElement.addEventListener("change", () => {
    if (checkElement.checked) {
      liElement.style.textDecoration = "line-through";
      localStorage.setItem(tempCounter, `${input}1`);
      console.log(localStorage);
    } else {
      liElement.style.textDecoration = "none";
      localStorage.setItem(tempCounter, `${input}0`);
      console.log(localStorage);
    }
  });

  liElement.addEventListener("click", () => {
    liElement.style.display = "none";
    let editArea = document.createElement("input");
    editArea.className = "editField";
    editArea.type = "text";
    editArea.value = liElement.innerText;
    divTextElement.appendChild(editArea);
    editArea.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        let input2 = document.querySelector(".editField").value;
        liElement.innerText = input2;
        editArea.remove();
        liElement.style.display = "";
        //if ()
      }
    });
  });
  ulElement.appendChild(divElement);
});

console.log("HEREEE", ulElement);
