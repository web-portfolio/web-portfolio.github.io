document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    loadElements();
  });

  $(".categories-car-names li").click(function(){
    $(".categories-car-names li").removeClass("car-names-active");
    $(this).addClass("car-names-active");
  });

  $(".tabs li").click(function() {
    var data_id = $(this).attr("data-tab");
    $(this).parent().addClass("current-parent");
    $(".categories-content").addClass("current-parent");
    $(".current-parent .tab-link, .current-parent .tab-content").removeClass("current");
    $(this).addClass("current");
    $(".current-parent " + "#" + data_id).addClass("current");
    $(this).parent().removeClass("current-parent");
    $(".categories-content").removeClass("current-parent");
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
    $(".nav-products").addClass("nav-active");
  };
});