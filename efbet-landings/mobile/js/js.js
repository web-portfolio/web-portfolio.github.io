document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load resize", function(){
    resize();
    getMobileOperatingSystem();
  });

  $(window).on("load", function() {
    $(".loader-bg").fadeOut(1000);
  });
  
  function resize(){
    var productCircle = $(".product-circle").width();
    var pintCircle = $(".point-circle").width();
    var ww = $(window).width();
    var wh = $(window).height();
    var bonusArticle = $(".bonus-article-border").width();

    $(".product-circle").height(productCircle);
    $(".point-circle").height(pintCircle);
    $(".bonus-article-border").height(bonusArticle*1.26666666);
    $(".footer").height(ww*0.6362451);
    $(".points").height(ww*1.22425032594524);
    $(".information-msg").height(wh);

    if(ww>wh){
      $(".top-content-wide").height(ww*0.640625)
      $(".top-content").hide();
      $(".top-content-wide").show();
    } else{
      $(".top-content").show();
      $(".top-content-wide").hide();
    }
  }

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
      $(".container").hide();
      $(".information-msg").show();
      return "Windows Phone";
    }
    if (/android/i.test(userAgent)) {
      $(".container").show();
      $(".information-msg").hide();
      resize();
      return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      $(".container").show();
      $(".information-msg").hide();
      resize();
      return "iOS";
    }
    $(".container").hide();
    $(".information-msg").show();
    return "Desktop";
  }

  // JS Lings
  $(".social1").click(function() {
    window.location = "https://www.youtube.com/channel/UC6FAxZ2jX1L1iciRfsJf-bA";
  });
  $(".social2").click(function() {
    window.location = "https://www.facebook.com/efbet/";
  });
  $(".social3").click(function() {
    window.location = "https://twitter.com/efbetgaming?lang=en";
  });
  $(".social4").click(function() {
    window.location = "https://www.instagram.com/efbet/?hl=en";
  });
  $(".android-download").click(function() {
    window.location = "https://cdn1.efbet.com/efbet/MobileApps/app-efbet-release.apk";
  });
  $(".ios-download").click(function() {
    window.location = "https://itunes.apple.com/bg/app/efbet-sports-betting-and-live-scores/id993658326?mt=8";
  });
  $(".bg-lang").click(function() {
    window.location = "BG.html";
  });
  $(".en-lang").click(function() {
    window.location = "EN.html";
  });
});
