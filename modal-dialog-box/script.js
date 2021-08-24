const showDialogBtn = document.querySelector(".show-dialog-btn");

showDialogBtn.addEventListener("click", dialogBox, true);

function dialogBox() {
    const dialogBoxContainer = document.querySelector(".dialog-box-container");

    const showDialogBtn = document.querySelector(".show-dialog-btn");

    const headerSection = document.querySelector(".header-section");

    const createDialogBox = document.createElement("div");

    createDialogBox.classList.add("create-dialog-box");

    showDialogBtn.setAttribute("style", "z-index:-1;opacity:.2;");

    const input = document.createElement("input");
    input.classList.add("input");
    input.placeholder = "Email-id";

    const subscribeButton = document.createElement("button");
    subscribeButton.classList.add("subscribe-button");
    subscribeButton.innerHTML = "Subscribe";

    const deleteIcon = document.createElement("button");
    deleteIcon.classList.add("delete-icon");
    deleteIcon.innerHTML = '<i class="fas fa-times"></i>';

    const heading = document.createElement("h3");
    heading.classList.add("heading");
    heading.innerHTML = "Subscribe to our newsfeed";

    createDialogBox.appendChild(deleteIcon);

    createDialogBox.appendChild(heading);

    createDialogBox.appendChild(input);

    createDialogBox.appendChild(subscribeButton);

    dialogBoxContainer.appendChild(createDialogBox);

    showDialogBtn.removeEventListener("click", dialogBox);

    deleteIcon.addEventListener("click", removeDialogBox);

    function removeDialogBox() {
        headerSection.style.background =
            "linear-gradient(to left,rgb(192,192,192,.2),rgb(245,245,245,.2))";

        showDialogBtn.setAttribute("style", "z-index:+1;opacity:1;");

        dialogBoxContainer.removeChild(createDialogBox);
    }
}