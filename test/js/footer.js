getMobileOperatingSystem();
overlayResize();
policyFlowResize();

$(window).on("resize", function() {
  getMobileOperatingSystem();
  overlayResize();
  policyFlowResize();
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
  $(".privacy, .policy-link").click(function() {
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
  $(".policy-flow").outerHeight(pc - 178);
}

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var winPhone = /windows phone/i.test(userAgent);
  var ios = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  var android = /android/i.test(userAgent);

  if (winPhone || ios || android) {
    $('link[href="css/hovers.css"]').prop('disabled', true);
    $("body *").css("cursor" , "default");
    $("body *").unbind("mouseenter mouseleave");
    
    // $(".buy-games").mCustomScrollbar("update");
    return "Phone Device";
  } else {
    $('link[href="css/hovers.css"]').prop('disabled', false);
    
    // $(".buy-games").mCustomScrollbar("disable");
    return "Desktop";
  }
}