document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    loadElements();
  });

  var last_id_car_categories = localStorage.getItem("tab_id");
  if (last_id_car_categories) {
    $(".categories-car-names li").removeClass("current car-names-active");
    $(".categories-content > div").removeClass("current");
    $(".categories-car-names li").eq(Number(last_id_car_categories.match(/\d+/)[0]) - 1).addClass("current car-names-active");
    $("#" + last_id_car_categories).addClass("current");
  }
  $(".categories-car-names li").click(function() {
    var tab_id = $(this).attr("data-tab");
    $(".categories-car-names li").removeClass("current car-names-active");
    $(".categories-content > div").removeClass("current");
    $(this).addClass("current car-names-active");
    $("#" + tab_id).addClass("current");
    localStorage.setItem("tab_id", tab_id);
  });

  var last_id_car_lamborgini = localStorage.getItem("tab_id_lamborgini");
  if (last_id_car_lamborgini) {
    $(".car-pages-lamborgini li").removeClass("current");
    $(".car-pages-container-lamborgini > div").removeClass("current");
    $(".car-pages-lamborgini li").eq(Number(last_id_car_lamborgini.match(/\d+/)[0]) - 1).addClass("current");
    $("#" + last_id_car_lamborgini).addClass("current");
  }
  $(".car-pages-lamborgini li").click(function() {
    var tab_id_lamborgini = $(this).attr("data-tab");
    $(".car-pages-lamborgini li").removeClass("current");
    $(".car-pages-container-lamborgini > div").removeClass("current");
    $(this).addClass("current");
    $("#" + tab_id_lamborgini).addClass("current");
    localStorage.setItem("tab_id_lamborgini", tab_id_lamborgini);
  });

  var last_id_car_porche = localStorage.getItem("tab_id_porche");
  if (last_id_car_porche) {
    $(".car-pages-porche li").removeClass("current");
    $(".car-pages-container-porche > div").removeClass("current");
    $(".car-pages-porche li").eq(Number(last_id_car_porche.match(/\d+/)[0]) - 1).addClass("current");
    $("#" + last_id_car_porche).addClass("current");
  }
  $(".car-pages-porche li").click(function() {
    var tab_id_porche = $(this).attr("data-tab");
    $(".car-pages-porche li").removeClass("current");
    $(".car-pages-container-porche > div").removeClass("current");
    $(this).addClass("current");
    $("#" + tab_id_porche).addClass("current");
    localStorage.setItem("tab_id_porche", tab_id_porche);
  });

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