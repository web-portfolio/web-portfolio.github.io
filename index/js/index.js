document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    $(".loader-bg").fadeOut(500);
  });

  $(window).on("load resize", function() {
    gridResize();
    getMobileOperatingSystem();
  });

  function preload(arrayOfImages) {
    $(arrayOfImages).each(function() {
      $("<img/>")[0].src = this;
    });
  }
  preload([
    "index/img/bg-motors.jpg",
    "index/img/bg-fitness.jpg",
    "index/img/bg-wow.jpg",
    "index/img/bg-liga.jpg",
    "index/img/bg-app.jpg"
  ]);

  function gridResize() {
    var w = $(".top-section > div").width();
    var h = (w * 56.2060889929742) / 100;
    $(".top-section > div, .bottom-section > div").height(h);
  };

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var winPhone = /windows phone/i.test(userAgent);
    var ios = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    var android = /android/i.test(userAgent);

    if (winPhone || ios || android) {
      $('link[href="index/css/hovers.css"]').prop('disabled', true);
      $("body *").unbind("mouseenter mouseleave");
      return "Phone Device";
    } else {
      $('link[href="index/css/hovers.css"]').prop('disabled', false);
      $(".top-section > div, .bottom-section > div")
        .mouseenter(function() {
          $(this).find(".hover-info").show();
        })
        .mouseleave(function() {
          $(this).find(".hover-info").hide();
        });
      return "Desktop";
    }
  };

  // JS LINKS
  $(".motors").click(function() {
    window.location = "motors/home-page.html";
  });
  $(".fitness").click(function() {
    window.location = "fitness/fitness.html";
  });
  $(".wow").click(function() {
    window.location = "wow/home-page.html";
  });
  $(".efbet-liga").click(function() {
    window.location = "efbet-landings/liga/liga.html";
  });
  $(".efbet-app").click(function() {
    window.location = "efbet-landings/mobile/BG.html";
  });
});