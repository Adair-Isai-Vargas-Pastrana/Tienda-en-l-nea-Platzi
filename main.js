const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktopMenu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    console.log("Click")
desktopMenu.classList.toggle("inactive")
}
