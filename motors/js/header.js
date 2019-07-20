$(window).on("resize", function() {
  // slideUpNav();
});

$(".hamburger").click(function() {
  $(this).toggleClass("hamburger-active");
  $(".navigation").stop(true, true).slideToggle();
  if ($(".hamburger").hasClass("hamburger-active")) {
    $("body").css("overflowY", "hidden");
  } else {
    $("body").css("overflowY", "auto");
  }
});

function slideUpNav() {
  $(".hamburger").removeClass("hamburger-active");
  $(".navigation").slideUp();
  $("body").css("overflowY", "auto");
};

// JS LINKS
$(".nav-home").click(function() {
  window.location = "home-page.html";
});

$(".nav-products").click(function() {
  window.location = "products.html";
});