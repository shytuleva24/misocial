let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".main-menu");
const links =  document.querySelectorAll(".main-menu a");
let isMobile = false;

hamburger.onclick = toggleMenu;

window.onresize = function(event) {
    isMobile = window.innerWidth < 1055
};

window.dispatchEvent(new Event('resize'));

links.forEach((element) => {
    element.onclick = toggleMenu;
});

function toggleMenu() {
    if (!isMobile ) return;
    menu.classList.toggle ("active-burger");
    hamburger.classList.toggle ("hamburger-open");
}


