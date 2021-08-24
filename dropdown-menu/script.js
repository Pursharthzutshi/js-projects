const profileCard = document.querySelector(".profile-card");

const iconContainer = document.querySelector(".icon-container");

const darkIcon = document.createElement("button");
darkIcon.classList.add("dark-icon");
darkIcon.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';

const darkIconContainer = document.querySelector(".dark-icon-container");

darkIconContainer.appendChild(darkIcon);

darkIcon.addEventListener("click", darkBackground, true);

const showMenuIcon = document.createElement("button");
showMenuIcon.classList.add("show-menu-icon");
showMenuIcon.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';

iconContainer.appendChild(showMenuIcon);

profileCard.appendChild(iconContainer);

showMenuIcon.addEventListener("click", showMenuBar);


function showMenuBar() {

    const menuBarContainer = document.querySelector(".menu-bar-container");

    const menuBar = document.createElement("div");
    menuBar.classList.add("menu-bar");

    showMenuIcon.style.opacity = '0';

    showMenuIcon.style.visibility = 'hidden';


    const closeMenuBarIcon = document.createElement("button");
    closeMenuBarIcon.classList.add("close-menu-bar-icon");
    closeMenuBarIcon.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

    menuBar.appendChild(closeMenuBarIcon);

    const iconsRowLink = document.createElement("div");
    iconsRowLink.classList.add("icons-row-link");
    iconsRowLink.setAttribute('style', 'display:flex;flex-direction:row;');

    const menuBarIcons = document.createElement("button");
    menuBarIcons.classList.add("menu-bar-icons");
    menuBarIcons.innerHTML = '<ion-icon name="person-outline"></ion-icon>';

    const menuBarLi = document.createElement("li");
    menuBarLi.classList.add("menu-bar-li");
    menuBarLi.innerHTML = '<a href="#">My Profile</a>';
    menuBarLi.style.listStyle = 'none';

    iconsRowLink.appendChild(menuBarIcons);

    iconsRowLink.appendChild(menuBarLi);

    menuBar.appendChild(iconsRowLink);

    menuBarContainer.appendChild(menuBar);

    closeMenuBarIcon.addEventListener("click", closeMenuBar);

    function closeMenuBar() {

        menuBarContainer.removeChild(menuBar);

        showMenuIcon.style.opacity = '1';

        showMenuIcon.style.visibility = 'visible';

    }


}


function darkBackground() {

    const menuBar = document.querySelector(".menu-bar");

    const profileCard = document.querySelector(".profile-card");

    document.body.style.background = ' #16161d';
    profileCard.style.background = '#16161d';
    profileCard.style.color = 'white';
    profileCard.style.boxShadow = '.2px .2px 18px .2px black';
    menuBar.style.background = '#16161d';
    menuBar.style.boxShadow = '.2px .2px 18px .2px black';

}