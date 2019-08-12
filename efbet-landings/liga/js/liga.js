document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    $(".loader-bg").fadeOut(500);
  });

  $(window).on("load resize", function() {
    getMobileOperatingSystem();
    fixedLogo();
    mobOverfllow();
  });

  setTimeout(function() {
    $(".pop-up").slideDown();
  }, 1500);

  $(".pop-up-btn").click(function() {
    $(".pop-up").slideUp();
  });

  $(".hamburger").click(function() {
    $(this).toggleClass("hamburger-active");
    $(this).css("pointer-events", "none");
    $(".nav-content").slideToggle(function() {
      $(".hamburger").css("pointer-events", "all");
    });
    mobOverfllow();
  });

  $(".open-rules").click(function() {
    $(".rule-text-container").fadeIn(500);
    $("body").css("overflowY", "hidden");
  });

  $(".close-btn").click(function() {
    $(".rule-text-container").fadeOut(500);
    $("body").css("overflowY", "auto");
  });

  function mobOverfllow() {
    if ($(".hamburger").hasClass("hamburger-active") && $(".hamburger").height() > 0) {
      $("body").css("overflowY", "hidden");
    } else {
      $("body").css("overflowY", "auto");
    }
  };

  $(".rules").click(function() {
    $(".nav-content").hide();
    $(".hamburger").removeClass("hamburger-active");
    $("html, body").animate({
      scrollTop: $(".scroll").offset().top - 100
    }, 500);
  });

  function fixedLogo() {
    var windowW = $(window).width();
    if (windowW > 1920) {
      var x = (windowW - 1920) / 2;
      $(".icon-top").css({ left: x + 20 });
    } else {
      $(".icon-top").css({ left: 20 });
    }
  }

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var winPhone = /windows phone/i.test(userAgent);
    var ios = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    var android = /android/i.test(userAgent);

    if (winPhone || ios || android) {
      $('link[href="css/hovers.css"]').prop("disabled", true);
      $("body *").unbind("mouseenter mouseleave");
      $(".registration").click(function() {
        window.location = "https://mobile.efbet.com/register";
      });
      $(".bet").click(function() {
        window.location = "https://mobile.efbet.com/sports/node/361881.1";
      });
      $(".footer-btn, .winners").click(function() {
        window.location = "https://liga.efbet.com/";
      });
      return "Phone Device";
    } else {
      $('link[href="css/hovers.css"]').prop("disabled", false);
      $(".registration").click(function() {
        window.location = "https://www.efbet.com/BG/Registration#action=register";
      });
      $(".bet").click(function() {
        window.location = "https://www.efbet.com/BG/sports#bo-navigation=282241.1,282242.1,361881.1&action=market-group-list";
      });
      $(".footer-btn, .winners").click(function() {
        window.location = "https://liga.efbet.com/";
      });
      return "Desktop";
    }
  };
});