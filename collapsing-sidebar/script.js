const leftSidebar = document.querySelector(".left-sidebar");

const crossSidebarIcon = document.createElement("button");
crossSidebarIcon.classList.add("cross-sidebar-icon");
crossSidebarIcon.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
crossSidebarIcon.setAttribute("style", "position:relative;top:-430px;");

const container = document.createElement("div");
container.classList.add("container");

const showSidebarIcon = document.createElement("button");
showSidebarIcon.classList.add("show-sidebar-icon");
showSidebarIcon.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
showSidebarIcon.setAttribute("style", "margin-top:-250px;");

document.body.appendChild(container);

document.body.appendChild(showSidebarIcon);

container.appendChild(leftSidebar);

leftSidebar.appendChild(crossSidebarIcon);

showSidebarIcon.addEventListener("click", showSidebar);
crossSidebarIcon.addEventListener("click", hideSidebar);

function showSidebar() {
    const showContainer = document.querySelector(".container");

    const showIcon = document.querySelector(".show-sidebar-icon");

    showIcon.setAttribute("style", "transition:1s;margin-left:208px;");

    if ((showContainer.style.visibility = "hidden")) {
        showContainer.setAttribute(
            "style",
            "visibility:visible;transition:1s;margin-left:6px;"
        );
    } else {
        return;
    }
}

function hideSidebar() {
    const hideContainer = document.querySelector(".container");

    const showIcon = document.querySelector(".show-sidebar-icon");

    showIcon.setAttribute("style", "transition:.7s;margin-left:-10px;");

    if ((hideContainer.style.visibility = "visible")) {
        hideContainer.setAttribute("style", "visibility:hidden;");
    } else {
        return;
    }
}