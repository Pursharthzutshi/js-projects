const input = document.querySelector(".input");
const button = document.querySelector(".button");
const todoUl = document.querySelector(".todo-ul");

button.addEventListener("click", todoDiv);

function todoDiv() {
  const div = document.createElement("div");
  div.classList.add("div");

  const li = document.createElement("li");
  li.classList.add("li");
  li.style.listStyle = "none";

  if (input.value != "") {
    li.innerHTML = input.value;
    input.value = "";
  } else {
    return;
  }

  const inputRemove = document.querySelector(".input").value;
  inputRemove.innerHTML = "";

  div.appendChild(li);

  const checkBtn = document.createElement("button");
  checkBtn.classList.add("check-btn");
  checkBtn.innerHTML = "<i class='fas fa-check'></i>";

  div.appendChild(checkBtn);

  const trashBtn = document.createElement("button");
  trashBtn.classList.add("trash-btn");
  trashBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";

  div.appendChild(trashBtn);

  todoUl.appendChild(div);

  trashBtn.addEventListener("click", removeValue);
  checkBtn.addEventListener("focus", checkMarkValue);
  checkBtn.addEventListener("dblckick", noCheckMarkValue);
}

function checkMarkValue(e) {
  const checkMark = document.querySelector("li");
  checkMark.style.textDecoration = "line-through";
}

function noCheckMarkValue() {
  const checkMark = document.querySelector("li");
  checkMark.style.textDecoration = "none";
}

function removeValue() {
  const removeDiv = document.querySelector(".div");
  todoUl.removeChild(removeDiv);
}
