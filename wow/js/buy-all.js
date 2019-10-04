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
      $(".loader-bg").fadeOut(500);
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

  var bc_cover_art_last_id = localStorage.getItem("bc_cover_art_tab_id");
  if (bc_cover_art_last_id) {
    $(".cover-art-menu-bc li").removeClass("cover-art-current");
    $(".cover-art-bc > div").removeClass("cover-art-current");
    $(".cover-art-menu-bc li").eq(Number(bc_cover_art_last_id.match(/\d+/)[0]) - 1).addClass("cover-art-current");
    $("#" + bc_cover_art_last_id).addClass("cover-art-current");
  }
  $(".cover-art-menu-bc li").click(function() {
    var bc_cover_art_tab_id = $(this).attr("data-tab");
    $(".cover-art-menu-bc li").removeClass("cover-art-current");
    $(".cover-art-bc > div").removeClass("cover-art-current");
    $(this).addClass("cover-art-current");
    $("#" + bc_cover_art_tab_id).addClass("cover-art-current");
    localStorage.setItem("bc_cover_art_tab_id", bc_cover_art_tab_id);
  });

  var wolk_cover_art_last_id = localStorage.getItem("wolk_cover_art_tab_id");
  if (wolk_cover_art_last_id) {
    $(".cover-art-menu-wolk li").removeClass("cover-art-current");
    $(".cover-art-wolk > div").removeClass("cover-art-current");
    $(".cover-art-menu-wolk li").eq(Number(wolk_cover_art_last_id.match(/\d+/)[0]) - 1).addClass("cover-art-current");
    $("#" + wolk_cover_art_last_id).addClass("cover-art-current");
  }
  $(".cover-art-menu-wolk li").click(function() {
    var wolk_cover_art_tab_id = $(this).attr("data-tab");
    $(".cover-art-menu-wolk li").removeClass("cover-art-current");
    $(".cover-art-wolk > div").removeClass("cover-art-current");
    $(this).addClass("cover-art-current");
    $("#" + wolk_cover_art_tab_id).addClass("cover-art-current");
    localStorage.setItem("wolk_cover_art_tab_id", wolk_cover_art_tab_id);
  });

  var cata_cover_art_last_id = localStorage.getItem("cata_cover_art_tab_id");
  if (cata_cover_art_last_id) {
    $(".cover-art-menu-cata li").removeClass("cover-art-current");
    $(".cover-art-cata > div").removeClass("cover-art-current");
    $(".cover-art-menu-cata li").eq(Number(cata_cover_art_last_id.match(/\d+/)[0]) - 1).addClass("cover-art-current");
    $("#" + cata_cover_art_last_id).addClass("cover-art-current");
  }
  $(".cover-art-menu-cata li").click(function() {
    var cata_cover_art_tab_id = $(this).attr("data-tab");
    $(".cover-art-menu-cata li").removeClass("cover-art-current");
    $(".cover-art-cata > div").removeClass("cover-art-current");
    $(this).addClass("cover-art-current");
    $("#" + cata_cover_art_tab_id).addClass("cover-art-current");
    localStorage.setItem("cata_cover_art_tab_id", cata_cover_art_tab_id);
  });

  var pandaria_cover_art_last_id = localStorage.getItem("pandaria_cover_art_tab_id");
  if (pandaria_cover_art_last_id) {
    $(".cover-art-menu-pandaria li").removeClass("cover-art-current");
    $(".cover-art-pandaria > div").removeClass("cover-art-current");
    $(".cover-art-menu-pandaria li").eq(Number(pandaria_cover_art_last_id.match(/\d+/)[0]) - 1).addClass("cover-art-current");
    $("#" + pandaria_cover_art_last_id).addClass("cover-art-current");
  }
  $(".cover-art-menu-pandaria li").click(function() {
    var pandaria_cover_art_tab_id = $(this).attr("data-tab");
    $(".cover-art-menu-pandaria li").removeClass("cover-art-current");
    $(".cover-art-pandaria > div").removeClass("cover-art-current");
    $(this).addClass("cover-art-current");
    $("#" + pandaria_cover_art_tab_id).addClass("cover-art-current");
    localStorage.setItem("pandaria_cover_art_tab_id", pandaria_cover_art_tab_id);
  });

  var wod_cover_art_last_id = localStorage.getItem("wod_cover_art_tab_id");
  if (wod_cover_art_last_id) {
    $(".cover-art-menu-wod li").removeClass("cover-art-current");
    $(".cover-art-wod > div").removeClass("cover-art-current");
    $(".cover-art-menu-wod li").eq(Number(wod_cover_art_last_id.match(/\d+/)[0]) - 1).addClass("cover-art-current");
    $("#" + wod_cover_art_last_id).addClass("cover-art-current");
  }
  $(".cover-art-menu-wod li").click(function() {
    var wod_cover_art_tab_id = $(this).attr("data-tab");
    $(".cover-art-menu-wod li").removeClass("cover-art-current");
    $(".cover-art-wod > div").removeClass("cover-art-current");
    $(this).addClass("cover-art-current");
    $("#" + wod_cover_art_tab_id).addClass("cover-art-current");
    localStorage.setItem("wod_cover_art_tab_id", wod_cover_art_tab_id);
  });

  var legion_cover_art_last_id = localStorage.getItem("legion_cover_art_tab_id");
  if (legion_cover_art_last_id) {
    $(".cover-art-menu-legion li").removeClass("cover-art-current");
    $(".cover-art-legion > div").removeClass("cover-art-current");
    $(".cover-art-menu-legion li").eq(Number(legion_cover_art_last_id.match(/\d+/)[0]) - 1).addClass("cover-art-current");
    $("#" + legion_cover_art_last_id).addClass("cover-art-current");
  }
  $(".cover-art-menu-legion li").click(function() {
    var legion_cover_art_tab_id = $(this).attr("data-tab");
    $(".cover-art-menu-legion li").removeClass("cover-art-current");
    $(".cover-art-legion > div").removeClass("cover-art-current");
    $(this).addClass("cover-art-current");
    $("#" + legion_cover_art_tab_id).addClass("cover-art-current");
    localStorage.setItem("legion_cover_art_tab_id", legion_cover_art_tab_id);
  });

  var bfa_cover_art_last_id = localStorage.getItem("bfa_cover_art_tab_id");
  if (bfa_cover_art_last_id) {
    $(".cover-art-menu-bfa li").removeClass("cover-art-current");
    $(".cover-art-bfa > div").removeClass("cover-art-current");
    $(".cover-art-menu-bfa li").eq(Number(bfa_cover_art_last_id.match(/\d+/)[0]) - 1).addClass("cover-art-current");
    $("#" + bfa_cover_art_last_id).addClass("cover-art-current");
  }
  $(".cover-art-menu-bfa li").click(function() {
    var bfa_cover_art_tab_id = $(this).attr("data-tab");
    $(".cover-art-menu-bfa li").removeClass("cover-art-current");
    $(".cover-art-bfa > div").removeClass("cover-art-current");
    $(this).addClass("cover-art-current");
    $("#" + bfa_cover_art_tab_id).addClass("cover-art-current");
    localStorage.setItem("bfa_cover_art_tab_id", bfa_cover_art_tab_id);
  });
});