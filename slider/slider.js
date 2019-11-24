document.addEventListener("DOMContentLoaded", function(event) {
  var sliderWidth = $(".slider").width(),
    sliderHeight = $(".slider").height(),
    numOfSlides = $(".slider-content > div").length,
    interval = 3500,
    slideTime = 500;

  $(".slider-content").width(numOfSlides * sliderWidth).css("left", -sliderWidth);
  $(".slider-content > div").width(sliderWidth).height(sliderHeight);
  $(".slider-content div:last-child").prependTo($(".slider-content"));
  $(".slider").prepend('<div class="slider-controlls slider-controll-right">&#8250;</div>');
  $(".slider").prepend('<div class="slider-controlls slider-controll-left">&#8249;</div>');
  $(".slider").append('<div class="slider-nav"></div>');

  for (var i = 1; i <= numOfSlides; i++) {
    $(".slider-nav").append('<div id="tab-' + i + '" data-number="' + i + '"></div>')
    if (i == 1) {
      $("#tab-1").addClass("slider-active");
    }
  }

  function moveLeft() {
    $(".slider-content").animate({
      left: -sliderWidth * 2
    }, slideTime, function() {
      $(".slider-content>div").removeClass("slider-active");
      $(".slider-content div:first-child").appendTo($(".slider-content"));
      $(".slider-content").css("left", -sliderWidth);
      $(".slider-content div:nth-child(2)").addClass("slider-active");
      assigneNav();
    });
  };

  function moveRight() {
    $(".slider-content").animate({
      left: 0
    }, slideTime, function() {
      $(".slider-content>div").removeClass("slider-active");
      $(".slider-content div:last-child").prependTo($(".slider-content"));
      $(".slider-content").css("left", -sliderWidth);
      $(".slider-content div:nth-child(2)").addClass("slider-active");
      assigneNav();
    });
  };

  function assigneNav() {
    var activeSliderId = $(".slider-active").attr("data-tab");
    $(".slider-nav>div").removeClass("slider-active");
    $("#" + activeSliderId).addClass("slider-active");
  }

  var autoSlide = setInterval(moveLeft, interval);

  $(".slider-controll-left").click(function() {
    clearInterval(autoSlide);
    $(this).css("pointer-events", "none");
    moveRight();
    setTimeout(function() {
      $(".slider-controll-left").css("pointer-events", "all");
      autoSlide = setInterval(moveLeft, interval);
    }, slideTime);
  });

  $(".slider-controll-right").click(function() {
    clearInterval(autoSlide);
    $(this).css("pointer-events", "none");
    moveLeft();
    setTimeout(function() {
      $(".slider-controll-right").css("pointer-events", "all");
      autoSlide = setInterval(moveLeft, interval);
    }, slideTime);
  });

  $(".slider-nav > div").click(function() {
    var newSlide = $(this).attr("data-number"),
      currentSlide = $(".slider-nav .slider-active").attr("data-number"),
      step = newSlide - currentSlide;

    clearInterval(autoSlide);
    $(".slider-nav").css("pointer-events", "none");

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
      autoSlide = setInterval(moveLeft, interval);
      $(".slider-nav").css("pointer-events", "all");
      console.log("test")
    }, step * slideTime);
  });
});