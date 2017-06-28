document.addEventListener("DOMContentLoaded",function(){
  
  //mobile menu trigger
    var navButton = document.querySelector(".nav_button");
    var menuList = document.querySelector(".menu_list");
    var greyShadow = document.querySelector(".grey_shadow");

    navButton.addEventListener("click", function () {
      this.classList.toggle("clicked");
      menuList.classList.toggle("active");
      greyShadow.classList.toggle("visible");
    });
  //mobile menu trigger end

  //mobile menu dropdown list

    menuList.addEventListener("click", function(e) {
      if (e.target.classList[0].indexOf("menu_list") > 0){
        return;
      }
      e.target.children[1].classList.toggle("open");
      e.target.classList.toggle("open");
      //e.stopImmediatePropagation();
    });
  //mobile menu dropdown list end
  
  //slider
    var bulletPoints = document.querySelectorAll(".bullet_point");
    var slides = document.querySelectorAll("[class*='slide_']");

    function changeSlide() {
      for (var i = 0; i < 2; i++) {
        slides[i].classList.toggle("active");
        bulletPoints[i].classList.toggle("bp_active");
      }
    }

    var changeSlideInterval = setInterval(changeSlide, 5000);
  //slider end
  
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

  // slider nav end

  //form validation
    var email = document.querySelector(".email_input");
    var incEmail = document.querySelector(".incorrect_email")
    
    function checkEmail(){
      if (email.value.indexOf("@") < 0 && email.value !== "") {
        incEmail.style.display = "block"
        return
      }
      incEmail.style.display = "none"
    }

    email.addEventListener("blur", checkEmail);

  //form validation end

  //prevent default for sumbit button
    var subButton = document.querySelector(".submit_button");
    subButton.addEventListener("click",function(e){
      e.preventDefault()
    })

  //prevent default for sumbit button end
});
