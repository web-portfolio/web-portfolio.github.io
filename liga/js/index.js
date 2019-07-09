document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    $(".loader-bg").fadeOut(500);
  });

  $(window).on("load resize", function() {
    getMobileOperatingSystem();
    fixedLogo();
  });

  // setTimeout(function() {
  //   $(".pop-up").slideDown();
  // }, 1500);

  $(".pop-up-btn").click(function() {
    $(".pop-up").slideUp();
  });

  $(".hamburger").click(function() {
    $(this).toggleClass("hamburger-active");
    $(".nav-content").slideToggle();
  });

  function fixedLogo() {
    var windowW = $(window).width();
    if (windowW > 1920) {
      var x = (windowW - 1920) / 2;
      $(".icon-top").css({ left: x + 20 });
    } else {
      $(".icon-top").css({ left: 20 });
    }
  }

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var winPhone = /windows phone/i.test(userAgent);
    var ios = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    var android = /android/i.test(userAgent);

    if (winPhone || ios || android) {
      $('link[href="css/hovers.css"]').prop('disabled', true);
      $("body *").unbind("mouseenter mouseleave");

      return "Phone Device";
    } else {
      $('link[href="css/hovers.css"]').prop('disabled', false);

      return "Desktop";
    }
  }
});