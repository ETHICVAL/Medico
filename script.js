const menuBtn = document.getElementById("menu-btn");
const navBar = document.querySelector("nav").classList


menuBtn.addEventListener("click", e => {
    navBar.toggle("open");
    console.log(navBar);
});