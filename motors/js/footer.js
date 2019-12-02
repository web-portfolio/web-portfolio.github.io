fixedBackToTop();

$(window).on("resize", function() {
  fixedBackToTop();
});

$(window).scroll(function() {
  if ($(this).scrollTop() >= 250) {
    $(".back-to-top").stop(true, false).fadeIn(500)
  } else {
    $(".back-to-top").stop(true, false).fadeOut(500)
  }
});

function fixedBackToTop() {
  var windowW = $(window).width();
  if (windowW > 1920) {
    var x = (windowW - 1920) / 2;
    $(".back-to-top").css({ right: x + 10 });
  } else {
    $(".back-to-top").css({ right: 10 });
  }
}

$(".back-to-top").click(function() {
  $("body,html").animate({
    scrollTop: 0
  }, 500);
});

var x;

function animate() {
  if (x == true) {
    $(".back-to-top").animate({
      "padding": "0px 10px 0px 0px"
    }, 300);
    $(".back-to-top").animate({
      "padding": "0px 0px 0px 10px"
    }, 300);
    setTimeout(animate, 500);
  }
}