document.addEventListener("DOMContentLoaded", function(event) {
  var sliderWidth = $(".slider").width(),
    sliderHeight = $(".slider").height(),
    numOfSlides = $(".slider-content > div").length,
    interval = 5000,
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
    });
  };

  function moveRight() {
    $(".slider-content").animate({
      left: 0
    }, slideInterval, function() {
      $(".slider-content div:last-child").prependTo($(".slider-content"));
      $(".slider-content").css("left", -sliderWidth);
    });
  };

  var autoSlide = setInterval(moveLeft, interval)

  $(".slider").mouseenter(function() {
    clearInterval(autoSlide)
  }).mouseleave(function() {
    autoSlide = setInterval(moveLeft, interval)
  })

  $(".slider").on("swipeleft", function() {
    alert("swipe left")
  })

  $(".slider").on("swiperight", function() {
    alert("swipe right")
  })

  $("p").on("swipeleft", function(e) {
    $(this).hide();
  });

  // $(".slider").on("swiperight", function() {
  //   console.log("test")
  // });


  // console.log(numOfSlides)
});