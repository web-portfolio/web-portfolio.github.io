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
    $(".nav-logo").mouseenter(function() {
      $(".nav-logo img").prop("src", "img/nav-logo-hover.png");
    }).mouseleave(function() {
      $(".nav-logo img").prop("src", "img/nav-logo.png");
    });

    $(".games").mouseenter(function() {
      $(".buy-game-icon").prop("src", "img/ico/buy-hover.png");
    }).mouseleave(function() {
      $(".buy-game-icon").prop("src", "img/ico/buy.png");
    });

    $(".profile").mouseenter(function() {
      $(".profile-icon").prop("src", "img/ico/profile-hover.png");
    }).mouseleave(function() {
      $(".profile-icon").prop("src", "img/ico/profile.png");
    });

    $(".game").mouseenter(function() {
      var hImg = $("img", this).outerHeight();
      var wImg = $("img", this).outerWidth();
      $(".buy-this", this).outerHeight(hImg);
      $(".buy-this", this).outerWidth(wImg);
      $(".buy-this", this).slideDown();
    }).mouseleave(function() {
      $(".buy-this", this).stop(true, false).slideUp();
    });
    // FOOTER
    $(".back-to-top").mouseenter(function() {
      x = true;
      animate();
    }).mouseleave(function() {
      $(".back-to-top").stop(true, false);
      $(".back-to-top").animate({
        "padding": "0"
      }, 300);
      x = false;
    });
    $(".footer-phone").mouseenter(function() {
      $(this).css("background-image", "url('img/ico/phone-hover.png')");
    }).mouseleave(function() {
      $(this).css("background-image", "url('img/ico/phone.png')");
    });

    $(".footer-email").mouseenter(function() {
      $(this).css("background-image", "url('img/ico/mail-hover.png')");
    }).mouseleave(function() {
      $(this).css("background-image", "url('img/ico/mail.png')");
    });

    $(".live-chat").mouseenter(function() {
      $(this).css("background-image", "url('img/ico/chat-hover.png')");
    }).mouseleave(function() {
      $(this).css("background-image", "url('img/ico/chat.png')");
    });

    $(".cookie").mouseenter(function() {
      $(this).css("background-image", "url('img/ico/cookie-hover.png')");
    }).mouseleave(function() {
      $(this).css("background-image", "url('img/ico/cookie.png')");
    });

    $(".privacy").mouseenter(function() {
      $(this).css("background-image", "url('img/ico/privacy-hover.png')");
    }).mouseleave(function() {
      $(this).css("background-image", "url('img/ico/privacy.png')");
    });

    $(".f1").mouseenter(function() {
      $(this).css("background-image", "url('img/ico/f1-hover.png')");
    }).mouseleave(function() {
      $(this).css("background-image", "url('img/ico/f1.png')");
    });

    $(".f2").mouseenter(function() {
      $(this).css("background-image", "url('img/ico/f2-hover.png')");
    }).mouseleave(function() {
      $(this).css("background-image", "url('img/ico/f2.png')");
    });

    $(".f3").mouseenter(function() {
      $(this).css("background-image", "url('img/ico/f3-hover.png')");
    }).mouseleave(function() {
      $(this).css("background-image", "url('img/ico/f3.png')");
    });

    $(".f4").mouseenter(function() {
      $(this).css("background-image", "url('img/ico/f4-hover.png')");
    }).mouseleave(function() {
      $(this).css("background-image", "url('img/ico/f4.png')");
    });

    // $(".buy-games").mCustomScrollbar("disable");
    return "Desktop";
  }
}
