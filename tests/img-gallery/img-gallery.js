document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load resize", function() {
    variables();
  });

  function preload(arrayOfImages) {
    $(arrayOfImages).each(function() {
      $("<img/>")[0].src = this;
    });
  }
  preload([
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg"
  ]);

  var imgCount = $(".img_gallery .img_items > div").length;
  $(".img_gallery").append('<div class="slider-overlay"></div>');
  $(".slider-overlay").append('<div class="slider"></div>');
  $(".slider").prepend('<div class="slider-controlls slider-controll-right">&#8250;</div>');
  $(".slider").prepend('<div class="slider-controlls slider-controll-left">&#8249;</div>');
  $(".slider-overlay").prepend('<div class="slider-close-btn">X</div>');
  $(".slider").append('<div class="slider-content"></div>');
  $(".slider").append('<div class="slider-nav"></div>');

  for (var i = 1; i <= imgCount; i++) {
    $(".img_gallery .img_items div:nth-child(" + i + ")").clone().appendTo($(".slider-content"));
    $(".slider-content div:nth-child(" + i + ")").attr("data-tab", "slider-tab-" + i);
    $(".img_gallery .img_items>div:nth-child(" + i + ")").attr("data-img-item", i);
    $(".slider-nav").append('<div id="slider-tab-' + i + '" data-number="' + i + '"></div>');
    if (i == 1) {
      $("#slider-tab-1").addClass("slider-active");
    }
  }

  $(".slider-content > div:last-child").prependTo($(".slider-content"));

  var sliderWidth, slideTime = 400,
    winW, winH, padd;

  function variables() {
    winW = $(window).width();
    winH = $(window).height();
    if (winW < winH) {
      $(".slider").css({
        "padding-bottom": "60px",
        "margin-bottom": "-60px",
        "width": "90%"
      });
    } else {
      $(".slider").css({
        "padding-bottom": "0",
        "margin-bottom": "0",
        "width": "70%"
      });
    }
    sliderWidth = $(".slider").width();
    $(".slider-content").width(imgCount * sliderWidth).css("left", -sliderWidth);
    $(".slider-content > div").width(sliderWidth);
    if (winW > 1920) {
      padd = (winW - 1920) / 2;
      $(".slider-close-btn").css("right", padd + 10);
    } else {
      $(".slider-close-btn").css("right", "10px");
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

  function touchPreven(e) {
    e.preventDefault();
  }

  $(".img_items > div").click(function() {
    $("body").css("overflowY", "hidden");
    document.addEventListener("touchmove", touchPreven, { passive: false });
    slideTime = 0;
    var imgNum = $(this).attr("data-img-item");
    for (var i = 1; i < imgNum; i++) {
      moveLeft();
    }
    slideTime = currentSlideTime;
    $(".slider-overlay").fadeIn(slideTime).css("display", "flex");
    variables();
  });

  $(".slider-close-btn").click(function() {
    var imgNumBack = $(".slider-nav .slider-active").attr("data-number");
    $("body").css("overflowY", "auto");
    document.removeEventListener("touchmove", touchPreven);
    $(".slider-overlay").fadeOut(slideTime);
    setTimeout(function() {
      slideTime = 0;
      for (var i = 1; i < imgNumBack; i++) {
        moveRight();
      }
      slideTime = currentSlideTime;
    }, slideTime)
  });

  $(".slider-controll-left").click(function() {
    moveRight();
  });

  $(".slider-controll-right").click(function() {
    moveLeft();
  });

  var step, currentSlideTime = slideTime;
  $(".slider-nav > div").click(function() {
    var newSlide = $(this).attr("data-number"),
      currentSlide = $(".slider-nav .slider-active").attr("data-number");
    step = newSlide - currentSlide;
    slideTime = slideTime / Math.abs(step);
    if (slideTime < 50) {
      slideTime = 50;
    }
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
      step = 0;
    }, step * slideTime);
    slideTime = currentSlideTime;
  });

  var xs, xm;
  $(".slider-content").on("touchstart", function(event) {
    xs = event.touches[0].clientX;
  });
  $(".slider-content").on("touchmove", function(event) {
    xm = event.touches[0].clientX;
    $(this).stop(true, true).animate({
      left: -sliderWidth - (xs - xm)
    }, 1);
  });
  $(".slider-content").on("touchend", function() {
    if (xs - xm > 30) {
      moveLeft();
    } else if ((xs - xm) * -1 > 30) {
      moveRight();
    } else {
      $(this).animate({
        left: -sliderWidth
      }, slideTime)
    }
    xm = undefined;
  });
});