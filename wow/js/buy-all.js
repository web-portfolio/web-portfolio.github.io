document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    loadElements();
  });

  $(window).on("load resize", function() {
    topResize();
    gameInfoResize();
  });

  function loadElements() {
    $(".header").load("header.html .container > *", function() {
      $.getScript("js/header.js");
    });
    $("head .media").before('<link rel="stylesheet" href="css/header.css">');

    $(".footer").load("footer.html .container > *", function() {
      $.getScript("js/footer.js");
      $.getScript("js/web-mobile.js");
      $.getScript("js/simplebar.js");
      $(".loader-bg").fadeOut(1000);
    });
    $("head .media").before('<link rel="stylesheet" href="css/footer.css">');
    $("head .media").before('<link rel="stylesheet" href="css/simplebar.css">');
  };

  function topResize() {
    var topImgH = $(".top-image img").height();
    $(".top-image").height(topImgH);
  };

  function gameInfoResize() {
    var pcHeight = $(".purchase-content").height();
    var titleHeight = $(".title-notes").outerHeight();
    var camHeight = $(".cover-art-menu").height();
    $(".game-info-scroll").height(pcHeight - titleHeight);
    $(".cover-art-menu").css({ "margin-top": (pcHeight - camHeight) / 2 });
  };

  $(".cover-art-menu li").click(function() {
    var data_id = $(this).attr("data-tab");
    $(this).parent().addClass("cover-art-current-parent");
    $(this).parent().prev().addClass("cover-art-current-parent");
    $(".cover-art-current-parent .cover-art-tab-link, .cover-art-current-parent .cover-art-tab-content").removeClass("cover-art-current");
    $(this).addClass("cover-art-current");
    $(".cover-art-current-parent " + "#" + data_id).addClass("cover-art-current");
    $(this).parent().removeClass("cover-art-current-parent");
    $(this).parent().prev().removeClass("cover-art-current-parent");
  });
});