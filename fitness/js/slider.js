document.addEventListener("DOMContentLoaded", function(event) {
  slider(4000, 400, $(".slider"));

  function slider(interval, slideTime, $slider) {
    $(window).on("load resize", function() {
      variables();
    });

    $slider.addClass("slider-body");

    var interval, slideTime, $slider, sliderWidth, autoSlide, started = false,
      numOfSlides = $slider.find($(".slider-content > div")).length;

    function variables() {
      sliderWidth = $slider.width();
      $slider.find($(".slider-content")).width(numOfSlides * sliderWidth).css("left", -sliderWidth);
      $slider.find($(".slider-content > div")).width(sliderWidth);
    }

    $slider.find($(".slider-content > div:last-child")).prependTo($slider.find($(".slider-content")));
    $slider.prepend('<div class="slider-controlls slider-controll-right">&#8250;</div>');
    $slider.prepend('<div class="slider-controlls slider-controll-left">&#8249;</div>');
    $slider.append('<div class="slider-nav"></div>');

    for (var i = 1; i <= numOfSlides; i++) {
      $slider.find($(".slider-content div:nth-child(" + i + ")")).attr("data-tab", "slider-tab-" + i);
      $slider.find($(".slider-nav")).append('<div class="slider-tab-' + i + '" data-number="' + i + '"></div>');
      if (i == 1) {
        $slider.find($(".slider-tab-1")).addClass("slider-active");
      }
    }

    function moveLeft() {
      $slider.children().css("pointer-events", "none");
      $slider.find($(".slider-content")).animate({
        left: -sliderWidth * 2
      }, slideTime, function() {
        $slider.find($(".slider-content > div:first-child")).appendTo($slider.find($(".slider-content")));
        assigneNav();
      });
    };

    function moveRight() {
      $slider.children().css("pointer-events", "none");
      $slider.find($(".slider-content")).animate({
        left: 0
      }, slideTime, function() {
        $slider.find($(".slider-content > div:last-child")).prependTo($slider.find($(".slider-content")));
        assigneNav();
      });
    };

    function assigneNav() {
      $slider.find($(".slider-content>div")).removeClass("slider-active");
      $slider.find($(".slider-content")).css("left", -sliderWidth);
      $slider.find($(".slider-content > div:nth-child(2)")).addClass("slider-active");

      var activeSliderId = $slider.find($(".slider-content .slider-active")).attr("data-tab");
      $slider.find($(".slider-nav>div")).removeClass("slider-active");
      $slider.find($("." + activeSliderId)).addClass("slider-active");
      if (step > 0) {
        setTimeout(function() {
          $slider.children().css("pointer-events", "all");
        }, step * slideTime)
      } else {
        $slider.children().css("pointer-events", "all");
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
      if (started == true) {
        return false;
      } else {
        autoSlide = setInterval(moveLeft, interval);
        started = true;
      }
    }

    function sliderStop() {
      clearInterval(autoSlide);
      started = false;
    }

    function toggleScroll() {
      if ($slider.isInViewport() && started == false) {
        sliderStart();
      } else if (($slider.isInViewport() && started == true)) {
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

    $slider.find($(".slider-controll-left")).click(function() {
      sliderStop();
      moveRight();
      setTimeout(function() {
        sliderStart();
      }, slideTime);
    });

    $slider.find($(".slider-controll-right")).click(function() {
      sliderStop();
      moveLeft();
      setTimeout(function() {
        sliderStart();
      }, slideTime);
    });

    var step, currentSlideTime = slideTime;
    $slider.find($(".slider-nav > div")).click(function() {
      var newSlide = $(this).attr("data-number"),
        currentSlide = $slider.find($(".slider-nav .slider-active")).attr("data-number");
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
    $slider.find($(".slider-content")).on("touchstart", function(event) {
      windowTop = currentTop = $(window).scrollTop();
      xs = event.touches[0].clientX;
      ys = event.touches[0].clientY;
      sliderStop();
      $(window).off("scroll", toggleScroll);
    });
    $slider.find($(".slider-content")).on("touchmove", function(event) {
      currentTop = $(window).scrollTop();
      xm = event.touches[0].clientX;
      ym = event.touches[0].clientY;
      if (Math.abs(xs - xm) > Math.abs(ys - ym)) {
        slide = true
      }
      if (currentTop == windowTop && slide == true) {
        $(this).stop(true, true).animate({
          left: -sliderWidth - (xs - xm)
        }, 1);
        document.addEventListener("touchmove", touchPreven, { passive: false });
      } else {
        xm = ym = windowTop = undefined;
      }
    });
    $slider.find($(".slider-content")).on("touchend", function() {
      if (xs - xm > 30) {
        moveLeft();
      } else if ((xs - xm) * -1 > 30) {
        moveRight();
      } else {
        $(this).animate({
          left: -sliderWidth
        }, slideTime)
      }
      xm = ym = undefined;
      slide = false;
      sliderStart();
      $(window).on("scroll", toggleScroll);
      document.removeEventListener("touchmove", touchPreven);
    });
  }
});