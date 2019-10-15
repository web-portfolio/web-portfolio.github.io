document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    $(".loader-bg").fadeOut(500);
  });

  $(window).on("load resize", function() {
    getMobileOperatingSystem();
  });

  setTimeout(function() {
    $(".pop-up").slideToggle();
  }, 1500);

  $(".pop-up-btn").click(function() {
    $(".pop-up").slideToggle();
  })

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var winPhone = /windows phone/i.test(userAgent);
    var ios = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    var android = /android/i.test(userAgent);

    if (winPhone || ios || android) {
      $('link[href="css/hovers.css"]').prop('disabled', true);
      $(".registration-btn").click(function() {
        window.location = "https://mobile.efbet.com/register";
      });
      $(".header-top-btn, .header-top-logo img").click(function() {
        window.location = "https://mobile.efbet.com";
      });
      return "Phone Device";
    } else {
      $('link[href="css/hovers.css"]').prop('disabled', false);
      $(".registration-btn").click(function() {
        window.location = "https://www.efbet.com/BG/Registration#action=register";
      });
      $(".header-top-btn, .header-top-logo img").click(function() {
        window.location = "https://www.efbet.com/BG/homepage#action=homepage";
      });
      return "Desktop";
    }
  }
});