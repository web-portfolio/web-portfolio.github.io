document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load resize", function() {
    variables();
  });

  var sliderWidth, autoSlide, started = false,
    numOfSlides = $(".slider-content > div").length,
    interval = 4000,
    slideTime = 400;

  function variables() {
    sliderWidth = $(".slider").width();
    $(".slider-content").width(numOfSlides * sliderWidth).css("left", -sliderWidth);
    $(".slider-content > div").width(sliderWidth);
  }

  $(".slider-content > div:last-child").prependTo($(".slider-content"));
  $(".slider").prepend('<div class="slider-controlls slider-controll-right">&#8250;</div>');
  $(".slider").prepend('<div class="slider-controlls slider-controll-left">&#8249;</div>');
  $(".slider").append('<div class="slider-nav"></div>');

  for (var i = 1; i <= numOfSlides; i++) {
    $(".slider-nav").append('<div id="slider-tab-' + i + '" data-number="' + i + '"></div>')
    if (i == 1) {
      $("#slider-tab-1").addClass("slider-active");
    }
  }

  function moveLeft() {
    $(".slider *").css("pointer-events", "none");
    $(".slider-content").animate({
      left: -sliderWidth * 2
    }, slideTime, function() {
      $(".slider-content > div:first-child").appendTo($(".slider-content"));
      assigneNav();
    });
  };

  function moveRight() {
    $(".slider *").css("pointer-events", "none");
    $(".slider-content").animate({
      left: 0
    }, slideTime, function() {
      $(".slider-content > div:last-child").prependTo($(".slider-content"));
      assigneNav();
    });
  };

  function assigneNav() {
    $(".slider-content>div").removeClass("slider-active");
    $(".slider-content").css("left", -sliderWidth);
    $(".slider-content > div:nth-child(2)").addClass("slider-active");

    var activeSliderId = $(".slider-content .slider-active").attr("data-tab");
    $(".slider-nav>div").removeClass("slider-active");
    $("#" + activeSliderId).addClass("slider-active");
    if (step > 0) {
      setTimeout(function() {
        $(".slider *").css("pointer-events", "all");
      }, step * slideTime)
    } else {
      $(".slider *").css("pointer-events", "all");
    }
  }

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top,
      elementBottom = elementTop + $(this).height(),
      viewportTop = $(window).scrollTop(),
      viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  function sliderStart() {
    autoSlide = setInterval(moveLeft, interval);
    $(".slider *").css("pointer-events", "all");
    started = true;
  }

  function sliderStop() {
    clearInterval(autoSlide);
    $(".slider *").css("pointer-events", "none");
    started = false;
  }

  function toggleScroll() {
    if ($(".slider").isInViewport() && started == false) {
      sliderStart();
    } else if (($(".slider").isInViewport() && started == true)) {
      return false;
    } else {
      sliderStop();
    }
  }
  $(window).on("scroll load", toggleScroll);

  $(document).on("visibilitychange", function() {
    if (document.visibilityState == "hidden") {
      sliderStop();
      started = false;
    } else if (document.visibilityState == "visible" && started == false) {
      sliderStart();
    }
  });

  $(".slider-controll-left").click(function() {
    sliderStop();
    moveRight();
    setTimeout(function() {
      sliderStart();
    }, slideTime);
  });

  $(".slider-controll-right").click(function() {
    sliderStop();
    moveLeft();
    setTimeout(function() {
      sliderStart();
    }, slideTime);
  });

  var step, currentSlideTime = slideTime;
  $(".slider-nav > div").click(function() {
    var newSlide = $(this).attr("data-number"),
      currentSlide = $(".slider-nav .slider-active").attr("data-number");
    step = newSlide - currentSlide;
    slideTime = slideTime / Math.abs(step);
    if (slideTime < 100) {
      slideTime = 100;
    }
    sliderStop();
    if (step > 0) {
      for (var i = 1; i <= step; i++) {
        moveLeft();
      }
    } else {
      step = step * -1;
      for (var i = 1; i <= step; i++) {
        moveRight();
      }
    }
    setTimeout(function() {
      sliderStart();
      step = 0;
    }, step * slideTime);
    slideTime = currentSlideTime;
  });

  function touchPreven(e) {
    e.preventDefault();
  }

  var xs, xm, ys, ym, windowTop, currentTop, slide;
  $(".slider").on("touchstart", function(event) {
    windowTop = currentTop = $(window).scrollTop();
    xs = event.touches[0].clientX;
    ys = event.touches[0].clientY;
    sliderStop();
    $(window).off("scroll", toggleScroll);
  });
  $(".slider").on("touchmove", function(event) {
    currentTop = $(window).scrollTop();
    xm = event.touches[0].clientX;
    ym = event.touches[0].clientY;
    if (Math.abs(xs - xm) > Math.abs(ys - ym)) {
      slide = true
    }
    if (currentTop == windowTop && slide == true) {
      $(".slider-content").stop(true, true).animate({
        left: -sliderWidth - (xs - xm)
      }, 1);
      document.addEventListener("touchmove", touchPreven, { passive: false });
    } else {
      xm = ym = windowTop = undefined;
    }
  });
  $(".slider").on("touchend", function() {
    if (xs - xm > 30) {
      moveLeft();
    } else if ((xs - xm) * -1 > 30) {
      moveRight();
    } else {
      $(".slider-content").animate({
        left: -sliderWidth
      }, slideTime)
    }
    xm = ym = undefined;
    slide = false;
    sliderStart();
    $(window).on("scroll", toggleScroll);
    windowTop = currentTop;
    document.removeEventListener("touchmove", touchPreven);
  });
});