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

    $(".cars > div")
      .mouseenter(function() {
        $(this).find(".cars-hover").show();
      })
      .mouseleave(function() {
        $(this).find(".cars-hover").hide();
      });

    $(".categories-car-names li")
    .mouseenter(function() {
      $(this).addClass("car-names-active-hover");
    })
    .mouseleave(function() {
      $(this).removeClass("car-names-active-hover");
    });
    $(".categories-car-names li")
    return "Desktop";
  }
}