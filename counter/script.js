let i = 0;

const addBtn = document.querySelector(".add-btn");
const subBtn = document.querySelector(".sub-btn");
const resetBtn = document.querySelector(".reset-btn");

const demo = document.querySelector(".demo");

addBtn.addEventListener("click", increment);

function increment() {
    const container = document.querySelector(".container");
    const demo = document.querySelector(".demo");

    demo.innerHTML = ++i;
    demo.style.visibility = "visible";
}
subBtn.addEventListener("click", decrement);

function decrement() {
    const container = document.querySelector(".container");
    const demo = document.querySelector(".demo");

    demo.innerHTML = --i;
    demo.style.visibility = "visible";
}

resetBtn.addEventListener("click", reset);

function reset() {
    const container = document.querySelector(".container");
    const demo = document.querySelector(".demo");

    demo.innerHTML = i;
    demo.style.visibility = "visible";
    const resetBtn = document.querySelector(".reset-btn");

    if (resetBtn.clicked === true) {
        demo.innerHTML = "0";
    } else {
        return;
    }
}