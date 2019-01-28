// getMobileOperatingSystem();
overlayResize();

$(window).on("resize", function() {
  getMobileOperatingSystem();
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

// function getMobileOperatingSystem() {
//   var userAgent = navigator.userAgent || navigator.vendor || window.opera;
//   var winPhone = /windows phone/i.test(userAgent);
//   var ios = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
//   var android = /android/i.test(userAgent);
//
//   if (winPhone || ios || android) {
//     $('link[href="css/hovers.css"]').prop('disabled', true);
//     $("body *").css("cursor", "default");
//     $("body *").unbind("mouseenter mouseleave");
//     // $(".buy-games").mCustomScrollbar("update");
//     return "Phone Device";
//   } else {
//     $('link[href="css/hovers.css"]').prop('disabled', false);
//     $("body *").bind("mouseenter mouseleave");
//     $(".back-to-top").hover(function() {
//       x = true;
//       animate();
//     }, function() {
//       $(".back-to-top").stop(true, false);
//       $(".back-to-top").animate({
//         "padding": "0"
//       }, 300);
//       x = false;
//     });
//     $(".footer-phone").hover(function() {
//       $(this).css("background-image", "url('img/ico/phone-hover.png')");
//     }, function() {
//       $(this).css("background-image", "url('img/ico/phone.png')");
//     });
//     $(".footer-email").hover(function() {
//       $(this).css("background-image", "url('img/ico/mail-hover.png')");
//     }, function() {
//       $(this).css("background-image", "url('img/ico/mail.png')");
//     });
//     $(".live-chat").hover(function() {
//       $(this).css("background-image", "url('img/ico/chat-hover.png')");
//     }, function() {
//       $(this).css("background-image", "url('img/ico/chat.png')");
//     });
//     $(".cookie").hover(function() {
//       $(this).css("background-image", "url('img/ico/cookie-hover.png')");
//     }, function() {
//       $(this).css("background-image", "url('img/ico/cookie.png')");
//     });
//     $(".privacy").hover(function() {
//       $(this).css("background-image", "url('img/ico/privacy-hover.png')");
//     }, function() {
//       $(this).css("background-image", "url('img/ico/privacy.png')");
//     });
//     $(".f1").hover(function() {
//       $(this).css("background-image", "url('img/ico/f1-hover.png')");
//     }, function() {
//       $(this).css("background-image", "url('img/ico/f1.png')");
//     });
//     $(".f2").hover(function() {
//       $(this).css("background-image", "url('img/ico/f2-hover.png')");
//     }, function() {
//       $(this).css("background-image", "url('img/ico/f2.png')");
//     });
//     $(".f3").hover(function() {
//       $(this).css("background-image", "url('img/ico/f3-hover.png')");
//     }, function() {
//       $(this).css("background-image", "url('img/ico/f3.png')");
//     });
//     $(".f4").hover(function() {
//       $(this).css("background-image", "url('img/ico/f4-hover.png')");
//     }, function() {
//       $(this).css("background-image", "url('img/ico/f4.png')");
//     });
//     // $(".buy-games").mCustomScrollbar("disable");
//     return "Desktop";
//   }
// }
