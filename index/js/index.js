document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    $(".loader-bg").fadeOut(500);
  });

  function preload(arrayOfImages) {
    $(arrayOfImages).each(function() {
      $("<img/>")[0].src = this;
    });
  }
  preload([
    "index/img/bg-angular-motors.jpg",
    "index/img/bg-motors.jpg",
    "index/img/bg-fitness.jpg",
    "index/img/bg-wow.jpg"
  ]);

  // JS LINKS
  $(".angular-motors").click(function() {
    window.location = "https://web-portfolio-angular.github.io";
  });
  $(".motors").click(function() {
    window.location = "motors/home-page.html";
  });
  $(".fitness").click(function() {
    window.location = "fitness/fitness.html";
  });
  $(".wow").click(function() {
    window.location = "wow/home-page.html";
  });
});