document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    loadElements();
  });

  $(".categories-car-names li").click(function() {
    $(".categories-car-names li").removeClass("car-names-active");
    $(this).addClass("car-names-active");
  });

  $(".categories-car-names li").click(function() {
    var data_id = $(this).attr("data-tab");
    $(this).parent().addClass("current-parent");
    $(".categories-content").addClass("current-parent");
    $(".current-parent .tab-link, .current-parent .tab-content").removeClass("current");
    $(this).addClass("current");
    $(".current-parent " + "#" + data_id).addClass("current");
    $(this).parent().removeClass("current-parent");
    $(".categories-content").removeClass("current-parent");
  });

  $(".car-pages li").click(function() {
    var data_id = $(this).attr("data-tab");
    $(this).parent().addClass("current-parent-pages");
    $(this).parent().prev().addClass("current-parent-pages");
    $(".current-parent-pages .car-tab-link, .current-parent-pages .car-tab-content").removeClass("current");
    $(this).addClass("current");
    $(".current-parent-pages " + "#" + data_id).addClass("current");
    $(this).parent().removeClass("current-parent-pages");
    $(".car-pages-container").removeClass("current-parent-pages");
  });

  // var last_id_car_categories = localStorage.getItem("tab_id");
  // if (last_id_car_categories) {
  //   $(".categories-car-names li").removeClass("current");
  //   $(".categories-content div").removeClass("current");
  //   $(".categories-car-names li").eq(Number(last_id_car_categories.match(/\d+/)[0]) - 1).addClass("current");
  //   $("#" + last_id_car_categories).addClass("current");
  // }
  // $(".categories-car-names li").click(function() {
  //   var tab_id = $(this).attr("data-tab");
  //   $(".categories-car-names li").removeClass("current");
  //   $(".categories-content div").removeClass("current");
  //   $(this).addClass("current");
  //   $("#" + tab_id).addClass("current");
  //   localStorage.setItem("tab_id", tab_id);
  // });

  // var last_id_car = localStorage.getItem("tab_id");
  // if (last_id_car) {
  //   $(".car-pages li").removeClass("current");
  //   $(".car-pages-container div").removeClass("current");
  //   $(".car-pages li").eq(Number(last_id_car.match(/\d+/)[0]) - 1).addClass("current");
  //   $("#" + last_id_car).addClass("current");
  // }
  // $(".car-pages li").click(function() {
  //   var tab_id = $(this).attr("data-tab");
  //   $(".car-pages li").removeClass("current");
  //   $(".car-pages-container div").removeClass("current");
  //   $(this).addClass("current");
  //   $("#" + tab_id).addClass("current");
  //   localStorage.setItem("tab_id", tab_id);
  // });

  $(".car-item .car-img").click(function() {
    $(this).parent().find(".img-gallery-container").fadeIn(500);
    $("body").css("overflowY", "hidden");
  });

  $(".img-gallery-container-close-btn").click(function() {
    $(".img-gallery-container").fadeOut(500);
    $("body").css("overflowY", "auto");
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