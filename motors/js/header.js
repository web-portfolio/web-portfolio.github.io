$(window).on("resize", function() {
  slideUpNav();
});

$(".hamburger").click(function() {
  $(this).toggleClass("hamburger-active");
  $(this).css("pointer-events", "none");
  $(".navigation").slideToggle(function(){
    $(".hamburger").css("pointer-events", "all");
  });
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