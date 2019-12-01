$(window).on("resize", function() {
  mobOverfllow();
});

function preload(arrayOfImages) {
  $(arrayOfImages).each(function() {
    $("<img/>")[0].src = this;
  });
}
preload([
  "img/home-page-bg.jpg"
]);

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
    $("body").css("overflowY", "hidden");
    $(document).on("touchmove", touchPreven, { passive: false });
    // document.addEventListener("touchmove", touchPreven, { passive: false });
  } else {
    $("body").css("overflowY", "auto");
    $(document).off("touchmove", touchPreven);
    // document.removeEventListener("touchmove", touchPreven);
  }
};

function touchPreven(e) {
  e.preventDefault();
}

// JS LINKS
$(".nav-home").click(function() {
  window.location = "home-page.html";
});

$(".nav-products").click(function() {
  window.location = "products.html";
});

$(".nav-contacts").click(function() {
  window.location = "contacts.html";
});