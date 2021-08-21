const input = document.querySelector(".input");
const addButton = document.querySelector(".add-button");
const todoUl = document.querySelector(".todo-ul");

addButton.addEventListener("click", todoDiv);

function todoDiv() {
    const div = document.createElement("div");
    div.classList.add("div");
    div.setAttribute(
        "style",
        "display:flex;flex-direction:row;justify-content:space-between;"
    );

    const liContainer = document.createElement("div");
    liContainer.classList.add("li-container");

    const li = document.createElement("li");
    li.classList.add("li");
    li.style.listStyle = "none";

    liContainer.appendChild(li);

    if (input.value != "") {
        li.innerHTML = input.value;
        input.value = "";
    } else {
        return;
    }

    const inputRemove = document.querySelector(".input").value;
    inputRemove.innerHTML = "";

    div.appendChild(liContainer);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.innerHTML = "<i class='fas fa-check'></i>";

    btnContainer.appendChild(checkBtn);

    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash-btn");
    trashBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";

    btnContainer.appendChild(trashBtn);

    div.appendChild(btnContainer);

    todoUl.appendChild(div);

    trashBtn.addEventListener("click", removeValue);
    checkBtn.addEventListener("click", checkMarkValue);
}

function checkMarkValue(e) {
    const checkMark = document.querySelector("li");

    checkMark.classList.toggle("toggle-li");
}

function removeValue() {
    const removeDiv = document.querySelector(".div");
    todoUl.removeChild(removeDiv);
}
const clearAllValuesButton = document.querySelector(".clear-all-button");

clearAllValuesButton.addEventListener("click", clearAllValues);

function clearAllValues() {
    const todoUl = document.querySelector(".todo-ul");

    const div = document.querySelector(".div");

    todoUl.removeChild(div);
}