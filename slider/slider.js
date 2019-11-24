document.addEventListener("DOMContentLoaded", function(event) {
  var sliderWidth = $(".slider").width(),
    sliderHeight = $(".slider").height(),
    numOfSlides = $(".slider-content > div").length,
    interval = 3500,
    slideInterval = 500;

  $(".slider-content").width(numOfSlides * sliderWidth).css("left", -sliderWidth);
  $(".slider-content > div").width(sliderWidth).height(sliderHeight);
  $(".slider-content div:last-child").prependTo($(".slider-content"));

  function moveLeft() {
    $(".slider-content").animate({
      left: -sliderWidth * 2
    }, slideInterval, function() {
      $(".slider-content div:first-child").appendTo($(".slider-content"));
      $(".slider-content").css("left", -sliderWidth);
      $(".slider-controll-left").css("pointer-events", "all");
    });
  };

  function moveRight() {
    $(".slider-content").animate({
      left: 0
    }, slideInterval, function() {
      $(".slider-content div:last-child").prependTo($(".slider-content"));
      $(".slider-content").css("left", -sliderWidth);
      $(".slider-controll-right").css("pointer-events", "all");
    });
  };

  var autoSlide = setInterval(moveLeft, interval);

  $(".slider-controll-left").click(function() {
    clearInterval(autoSlide);
    $(this).css("pointer-events", "none");
    moveLeft();
    autoSlide = setInterval(moveLeft, interval)
  });

  $(".slider-controll-right").click(function() {
    clearInterval(autoSlide);
    $(this).css("pointer-events", "none");
    moveRight();
    autoSlide = setInterval(moveLeft, interval)
  });


  // $(this).css("pointer-events", "none");
  // $(".slider").mouseenter(function() {
  //   clearInterval(autoSlide)
  // }).mouseleave(function() {
  //   autoSlide = setInterval(moveLeft, interval)
  // })
  // $(".slider").on("swiperight", function() {
  //   console.log("test")
  // });
  // console.log(numOfSlides)
});