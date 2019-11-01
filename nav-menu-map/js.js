document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    chnageBackground()
  });

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

  function chnageBackground() {
    var img_array = ["1.jpg", "2.jpg"],
      currentIndex = 0,
      nextIndex = 1,
      fadeTime = 1000,
      interval = 2000,
      element;

    function assignBackgrounds() {
      for (var i = 0; i < img_array.length; i++) {
        $(".bg-container").append("<div class='bg-item-" + i + "'></div>");
        $(".bg-item-" + i).css("background-image", "url(" + img_array[i] + ")");
        if (i == 0) {
          $(".bg-item-" + i).show();
        } else {
          $(".bg-item-" + i).hide();
        }
      }
    }

    function changeVisibility() {
      setInterval(function() {
        element = $(".bg-item-" + currentIndex);
        element.fadeOut(fadeTime);
        $(".bg-item-" + nextIndex).fadeIn(fadeTime);
        currentIndex = nextIndex;
        nextIndex = (nextIndex + 1) % img_array.length;
      }, interval)
    }

    assignBackgrounds();
    changeVisibility();
  }
});