document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    $(".loader-bg").fadeOut(1000);
    alert("test");
  });

  $(window).on("load resize", function() {
    gridResize();
    getMobileOperatingSystem();
    alert("test 2");
  });

  function gridResize() {
    var w = $(".container > div").width();
    var h = (w * 56.2060889929742) / 100;
    $(".container > div").height(h);
  }

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
      $(".container > div")
        .mouseenter(function() {
          $(this).find(".hover-info").show();
        })
        .mouseleave(function() {
          $(this).find(".hover-info").hide();
        });
      return "Desktop";
    }
  }

  // JS LINKS
  $(".wow").click(function() {
    window.location = "wow/home-page.html";
  });
  $(".motors").click(function() {
    window.location = "motors/home-page.html";
  });
});