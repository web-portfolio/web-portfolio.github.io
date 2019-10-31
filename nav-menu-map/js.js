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

  function chnageBackground() {
    var img_array = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

    function assignBackgrounds() {
      for (var i = 0; i < img_array.length; i++) {
        $("#slider-web").append("<div class='slider-bg-" + i + "'></div>");
        $(".slider-bg-" + i).css("background-image", "url(" + img_array[i] + ")");
        if (i == 0) {
          $(".slider-bg-" + i).show();
        } else {
          $(".slider-bg-" + i).hide();
        }
      }
    }

    function changeOpacity() {
      var element = $(".slider-bg-0"),
        firstIndex = 0,
        secondIndex = firstIndex + 1;
      element.fadeOut(1000);
      $(".slider-bg-" + secondIndex).fadeIn(1000);
    }

    assignBackgrounds();
    changeOpacity();
  }








  // function startBackgroundOpacityToggle() {
  //   elem = $('#background-slide-web' + _curIndex);
  //   elem.animate({
  //     opacity: (elem.css('opacity') == 0) ? 1 : 0
  //   }, {
  //     duration: 1000,
  //     start: finishBackgroundOpacityToggle
  //   });
  // };


  $(window).on("load", function() {
    // changeBgWeb();
    chnageBackground()
  });

  function changeBgWeb() {
    var imgCount = 0;
    var img_array = ["1.jpg", "2.jpg"],
      _nxtIndex = 0,
      _curIndex = 0,
      interval = 2000;

    function nextIndex() {
      _nxtIndex = (_nxtIndex + 1) % img_array.length;
      return _nxtIndex;
    };

    function shiftIndexes() {
      _curIndex = _nxtIndex;
      nextIndex();
    }

    function createImgTags() {
      imgCount = img_array.length;
      var html = '';
      var slider = document.getElementById('slider-web');
      for (var i = 0; i < imgCount; i++) {
        html += '<div id="background-slide-web' + i + '" class="background-slider-web"></div>';
      }
      $(slider).html(html);
    }

    function assignBackgrounds() {
      imgCount = img_array.length;
      for (var i = 0; i < imgCount; i++) {

        $('#background-slide-web' + i).css('backgroundImage', function() {
          return 'url(' + img_array[nextIndex()] + ')';
        });
        if (i == 0) {
          $('#background-slide-web' + i).css('opacity', 1);
        } else {
          $('#background-slide-web' + i).css('opacity', 0);
        }
      }
    }

    function startBackgroundOpacityToggle() {
      elem = $('#background-slide-web' + _curIndex);
      elem.animate({
        opacity: (elem.css('opacity') == 0) ? 1 : 0
      }, {
        duration: 1000,
        start: finishBackgroundOpacityToggle
      });
    };

    function finishBackgroundOpacityToggle() {
      elem = $('#background-slide-web' + _nxtIndex);
      elem.animate({
        opacity: (elem.css('opacity') == 0) ? 1 : 0
      }, {
        duration: 1000,
        complete: runSlider
      });
    };

    function runSlider() {
      shiftIndexes();
      setTimeout(startBackgroundOpacityToggle, interval);
    }
    createImgTags();
    assignBackgrounds();
    runSlider();
  };
});