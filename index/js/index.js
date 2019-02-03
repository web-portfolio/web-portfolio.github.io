document.addEventListener('DOMContentLoaded', function(event) {
  $(window).on("load resize", function() {
    gridResize();
    getMobileOperatingSystem();
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
        .mouseover(function() {
          $(this).find("div").show();
        })
        .mouseout(function() {
          $(this).find("div").hide();
        });
      return "Desktop";
    }
  }

  // JS LINKS
  $(".wow").click(function() {
    window.location = "wow/home-page.html";
  });
  $(".test").click(function() {
    window.location = "test/home-page.html";
  });
});
