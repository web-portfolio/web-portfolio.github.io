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
      // $.getScript("js/simplebar.js");
      $(".loader-bg").fadeOut(1000);
    });
    $("head .media").before('<link rel="stylesheet" href="css/footer.css">');
    // $("head .media").before('<link rel="stylesheet" href="css/simplebar.css">');
  };

  // $(".flexslider").flexslider({
  //   animation: "slide",
  //   start: function(slider) {
  //     $("body").removeClass("loading");
  //   }
  // });
});