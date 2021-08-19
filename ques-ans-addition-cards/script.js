const addQuesButton = document.querySelector(".add-ques-button");

addQuesButton.addEventListener("click", addQues);

function addQues() {
    const quesBox = document.createElement("div");
    quesBox.classList.add("ques-box");

    const container = document.querySelector(".container");

    const quesHeadingTitle = document.createElement("p");
    quesHeadingTitle.classList.add("ques-heading-title");
    quesHeadingTitle.innerHTML = "Type Your Question ?";
    quesHeadingTitle.style.fontFamily = "Montserrat";

    container.appendChild(quesBox);

    container.appendChild(quesBox);

    quesBox.appendChild(quesHeadingTitle);

    const quesTextArea = document.createElement("textarea");
    quesTextArea.classList.add("ques-text-area");

    quesBox.appendChild(quesTextArea);

    const ansHeadingTitle = document.createElement("p");
    ansHeadingTitle.classList.add("ques-heading-title");
    ansHeadingTitle.innerHTML = "Type Your Answer ";
    ansHeadingTitle.style.fontFamily = "Montserrat";

    quesBox.appendChild(ansHeadingTitle);

    const ansTextArea = document.createElement("textarea");
    ansTextArea.classList.add("ans-text-area");

    quesBox.appendChild(ansTextArea);

    const saveButton = document.createElement("button");
    saveButton.classList.add("save-button");
    saveButton.innerHTML = "Save";

    quesBox.appendChild(saveButton);

    addQuesButton.removeEventListener("click", addQues);

    saveButton.addEventListener("click", saveBox);

    function saveBox() {
        const saveContainerBox = document.querySelector(".save-container-box");

        const createSaveBox = document.createElement("div");
        createSaveBox.classList.add("create-save-box");

        const saveQuesHeading = document.createElement("p");
        saveQuesHeading.classList.add("save-ques-heading");
        saveQuesHeading.innerHTML = quesTextArea.value;

        const saveAnsHeading = document.createElement("p");
        saveAnsHeading.classList.add("save-ans-heading");
        saveAnsHeading.innerHTML = ansTextArea.value;

        const showError = document.createElement("p");
        showError.classList.add("show-error");

        quesBox.appendChild(showError);

        const saveBoxButtonContainer = document.createElement("div");
        saveBoxButtonContainer.classList.add("save-box-button-container");

        const editButton = document.createElement("button");
        editButton.classList.add("edit-button");
        editButton.innerHTML = '<i class="fas fa-edit"></i>';

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

        createSaveBox.appendChild(saveQuesHeading);

        createSaveBox.appendChild(saveAnsHeading);

        createSaveBox.appendChild(saveBoxButtonContainer);

        saveBoxButtonContainer.appendChild(editButton);

        saveBoxButtonContainer.appendChild(deleteButton);

        saveContainerBox.appendChild(createSaveBox);

        if (saveQuesHeading.innerHTML == "" && saveAnsHeading.innerHTML == "") {
            ansTextArea.style.border = "1px solid red";
            quesTextArea.style.border = "1px solid red";
            saveContainerBox.removeChild(createSaveBox);
        } else if (
            saveQuesHeading.innerHTML != "" &&
            saveAnsHeading.innerHTML != ""
        ) {
            saveQuesHeading.innerHTML = "Question : " + quesTextArea.value;
            saveAnsHeading.innerHTML = "Answer : " + ansTextArea.value;

            quesTextArea.value = "";
            ansTextArea.value = "";
        } else {
            return;
        }

        deleteButton.addEventListener("click", deleteSaveBox);

        function deleteSaveBox() {
            saveContainerBox.removeChild(createSaveBox);
        }
    }
}