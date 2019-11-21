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
    $("body *").unbind("mouseenter mouseleave");
    //HEADER
    $(".mob-close").show();
    $(".game > img").click(function() {
      var hImg = $(this).outerHeight();
      var wImg = $(this).outerWidth();
      $(this).next().outerHeight(hImg);
      $(this).next().outerWidth(wImg);
      $(this).next().slideDown();
    });
    $(".mob-close").click(function() {
      $(this).parent().slideUp();
    });
    return "Phone Device";
  } else {
    $('link[href="css/hovers.css"]').prop('disabled', false);
    // HEADER
    $(".mob-close").hide();
    $(".nav-logo, .free-acc-logo").mouseenter(function() {
      $(".nav-logo img, .free-acc-logo img").prop("src", "img/nav-logo-hover.png");
    }).mouseleave(function() {
      $(".nav-logo img, .free-acc-logo img").prop("src", "img/nav-logo.png");
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

    $(".home").mouseenter(function() {
      $(".home-icon").prop("src", "img/ico/home-hover.png");
    }).mouseleave(function() {
      $(".home-icon").prop("src", "img/ico/home.png");
    });
    $(".alternative-signin").mouseenter(function() {
      $(".setup").prop("src", "img/ico/setup-hover.png");
    }).mouseleave(function() {
      $(".setup").prop("src", "img/ico/setup.png");
    });

    // FOOTER

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
      "img/ico/chat-hover.png"
    ]);

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
    return "Desktop";
  }
}