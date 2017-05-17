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
  e.target.classList.toggle("open");
  e.stopImmediatePropagation();
});

 });
