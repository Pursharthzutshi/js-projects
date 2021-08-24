const addQuesButton = document.querySelector(".add-ques-button");

addQuesButton.addEventListener("click", addQues, true);

function addQues() {
    const quesBox = document.createElement("div");
    quesBox.classList.add("ques-box");

    const container = document.querySelector(".container");

    const quesBoxDeleteIconContainer = document.createElement("div");
    quesBoxDeleteIconContainer.classList.add("ques-box-delete-icon-container");
    quesBoxDeleteIconContainer.setAttribute(
        "style",
        "margin-left:200px;display:flex;flex-direction:row;justify-content:flex-end;"
    );

    const quesBoxDeleteIcon = document.createElement("button");
    quesBoxDeleteIcon.classList.add("ques-box-delete-icon");
    quesBoxDeleteIcon.innerHTML = '<i class="fas fa-times"></i>';

    quesBoxDeleteIconContainer.appendChild(quesBoxDeleteIcon);

    quesBox.appendChild(quesBoxDeleteIconContainer);

    const quesHeadingTitle = document.createElement("p");
    quesHeadingTitle.classList.add("ques-heading-title");
    quesHeadingTitle.innerHTML = "Type Your Question ";

    quesHeadingTitle.setAttribute(
        "style",
        'font-size:1.3rem;font-family:"Montserrat"'
    );

    container.appendChild(quesBox);

    quesBoxDeleteIcon.addEventListener("click", quesBoxDelete);

    function quesBoxDelete() {
        const quesBoxDeleteValue = document.querySelector(".ques-box");

        container.removeChild(quesBoxDeleteValue);
    }

    quesBox.appendChild(quesHeadingTitle);

    const quesTextArea = document.createElement("textarea");
    quesTextArea.classList.add("ques-text-area");

    quesBox.appendChild(quesTextArea);

    const ansHeadingTitle = document.createElement("p");
    ansHeadingTitle.classList.add("ques-heading-title");
    ansHeadingTitle.innerHTML = "<br>Type Your Answer ";
    ansHeadingTitle.style.fontFamily = "Montserrat";

    quesBox.appendChild(ansHeadingTitle);

    const ansTextArea = document.createElement("textarea");
    ansTextArea.classList.add("ans-text-area");

    quesBox.appendChild(ansTextArea);

    const quesBoxSaveButton = document.createElement("button");
    quesBoxSaveButton.classList.add("ques-box-save-button");
    quesBoxSaveButton.innerHTML = "Save";

    quesBox.appendChild(quesBoxSaveButton);

    addQuesButton.removeEventListener("click", addQues);

    quesBoxSaveButton.addEventListener("click", saveBox);

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

        const saveButton = document.createElement("button");
        saveButton.classList.add("save-button");
        saveButton.innerHTML = '<i class="fas fa-save"></i>';

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

        createSaveBox.appendChild(saveQuesHeading);

        createSaveBox.appendChild(saveAnsHeading);

        createSaveBox.appendChild(saveBoxButtonContainer);

        saveBoxButtonContainer.appendChild(editButton);

        saveBoxButtonContainer.appendChild(saveButton);

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

            ansTextArea.style.border = "1px solid white";
            quesTextArea.style.border = "1px solid white";

            quesTextArea.value = "";
            ansTextArea.value = "";
        } else {
            return;
        }

        deleteButton.addEventListener("click", deleteSaveBox);

        function deleteSaveBox() {
            saveContainerBox.removeChild(createSaveBox);
        }

        editButton.addEventListener("click", editButtonChange);

        function editButtonChange() {
            const saveQuesHeadingEdit = document.querySelector(".save-ques-heading");
            const saveAnsHeadingEdit = document.querySelector(".save-ans-heading");

            saveQuesHeadingEdit.contentEditable = true;
            saveAnsHeadingEdit.contentEditable = true;

            saveQuesHeadingEdit.setAttribute(
                "style",
                "color:red;border-bottom:1px solid red;transition:.3s;"
            );
            saveAnsHeadingEdit.setAttribute(
                "style",
                "color:red;border-bottom:1px solid red;transition:.3s;"
            );
        }

        saveButton.addEventListener("click", saveButtonChange);

        function saveButtonChange() {
            const saveQuesHeadingEdit = document.querySelector(".save-ques-heading");
            const saveAnsHeadingEdit = document.querySelector(".save-ans-heading");

            saveQuesHeadingEdit.contentEditable = false;
            saveAnsHeadingEdit.contentEditable = false;

            saveQuesHeadingEdit.setAttribute(
                "style",
                "color:black;border-bottom:none;transition:.3s;"
            );
            saveAnsHeadingEdit.setAttribute(
                "style",
                "color:black;border-bottom:none;transition:.3s;"
            );
        }
    }
}