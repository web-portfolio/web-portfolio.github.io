document.addEventListener("DOMContentLoaded", function(event) {
  $(".tab-link").click(function() {
    var tab_id = $(this).attr("data-tab");
    $(".tab-content").removeClass("current-scroll");
    $("#" + tab_id).addClass("current-scroll");
    $("html, body").stop(true, false).animate({
      scrollTop: $(".current-scroll").offset().top
    }, 1000);
  });

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop() + $(window).height() / 2;
    var viewportBottom = viewportTop + 1;
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