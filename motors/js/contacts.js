document.addEventListener("DOMContentLoaded", function (event) {
  $(window).on("load", function() {
    loadElements();
  });

  function loadElements() {
    $(".top-content").load("header.html .container > *", function() {
      $.getScript("js/header.js");

      $(".flexslider").flexslider({
        animation: "slide",
        start: function(slider) {
          $("body").removeClass("loading");
        }
      });

      changeCurrentLi();
    });
    $("head .media").before('<link rel="stylesheet" href="css/header.css">');

    $(".bottom-banner").load("footer.html .footer-top-content > *");
    $(".footer").load("footer.html .footer-bottom-content > *", function() {
      $.getScript("js/footer.js");
      $.getScript("js/web-mobile.js");
      $(".loader-bg").fadeOut(500);
    });
    $("head .media").before('<link rel="stylesheet" href="css/footer.css">');
  };

  function changeCurrentLi() {
    $(".navigation li").removeClass("nav-active");
    $(".nav-services").addClass("nav-active");
  };
});