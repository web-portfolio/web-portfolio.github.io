document.addEventListener( 'DOMContentLoaded', function( event ) {
  $(window).on("load resize", function() {
    getMobileOperatingSystem();
    alert("test");
  });
  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var winPhone = /windows phone/i.test(userAgent);
    var ios = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    var android = /android/i.test(userAgent);

    if (winPhone || ios || android) {
      $('link[href="css/hovers.css"]').prop('disabled', true);
      $("body *").css("cursor", "default");
      $("body *").unbind("mouseenter mouseleave");
      $(".mob-close").show();
      $(".game > img").click(function() {
        var hImg = $(this).outerHeight();
        var wImg = $(this).outerWidth();
        $(this).next().outerHeight(hImg);
        $(this).next().outerWidth(wImg);
        $(this).next().slideDown();
      });
      $(".mob-close").click(function(){
        $(this).parent().slideUp();
      });
      return "Phone Device";
    } else {
      $('link[href="css/hovers.css"]').prop('disabled', false);
      $(".mob-close").hide();
      $(".nav-logo").hover(function() {
        $(".nav-logo img").prop("src", "img/nav-logo-hover.png");
      }, function() {
        $(".nav-logo img").prop("src", "img/nav-logo.png");
      });

      $(".games").hover(function() {
        $(".buy-game-icon").prop("src", "img/ico/buy-hover.png");
      }, function() {
        $(".buy-game-icon").prop("src", "img/ico/buy.png");
      });

      $(".profile").hover(function() {
        $(".profile-icon").prop("src", "img/ico/profile-hover.png");
      }, function() {
        $(".profile-icon").prop("src", "img/ico/profile.png");
      });

      $(".game").hover(function() {
        var hImg = $("img", this).outerHeight();
        var wImg = $("img", this).outerWidth();
        $(".buy-this", this).outerHeight(hImg);
        $(".buy-this", this).outerWidth(wImg);
        $(".buy-this", this).slideDown();
      }, function() {
        $(".buy-this", this).stop(true, false).slideUp();
      });
      return "Desktop";
    }
  }
});
