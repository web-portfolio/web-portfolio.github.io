document.addEventListener( 'DOMContentLoaded', function( event ) {
  $(window).on("load resize", function() {
    iframeResize();
    $(".last-patch-notes").css("height", "auto");
    containerH = $(".last-patch-notes").outerHeight();
    $(".patch-btn-content-current").hide().removeClass("patch-btn-content-current");
    $(".patch-btn-active").removeClass("patch-btn-active");
  });

  $(window).on("load", function() {
    $(".header").load("header.html .container > *");
    $("head").append($("<style type='text/css'>@import url('css/header.css')</style>"));
    $.getScript("header.js");
    // .done(function() {
    //   //loaded
    // })
    // .fail(function() {
    //   //failed
    // });
  });

  $(".flexslider").flexslider({
    animation: "slide",
    start: function(slider) {
      $("body").removeClass("loading");
    }
  });

  $(".wide").click(function() {
    $(".last-patch-notes").stop(true,false).slideUp();
    $(".last-patch-notes-wide").stop(true,false).slideDown();
    $(".grid").removeClass("grid-wide-active");
    $(this).addClass("grid-wide-active");
    $(this).removeClass("inactive");
    $(".grid").addClass("inactive");
  });

  $(".grid").click(function() {
    $(".last-patch-notes-wide").stop(true,false).slideUp();
    $(".last-patch-notes").stop(true,false).slideDown();
    $(".wide").removeClass("grid-wide-active");
    $(this).addClass("grid-wide-active");
    $(this).removeClass("inactive");
    $(".wide").addClass("inactive");
  });

  $(".tabs li").click(function() {
    var data_id = $(this).attr("data-tab");
    $(this).parent().addClass("current-parent");
    $(this).parent().next().addClass("current-parent");
    $(".current-parent .tab-link, .current-parent .tab-content").removeClass("current");
    $(this).addClass("current");
    $(".current-parent " + "#" + data_id).addClass("current");
    $(this).parent().removeClass("current-parent");
    $(this).parent().next().removeClass("current-parent");
  });

  var containerH = $(".last-patch-notes").outerHeight();
  var element, top, top1, top2, top3;
  $(".patch-btn1 button, .patch-btn2 button, .patch-btn3 button").click(function() {
    if (!$(this).hasClass("patch-btn-active")) {
      $(".patch-btn-content-current").slideUp().removeClass("patch-btn-content-current");
      $(".patch-btn-active").removeClass("patch-btn-active");
    }
    $(this).toggleClass("patch-btn-active");
    $(this).next().toggleClass("patch-btn-content-current");
    element = $(".patch-btn-content-current").outerHeight();
    $(this).next().slideToggle();
    if ($(this).next().hasClass("patch-btn-content-current")) {
      top1 = $(".patch-btn-content-current").position().top;
      top2 = $(".patch-btn-content-current").parent().position().top;
      top3 = $(".patch-btn-content-current").parent().parent().position().top;
      top = (top1 + top2 + top3);
    }
    if (((element + top) > containerH) && $(".patch-btn-content").hasClass("patch-btn-content-current")) {
      $(".last-patch-notes").animate({
        height: element + top + 10
      });
    } else {
      $(".last-patch-notes").animate({
        height: containerH
      });
    }
  });

  $(".close-trailer-btn").click(function(){
    $(this).next().prop("src", "");
    $(this).toggle();
    $(this).prev().toggle();
  });
  $(".game-trailer1 .start-trailer-btn").click(function(){
    $(".game-trailer1 iframe").prop("src", "https://www.youtube.com/embed/IBHL_-biMrQ?autoplay=1");
    $(this).toggle();
    $(this).next().toggle();
  });
  $(".game-trailer2 .start-trailer-btn").click(function(){
    $(".game-trailer2 iframe").prop("src", "https://www.youtube.com/embed/BCr7y4SLhck?autoplay=1");
    $(this).toggle();
    $(this).next().toggle();
  });
  $(".game-trailer3 .start-trailer-btn").click(function(){
    $(".game-trailer3 iframe").prop("src", "https://www.youtube.com/embed/Wq4Y7ztznKc?autoplay=1");
    $(this).toggle();
    $(this).next().toggle();
  });
  $(".game-trailer4 .start-trailer-btn").click(function(){
    $(".game-trailer4 iframe").prop("src", "https://www.youtube.com/embed/wvYXoyxLv64?autoplay=1");
    $(this).toggle();
    $(this).next().toggle();
  });
  $(".game-trailer5 .start-trailer-btn").click(function(){
    $(".game-trailer5 iframe").prop("src", "https://www.youtube.com/embed/TLzhlsEFcVQ?autoplay=1");
    $(this).toggle();
    $(this).next().toggle();
  });
  $(".game-trailer6 .start-trailer-btn").click(function(){
    $(".game-trailer6 iframe").prop("src", "https://www.youtube.com/embed/eYNCCu0y-Is?autoplay=1");
    $(this).toggle();
    $(this).next().toggle();
  });
  $(".game-trailer7 .start-trailer-btn").click(function(){
    $(".game-trailer7 iframe").prop("src", "https://www.youtube.com/embed/jSJr3dXZfcg?autoplay=1");
    $(this).toggle();
    $(this).next().toggle();
  });
  function iframeResize(){
    var w = $(".trailers > div").width();
    var h = (w*56.2060889929742)/100;
    $(".trailers > div").height(h);
  }
});
