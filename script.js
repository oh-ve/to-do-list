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

const button = document.getElementById("button");
const ulElement = document.querySelector("ul");
const areaField = document.getElementById("firstinput");
keys = Object.keys(localStorage);
let taskCounter = findHighest();
console.log(taskCounter);
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

  addToStorage(input, tempCounter);

  document.querySelector(".input").value = "";
  const divElement = document.createElement("div");
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
    localStorage.removeItem(getKey(liElement.innerText));
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
    let tempText = liElement.innerText;
    editArea.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        let input2 = document.querySelector(".editField").value;
        liElement.innerText = input2;
        editArea.remove();
        liElement.style.display = "";
        localStorage.setItem(getKey(tempText), input2);
      }
    });
  });

  ulElement.appendChild(divElement);
});

function allStorage() {
  keys.forEach((element) => {
    document.querySelector(".input").value = localStorage.getItem(element);
    console.log(document.querySelector(".input").value);
    button.click();
  });
}
allStorage();

function addToStorage(input, tempCounter) {
  if (inStorage(input)) {
    console.log("instorage");
    return;
  } else {
    console.log("NOTinstorage");
    window.localStorage.setItem(tempCounter, input);
  }
}

function inStorage(input) {
  let isThere = false;
  if (keys.length < 1) return false;
  keys.forEach((element) => {
    if (input === localStorage.getItem(element)) {
      isThere = true;
    }
  });
  return isThere;
}

function getKey(input) {
  let temp;
  keys.forEach((element) => {
    if (input === localStorage.getItem(element)) {
      temp = element;
      return element;
    }
  });
  return temp;
}

function findHighest() {
  let highest = 0;
  keys.forEach((element) => {
    let competitor = getNumbers(element);
    if (highest < competitor) {
      highest = competitor;
    }
  });
  return highest;
}

function getNumbers(value) {
  return value.match(/\d+/)[0];
}

function toggleDark() {
  let theme = document.getElementsByTagName("link")[0];

  if (theme.getAttribute("href") == "style.css") {
    theme.setAttribute("href", "dark.css");
  } else {
    theme.setAttribute("href", "style.css");
  }
}
