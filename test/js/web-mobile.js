getMobileOperatingSystem();

$(window).on("resize", function() {
  getMobileOperatingSystem();
});

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var winPhone = /windows phone/i.test(userAgent);
  var ios = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  var android = /android/i.test(userAgent);

  if (winPhone || ios || android) {
    $('link[href="css/hovers.css"]').prop('disabled', true);
    $("body *").css("cursor", "default");
    $("body *").unbind("mouseenter mouseleave");
    // $(".buy-games").mCustomScrollbar("update");
    //HEADER
    $(".mob-close").show();
    $(".game > img").click(function() {
      var hImg = $(this).outerHeight();
      var wImg = $(this).outerWidth();
      $(this).next().outerHeight(hImg);
      $(this).next().outerWidth(wImg);
      $(this).next().slideDown();
    });
    $(".mob-close").click(function(){
      $(this).parent().slideUp();
    });
    return "Phone Device";
  } else {
    $('link[href="css/hovers.css"]').prop('disabled', false);
    // HEADER
    $(".mob-close").hide();
    $(".nav-logo").hover(function() {
      $(".nav-logo img").prop("src", "img/nav-logo-hover.png");
    }, function() {
      $(".nav-logo img").prop("src", "img/nav-logo.png");
    });

    $(".games").hover(function() {
      $(".buy-game-icon").prop("src", "img/ico/buy-hover.png");
    }, function() {
      $(".buy-game-icon").prop("src", "img/ico/buy.png");
    });

    $(".profile").hover(function() {
      $(".profile-icon").prop("src", "img/ico/profile-hover.png");
    }, function() {
      $(".profile-icon").prop("src", "img/ico/profile.png");
    });

    $(".game").hover(function() {
      var hImg = $("img", this).outerHeight();
      var wImg = $("img", this).outerWidth();
      $(".buy-this", this).outerHeight(hImg);
      $(".buy-this", this).outerWidth(wImg);
      $(".buy-this", this).slideDown();
    }, function() {
      $(".buy-this", this).stop(true, false).slideUp();
    });
    // FOOTER
    $(".back-to-top").hover(function() {
      x = true;
      animate();
    }, function() {
      $(".back-to-top").stop(true, false);
      $(".back-to-top").animate({
        "padding": "0"
      }, 300);
      x = false;
    });
    $(".footer-phone").hover(function() {
      $(this).css("background-image", "url('img/ico/phone-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/phone.png')");
    });

    $(".footer-email").hover(function() {
      $(this).css("background-image", "url('img/ico/mail-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/mail.png')");
    });

    $(".live-chat").hover(function() {
      $(this).css("background-image", "url('img/ico/chat-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/chat.png')");
    });

    $(".cookie").hover(function() {
      $(this).css("background-image", "url('img/ico/cookie-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/cookie.png')");
    });

    $(".privacy").hover(function() {
      $(this).css("background-image", "url('img/ico/privacy-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/privacy.png')");
    });

    $(".f1").hover(function() {
      $(this).css("background-image", "url('img/ico/f1-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/f1.png')");
    });

    $(".f2").hover(function() {
      $(this).css("background-image", "url('img/ico/f2-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/f2.png')");
    });

    $(".f3").hover(function() {
      $(this).css("background-image", "url('img/ico/f3-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/f3.png')");
    });

    $(".f4").hover(function() {
      $(this).css("background-image", "url('img/ico/f4-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/f4.png')");
    });

    // $(".buy-games").mCustomScrollbar("disable");
    return "Desktop";
  }
}
