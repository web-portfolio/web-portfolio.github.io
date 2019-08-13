$(window).on("resize", function() {
  mobOverfllow();
});

$(".hamburger").click(function() {
  $(this).toggleClass("hamburger-active");
  $(this).css("pointer-events", "none");
  $(".navigation").slideToggle(function() {
    $(".hamburger").css("pointer-events", "all");
  });
  mobOverfllow();
});

function mobOverfllow() {
  if ($(".hamburger").hasClass("hamburger-active") && $(".hamburger").height() > 0) {
    $("body").css("overflow", "hidden");
  } else {
    $("body").css("overflow", "auto");
  }
};

// JS LINKS
$(".nav-home").click(function() {
  window.location = "home-page.html";
});

$(".nav-products").click(function() {
  window.location = "products.html";
});

$(".nav-services").click(function() {
  window.location = "services.html";
});