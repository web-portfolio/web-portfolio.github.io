document.addEventListener( 'DOMContentLoaded', function( event ) {
  $(window).on("load resize", function(){
    gridResize();
    getMobileOperatingSystem();
  });

  function gridResize(){
    var w = $(".container > div").width();
    var h = (w*56.2060889929742)/100;
    $(".container > div").height(h);
  }

  function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/windows phone/i.test(userAgent)) {
    $('link[href="index/css/hovers.css"]').prop('disabled', true);
    return "Windows Phone";
  }
  if (/android/i.test(userAgent)) {
    $('link[href="index/css/hovers.css"]').prop('disabled', true);
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    $('link[href="index/css/hovers.css"]').prop('disabled', true);
    return "iOS";
  }
    $('link[href="index/css/hovers.css"]').prop('disabled', false);
  return "Desktop";
}

  // JS LINKS
  $(".wow").click(function() {
  window.location = "wow/home-page.html";
  });
});
