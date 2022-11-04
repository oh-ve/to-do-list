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
//localStorage.clear();

console.log(localStorage);

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
  window.localStorage.setItem(tempCounter, input);
  document.querySelector(".input").value = "";
  const divElement = document.createElement("div");
  //divElement.className = `tasknr.${taskCounter}`;
  const checkElement = document.createElement("input");
  checkElement.type = "checkbox";
  checkElement.className = "check";
  const divTextElement = document.createElement("div");
  const liElement = document.createElement("li");
  liElement.innerText = input;
  liElement.title = "Edit task";
  const buttonElement = document.createElement("input");
  buttonElement.type = "image";
  buttonElement.className = "delete";
  buttonElement.src = "src/trash.png";
  divElement.appendChild(checkElement);
  divElement.appendChild(divTextElement);
  divTextElement.appendChild(liElement);
  divElement.appendChild(buttonElement);
  buttonElement.addEventListener("click", () => {
    localStorage.removeItem(tempCounter);
    divElement.remove();
  });
  document.getElementsByClassName("checkbox");
  checkElement.addEventListener("change", () => {
    if (checkElement.checked) {
      liElement.style.textDecoration = "line-through";
    } else {
      liElement.style.textDecoration = "none";
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
        if (checkElement.checked) {
          window.localStorage.setItem(tempCounter, input2);
          console.log(localStorage);
        } else {
          window.localStorage.setItem(tempCounter, input2);
          console.log(localStorage);
        }
      }
    });
  });

  ulElement.appendChild(divElement);
});

function allStorage() {
  console.log("allstore");
  keys = Object.keys(localStorage);
  console.log(keys);
  console.log(`keys length = ${taskCounter}`);
  for (let i = keys.length - 1; i > -1; i--) {
    console.log("allstore while");
    document.querySelector(".input").value = localStorage.getItem(keys[i]);
    console.log(`i = ${i}`);
    button.click();
  }
  return values;
}
allStorage();

console.log("HEREEE", ulElement);

function toggleDark() {

  let theme = document.getElementsByTagName('link')[0];

  if (theme.getAttribute('href') == 'style.css') {
      theme.setAttribute('href', 'dark.css');
  } else {
      theme.setAttribute('href', 'style.css');
  }
}