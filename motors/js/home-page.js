document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    loadElements();
  });

  $(window).on("load resize", function() {

  });

  function loadElements() {
    $(".header").load("header.html .container > *", function() {
      $.getScript("js/header.js");
    });
    $("head .media").before('<link rel="stylesheet" href="css/header.css">');

    $(".footer").load("footer.html .container > *", function() {
      $.getScript("js/footer.js");
      $.getScript("js/web-mobile.js");
      $(".loader-bg").fadeOut(500);
    });

    $("head .media").before('<link rel="stylesheet" href="css/footer.css">');
  };

  $(".flexslider").flexslider({
    animation: "slide",
    start: function(slider) {
      $("body").removeClass("loading");
    }
  });
});