document.addEventListener("DOMContentLoaded",function(){
  var navButton = document.querySelector(".nav_button");
  var menuList = document.querySelector(".menu_list");
  var greyShadow = document.querySelector(".grey_shadow");

//mobile menu trigger

  navButton.addEventListener("click", function () {
    this.classList.toggle("clicked");
    menuList.classList.toggle("active");
    greyShadow.classList.toggle("visible");
  });

//mobile menu dropdown list

menuList.addEventListener("click", function(e) {
  if (e.target.classList[0].indexOf("menu_list") > 0){
    return;
  }
  e.target.children[1].classList.toggle("open");
  e.target.classList.toggle("open");
  //e.stopImmediatePropagation();
});

//slider js
var bulletPoints = document.querySelectorAll(".bullet_point");
var slides = document.querySelectorAll("[class*='slide_']");

function changeSlide() {
  for (var i = 0; i < 2; i++) {
    slides[i].classList.toggle("active");
    bulletPoints[i].classList.toggle("bp_active");
  }
}

var changeSlideInterval = setInterval(changeSlide, 5000);

// slider nav

var sliderNav = document.querySelector(".slider_navigation");

sliderNav.addEventListener("click", function (e) {
  if (e.target.classList.contains("bp_active") || !e.target.classList.contains("bullet_point")) {
    return;
  }
  clearInterval(changeSlideInterval);
  changeSlide();
  changeSlideInterval = setInterval(changeSlide, 5000);
});

 });
