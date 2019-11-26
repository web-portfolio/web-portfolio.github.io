document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    chnageBackground();
    $(".loader-bg").fadeOut(500);
  });

  $(window).on("resize", function() {
    mobOverfllow();
  });

  $(window).on("load resize", function() {
    resize();
    getMobileOperatingSystem();
    fixedMapNav();
  });

  $(".flexslider").flexslider({
    animation: "slide",
    start: function(slider) {
      $("body").removeClass("loading");
    }
  });

  function resize() {
    var widnowWidth = $(window).width();
    var windowHeight = $(window).height();
    $(".header, .header-text").outerWidth(widnowWidth).outerHeight(windowHeight);
    $(".chose-trainer").height($(".chose-trainer").width() * 1.248945147679325);

    var padd = ((widnowWidth - 1920) / 2) + (widnowWidth * 0.05);
    if (widnowWidth > 1920) {
      $(".navigation").css({
        "padding-left": padd,
        "padding-right": padd
      });
    } else {
      $(".navigation").css({
        "padding-left": widnowWidth * 0.05,
        "padding-right": widnowWidth * 0.05,
      });
    }

    if (widnowWidth > windowHeight) {
      $(".nav-right li").css("padding", "5px")
    } else {
      $(".nav-right li").css("padding", "10px")
    }

    if (widnowWidth < windowHeight) {
      $(".bg-item-0, #section-5").css("background-position-x", "25%");
      $(".bg-item-1").css("background-position-x", "60%");
      $("#section-4").css("background-position-x", "59%");
      $(".footer").css("background-position-x", "75%");
    } else {
      $(".bg-item-1, #section-4, #section-5").css("background-position-x", "center");
      $(".bg-item-0").css("background-position-x", "left");
      $(".footer").css("background-position-x", "right");
    }
  }

  function chnageBackground() {
    var img_array = ["img/nav-bg-1.jpg", "img/nav-bg-2.jpg"],
      currentIndex = 0,
      nextIndex = 1,
      fadeTime = 1000,
      interval = 3500;

    function assignBackgrounds() {
      for (var i = 0; i < img_array.length; i++) {
        $(".bg-container").append("<div class='bg-item-" + i + "'></div>");
        $(".bg-item-" + i).css({
          "background": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(" + img_array[i] + ")"
        });
        if (i == 0) {
          $(".bg-item-" + i).show();
        } else {
          $(".bg-item-" + i).hide();
        }
      }
    }

    function changeVisibility() {
      $(".bg-item-" + currentIndex).fadeOut(fadeTime);
      $(".bg-item-" + nextIndex).fadeIn(fadeTime);
      currentIndex = nextIndex;
      nextIndex = (nextIndex + 1) % img_array.length;
    }

    assignBackgrounds();
    var autoStop = setInterval(changeVisibility, interval);
    $(document).on("visibilitychange", function() {
      if (document.visibilityState == "hidden") {
        clearInterval(autoStop);
      } else {
        autoStop = setInterval(changeVisibility, interval);
      }
    });
  }

  var navHeight = $(".navigation").height();

  function fixedNav() {
    if ($(window).scrollTop() > 40) {
      $(".navigation").stop(true, false).animate({
        "opacity": "1",
        "top": "0"
      });
    } else {
      $(".navigation").stop(true, false).animate({
        "opacity": "0",
        "top": -navHeight
      });
    }
  }

  function fixedMapNav() {
    var deviceHeight = window.screen.availHeight;
    var navMapHeight = $(".nav-map").height();
    $(".nav-map").css("top", deviceHeight / 2 - navMapHeight / 2);
    console.log(deviceHeight)
  }

  $(".nav-tab-link").click(function() {
    var tab_id = $(this).attr("data-tab");
    $(".nav-tab-content").removeClass("current-scroll");
    $("#" + tab_id).addClass("current-scroll");
    $("html, body").stop(true, false).animate({
      scrollTop: $(".current-scroll").offset().top - navHeight
    }, 1000);
  });
  $(".begin-btn").click(function() {
    $("html, body").stop(true, false).animate({
      scrollTop: $("#section-3").offset().top - navHeight
    }, 1000);
  });
  $(".learn-more-btn").click(function() {
    $("html, body").stop(true, false).animate({
      scrollTop: $("#section-2").offset().top - navHeight
    }, 1000);
  });

  $.fn.isInViewportPixel = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop() + $(window).height() / 2;
    var viewportBottom = viewportTop + 1;
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  $.fn.assignAnimation = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).height();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height() * 0.85;
    return (elementTop > viewportTop && elementTop < viewportBottom) || (elementBottom > viewportTop && elementBottom < viewportBottom);
  };
  $.fn.removeAnimation = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).parent().height();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementTop > viewportBottom || elementBottom < viewportTop;
  };

  $(".assign-animation").prepend('<div class="remove-animation"></div>');
  $(".assign-animation").css("visibility", "hidden");
  var lastScroll = 0;
  $(window).on("resize scroll load", function() {
    fixedNav();
    $(".nav-tab-content").each(function() {
      var elementId = $(this).attr("id");
      var tabData = $(".nav-tab-link[data-tab=" + elementId + "]");
      if ($(this).isInViewportPixel()) {
        tabData.addClass("nav-current")
      } else {
        tabData.removeClass("nav-current")
      }
    });
    $(".remove-animation").each(function() {
      if ($(this).removeAnimation()) {
        $(this).parent(".assign-animation").css("visibility", "hidden").removeClass("fadeInDown fadeInUp");
      }
    });
    var curScroll = $(this).scrollTop();
    if (curScroll > lastScroll) {
      scrollDown = true;
      scrollUp = false;
    } else {
      scrollDown = false;
      scrollUp = true;
    }
    lastScroll = curScroll
    $(".assign-animation").each(function() {
      if (!$(this).hasClass("fadeInDown") && !$(this).hasClass("fadeInUp")) {
        if ($(this).assignAnimation() && scrollUp == true) {
          $(this).css("visibility", "visible").addClass("fadeInDown");
        } else if ($(this).assignAnimation() && scrollDown == true) {
          $(this).css("visibility", "visible").addClass("fadeInUp");
        }
      }
    });
  });

  $(".hamburger").click(function() {
    $(this).toggleClass("hamburger-active");
    $(this).css("pointer-events", "none");
    $(".nav-right").slideToggle(function() {
      $(".hamburger").css("pointer-events", "all");
    }).css("display", "flex");
    mobOverfllow();
  });

  function mobOverfllow() {
    if ($(".hamburger").hasClass("hamburger-active") && $(".hamburger").height() > 0) {
      $("body").css("overflowY", "hidden");
      document.addEventListener("touchmove", touchPreven, { passive: false });
    } else {
      $("body").css("overflowY", "auto");
      document.removeEventListener("touchmove", touchPreven);
    }
  };

  function touchPreven(e) {
    e.preventDefault();
  }

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var winPhone = /windows phone/i.test(userAgent);
    var ios = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    var android = /android/i.test(userAgent);

    if (winPhone || ios || android) {
      $('link[href="css/hovers.css"]').prop("disabled", true);
      $("body *").unbind("mouseenter mouseleave");
      $(".mob-close-btn, .mob-info").show();
      $(".mob-info").click(function() {
        $(this).parent().find($(".trainer-social")).fadeIn(500).css("display", "flex");
      });
      $(".mob-close-btn").click(function() {
        $(this).parent().fadeOut(500)
      });
      $(".assign-animation").css("visibility", "visible").removeClass("assign-animation").addClass("no-animation");
      $(".nav-tab-link").click(function() {
        $(".nav-right").slideUp(500);
        $(".hamburger").removeClass("hamburger-active");
        $("body").css("overflowY", "auto");
        document.removeEventListener("touchmove", touchPreven);
      });
      return "Phone Device";
    } else {
      $('link[href="css/hovers.css"]').prop("disabled", false);
      $(".chose-trainer").mouseenter(function() {
        $(this).find(".trainer-social").stop(true, false).fadeIn(500).css("display", "flex");
      }).mouseleave(function() {
        $(this).find(".trainer-social").stop(true, false).fadeOut(500);
      });
      $(".mob-close-btn, .mob-info").hide();
      $(".no-animation").css("visibility", "hidden").removeClass("no-animation").addClass("assign-animation");
      return "Desktop";
    }
  };
});