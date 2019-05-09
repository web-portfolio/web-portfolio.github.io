getMobileOperatingSystem();

$(window).on("resize", function() {
  getMobileOperatingSystem();
});

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
    $(".navigation li")
      .mouseenter(function() {
        $(this).addClass("nav-active-hover");
      })
      .mouseleave(function() {
        $(this).removeClass("nav-active-hover");
      });
    return "Desktop";
  }
}