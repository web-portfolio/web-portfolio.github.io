document.addEventListener("DOMContentLoaded", function(event) {
  // $(window).on("load", function() {
  //   $("#nav-menu a,a[href="#top"],a[rel="m_PageScroll2id"]").mPageScroll2id({
  //     highlightSelector: "#nav-menu a"
  //   });

  //   $("a[rel="next"]").click(function(e) {
  //     e.preventDefault();
  //     var to = $(this).parent().parent("section").next().attr("id");
  //     $.mPageScroll2id("scrollTo", to);
  //   });
  // });

  $("#nav-menu li").click(function() {
    var tab_id = $(this).attr("data-tab");
    $("#nav-menu li").removeClass("current");
    $(".tab-content").removeClass("current-scroll");
    $(this).addClass("current");
    $("#" + tab_id).addClass("current-scroll");
    $("html, body").stop(true, false).animate({
      scrollTop: $(".current-scroll").offset().top
    }, 500);
  });

  // $(".tab-content").each(function() {
  //   var x = ($(this).offset().top);
  //   console.log(x);
  // });
  // $(window).scroll(function() {
  //   var winTop = $(window).scrollTop();
  //   var winHalf = $(window).height() / 2;
  //   console.log("window= " + (winTop + winHalf));
  // });

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on("resize scroll", function() {
    $(".tab-content").each(function() {
      var elementId = $(this).attr("id");
      var tabData = $(".tab-link[data-tab=" + elementId + "]");
      if ($(this).isInViewport()) {
        tabData.addClass("current")
      } else {
        tabData.removeClass("current")
      }
    });
  });

});