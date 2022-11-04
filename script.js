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
    //getKey(liElement.innerText);
    console.log(
      "liElement text = ",
      liElement.innerText,
      " key = ",
      getKey(liElement.innerText)
    );
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
  keys = Object.keys(localStorage);
  keys.forEach((element) => {
    document.querySelector(".input").value = localStorage.getItem(element);
    console.log(document.querySelector(".input").value);
    button.click();
  });
}
allStorage();

function addToStorage(input, tempCounter) {
  console.log("input ", input, " tempCounter ", tempCounter);
  console.log(inStorage(input));
  if (inStorage(input)) {
    console.log("instorage");
    return;
  } else {
    console.log("NOTinstorage");
    window.localStorage.setItem(tempCounter, input);
  }
}

function inStorage(input) {
  keys = Object.keys(localStorage);
  let isThere = false;
  console.log("keys.length ", keys.length);
  console.log("input ", input, " local storage ", localStorage);
  if (keys.length < 1) return false;
  keys.forEach((element) => {
    console.log(
      "item im Storage ",
      localStorage.getItem(element),
      " input ",
      input,
      " result of true ",
      input === localStorage.getItem(element)
    );
    if (input === localStorage.getItem(element)) {
      isThere = true;
    }
  });
  return isThere;
}

function getKey(input) {
  keys = Object.keys(localStorage);
  let temp;
  keys.forEach((element) => {
    if (input === localStorage.getItem(element)) {
      temp = element;
      return element;
    }
  });
  return temp;
}

function toggleDark() {
  let theme = document.getElementsByTagName("link")[0];

  if (theme.getAttribute("href") == "style.css") {
    theme.setAttribute("href", "dark.css");
  } else {
    theme.setAttribute("href", "style.css");
  }
}
