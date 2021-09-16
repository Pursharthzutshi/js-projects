const password = document.querySelector(".password");

const passwordIconRow = document.querySelector(".password-icon-row");

const icon = document.createElement("button");
icon.classList.add("eye-icon");
icon.innerHTML="<ion-icon name='eye-outline'></ion-icon>";

icon.addEventListener("click",passwordShowHidden);

passwordIconRow.appendChild(icon);

function passwordShowHidden(){

    const icon = document.querySelector(".eye-icon");

    const input = document.querySelector(".password");

    if(input.type === "password"){
        input.type="text";
        icon.innerHTML="<ion-icon name='eye-off-outline'></ion-icon>";
        icon.style.color='red';
    }else{
        input.type="password";
        icon.innerHTML="<ion-icon name='eye-outline'></ion-icon>";
        icon.style.color='black';

    }
}