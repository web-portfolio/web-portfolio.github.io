overlayResize();

$(window).on("resize", function() {
  overlayResize();
  policyFlowResize();
  cookieFlowResize();
});

$(window).scroll(function() {
  if ($(this).scrollTop() >= 250) {
    $(".back-to-top").fadeIn(500)
  } else {
    $(".back-to-top").fadeOut(500)
  }
});

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
var w1 = $(".footer-nav div:nth-child(1) ul").outerWidth();
var w2 = $(".footer-nav div:nth-child(2) ul").outerWidth();
var w3 = $(".footer-nav div:nth-child(3) ul").outerWidth();
var h = Math.max(h1, h2, h3);
var w = Math.max(w1, w2, w3);
$(".footer-nav div ul").outerHeight(h);
$(".footer-nav div ul").outerWidth(w);

var pc;
$(".privacy, .policy-lin").click(function() {
  $(".privacy-content").show();
  policyFlowResize();
  overlayResize();
  $(".overlay").show();
  $("body").css({
    "overflow-y": "hidden"
  })
});
$(".cookie").click(function() {
  $(".cookie-content").show();
  cookieFlowResize();
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
  $(".privacy-content .policy-flow").outerHeight(pc - 118);
}
function cookieFlowResize() {
  pc = $(".cookie-content").outerHeight();
  $(".cookie-content .policy-flow").outerHeight(pc - 118);
}

// JS LINKS
$(".f1").click(function() {
  window.location = "https://bg-bg.facebook.com/Warcraft/";
});
$(".f2").click(function() {
  window.location = "https://twitter.com/warcraft?lang=bg";
});
$(".f3").click(function() {
  window.location = "https://www.youtube.com/results?search_query=world+of+warcraft+trailers";
});
$(".f4").click(function() {
  window.location = "https://plus.google.com/s/world%20of%20warcraft/top";
});
