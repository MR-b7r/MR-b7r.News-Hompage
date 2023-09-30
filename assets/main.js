const mobMenu = document.querySelector(".mob-menu")
const menuIcon = document.querySelector(".menu-icon")
const navbar = document.querySelector(".navbar")
const overlay = document.querySelector(".overlay")


menuIcon.addEventListener('click', ()=>{
    overlay.classList.toggle("active")
    navbar.classList.toggle("active")
    if(navbar.classList.contains('active') && overlay.classList.contains('active')) {
        menuIcon.src = "assets/images/icon-menu-close.svg"
    }
    else {
        menuIcon.src = "assets/images/icon-menu.svg"
    }


})