fixedBackToTop();

$(window).on("resize", function() {
  overlayResize();
  policyFlowResize();
  fixedBackToTop();
});

$(window).scroll(function() {
  if ($(this).scrollTop() >= 250) {
    $(".back-to-top").fadeIn(500)
  } else {
    $(".back-to-top").fadeOut(500)
  }
});

function fixedBackToTop() {
  var windowW = $(window).width();
  if (windowW > 1920) {
    var x = (windowW - 1920) / 2;
    $(".back-to-top").css({ right: x + 10 });
  } else {
    $(".back-to-top").css({ right: 10 });
  }
}

$(".back-to-top").click(function() {
  $("body,html").animate({
    scrollTop: 0
  }, 500);
});

var x;

function animate() {
  if (x == true) {
    $(".back-to-top").animate({
      "padding": "0px 10px 0px 0px"
    }, 300);
    $(".back-to-top").animate({
      "padding": "0px 0px 0px 10px"
    }, 300);
    setTimeout(animate, 500);
  }
}

var h1 = $(".footer-nav div:nth-child(1) ul").outerHeight();
var h2 = $(".footer-nav div:nth-child(2) ul").outerHeight();
var h3 = $(".footer-nav div:nth-child(3) ul").outerHeight();
var h = Math.max(h1, h2, h3);
$(".footer-nav div ul").outerHeight(h);

var pc;
$(".privacy, .policy-link, .cookie").click(function() {
  $(".privacy-content").show();
  policyFlowResize();
  overlayResize();
  $(".overlay").show();
  $("body").css({
    "overflow-y": "hidden"
  })
});

$(".policy-close-btn").click(function() {
  $(".privacy-content, .cookie-content").hide();
  $(".overlay").hide();
  $("body").css({
    "overflow-y": "auto"
  })
});

function overlayResize() {
  var ww = $(window).outerWidth();
  var wh = $(window).outerHeight();
  $(".overlay").outerWidth(ww).outerHeight(wh);
};

function policyFlowResize() {
  pc = $(".privacy-content").outerHeight();
  $(".privacy-content .policy-flow, .cookie-content .policy-flow").outerHeight(pc - 155);
}

function preload(arrayOfImages) {
  $(arrayOfImages).each(function() {
    $("<img/>")[0].src = this;
  });
}
preload([
  "img/ico/privacy-hover.png",
  "img/ico/cookie-hover.png",
  "img/ico/phone-hover.png",
  "img/ico/mail-hover.png",
  "img/ico/chat-hover.png",
  "img/ico/f1-hover.png",
  "img/ico/f2-hover.png",
  "img/ico/f3-hover.png",
  "img/ico/f4-hover.png"
]);

// JS LINKS
$(".f1").click(function() {
  window.open("https://bg-bg.facebook.com/Warcraft", "_blank");
});
$(".f2").click(function() {
  window.open("https://twitter.com/warcraft?lang=bg", "_blank");
});
$(".f3").click(function() {
  window.open("https://www.youtube.com/results?search_query=world+of+warcraft+trailers", "_blank");
});
$(".f4").click(function() {
  window.open("https://plus.google.com/s/world%20of%20warcraft/top", "_blank");
});