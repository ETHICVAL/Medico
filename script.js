const menuBtn = document.getElementById("menu-btn");
const navBar = document.querySelector("nav").classList


menuBtn.addEventListener("click", e => {
  if(navBar.contains("open")){
    navBar.remove("open");
  }
  else{
    navBar.add("open");
  }
  console.log(navBar);
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});