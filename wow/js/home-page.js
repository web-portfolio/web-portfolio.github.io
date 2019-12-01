document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    loadElements();
  });

  $(window).on("load resize", function() {
    iframeResize();
    $(".last-patch-notes").css("height", "auto");
    containerH = $(".last-patch-notes").outerHeight();
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

  var grid_last_id = localStorage.getItem("grid_tab_id");
  if (grid_last_id) {
    $(".grid-tabs > div").addClass("inactive");
    $(".grid-tabs > div").removeClass("grid-wide-active");
    $(".grid-content > div").removeClass("patch-active");
    $(".grid-tabs > div").eq(Number(grid_last_id.match(/\d+/)[0]) - 1).addClass("grid-wide-active").removeClass("inactive");
    $("#" + grid_last_id).addClass("patch-active");
  }
  $(".grid-tabs > div").click(function() {
    var grid_tab_id = $(this).attr("data-tab");
    $(".grid-tabs > div").addClass("inactive");
    $(".grid-tabs > div").removeClass("grid-wide-active");
    $(".grid-content > div").removeClass("patch-active");
    $(this).addClass("grid-wide-active").removeClass("inactive");
    $("#" + grid_tab_id).addClass("patch-active");
    localStorage.setItem("grid_tab_id", grid_tab_id);
  });

  var bc_last_id = localStorage.getItem("bc_tab_id");
  if (bc_last_id) {
    $(".tabs-bc li").removeClass("current");
    $(".tab-container-bc > div").removeClass("current");
    $(".tabs-bc li").eq(Number(bc_last_id.match(/\d+/)[0]) - 1).addClass("current");
    $("#" + bc_last_id).addClass("current");
  }
  $(".tabs-bc li").click(function() {
    var bc_tab_id = $(this).attr("data-tab");
    $(".tabs-bc li").removeClass("current");
    $(".tab-container-bc > div").removeClass("current");
    $(this).addClass("current");
    $("#" + bc_tab_id).addClass("current");
    localStorage.setItem("bc_tab_id", bc_tab_id);
  });

  var wolk_last_id = localStorage.getItem("wolk_tab_id");
  if (wolk_last_id) {
    $(".tabs-wolk li").removeClass("current");
    $(".tab-container-wolk > div").removeClass("current");
    $(".tabs-wolk li").eq(Number(wolk_last_id.match(/\d+/)[0]) - 1).addClass("current");
    $("#" + wolk_last_id).addClass("current");
  }
  $(".tabs-wolk li").click(function() {
    var wolk_tab_id = $(this).attr("data-tab");
    $(".tabs-wolk li").removeClass("current");
    $(".tab-container-wolk > div").removeClass("current");
    $(this).addClass("current");
    $("#" + wolk_tab_id).addClass("current");
    localStorage.setItem("wolk_tab_id", wolk_tab_id);
  });

  var cata_last_id = localStorage.getItem("cata_tab_id");
  if (cata_last_id) {
    $(".tabs-cata li").removeClass("current");
    $(".tab-container-cata > div").removeClass("current");
    $(".tabs-cata li").eq(Number(cata_last_id.match(/\d+/)[0]) - 1).addClass("current");
    $("#" + cata_last_id).addClass("current");
  }
  $(".tabs-cata li").click(function() {
    var cata_tab_id = $(this).attr("data-tab");
    $(".tabs-cata li").removeClass("current");
    $(".tab-container-cata > div").removeClass("current");
    $(this).addClass("current");
    $("#" + cata_tab_id).addClass("current");
    localStorage.setItem("cata_tab_id", cata_tab_id);
  });

  var pandaria_last_id = localStorage.getItem("pandaria_tab_id");
  if (pandaria_last_id) {
    $(".tabs-pandaria li").removeClass("current");
    $(".tab-container-pandaria > div").removeClass("current");
    $(".tabs-pandaria li").eq(Number(pandaria_last_id.match(/\d+/)[0]) - 1).addClass("current");
    $("#" + pandaria_last_id).addClass("current");
  }
  $(".tabs-pandaria li").click(function() {
    var pandaria_tab_id = $(this).attr("data-tab");
    $(".tabs-pandaria li").removeClass("current");
    $(".tab-container-pandaria > div").removeClass("current");
    $(this).addClass("current");
    $("#" + pandaria_tab_id).addClass("current");
    localStorage.setItem("pandaria_tab_id", pandaria_tab_id);
  });

  var wod_last_id = localStorage.getItem("wod_tab_id");
  if (wod_last_id) {
    $(".tabs-wod li").removeClass("current");
    $(".tab-container-wod > div").removeClass("current");
    $(".tabs-wod li").eq(Number(wod_last_id.match(/\d+/)[0]) - 1).addClass("current");
    $("#" + wod_last_id).addClass("current");
  }
  $(".tabs-wod li").click(function() {
    var wod_tab_id = $(this).attr("data-tab");
    $(".tabs-wod li").removeClass("current");
    $(".tab-container-wod > div").removeClass("current");
    $(this).addClass("current");
    $("#" + wod_tab_id).addClass("current");
    localStorage.setItem("wod_tab_id", wod_tab_id);
  });

  var legion_last_id = localStorage.getItem("legion_tab_id");
  if (legion_last_id) {
    $(".tabs-legion li").removeClass("current");
    $(".tab-container-legion > div").removeClass("current");
    $(".tabs-legion li").eq(Number(legion_last_id.match(/\d+/)[0]) - 1).addClass("current");
    $("#" + legion_last_id).addClass("current");
  }
  $(".tabs-legion li").click(function() {
    var legion_tab_id = $(this).attr("data-tab");
    $(".tabs-legion li").removeClass("current");
    $(".tab-container-legion > div").removeClass("current");
    $(this).addClass("current");
    $("#" + legion_tab_id).addClass("current");
    localStorage.setItem("legion_tab_id", legion_tab_id);
  });

  var containerH = $(".last-patch-notes").outerHeight();
  var element, top, top1, top2, top3;
  $(".patch-btn1 button, .patch-btn2 button, .patch-btn3 button").click(function() {
    if (!$(this).hasClass("patch-btn-active")) {
      $(".patch-btn-content-current").slideUp().removeClass("patch-btn-content-current");
      $(".patch-btn-active").removeClass("patch-btn-active");
    }
    $(this).toggleClass("patch-btn-active");
    $(this).next().toggleClass("patch-btn-content-current");
    element = $(".patch-btn-content-current").outerHeight();
    $(".last-patch-notes button").attr("disabled", true);
    $(this).next().slideToggle(function() {
      $(".last-patch-notes button").attr("disabled", false)
    });
    if ($(this).next().hasClass("patch-btn-content-current")) {
      top1 = $(".patch-btn-content-current").position().top;
      top2 = $(".patch-btn-content-current").parent().position().top;
      top3 = $(".patch-btn-content-current").parent().parent().position().top;
      top = (top1 + top2 + top3);
    }
    if (((element + top) > containerH) && $(".patch-btn-content").hasClass("patch-btn-content-current")) {
      $(".last-patch-notes").animate({
        height: element + top + 10
      });
    } else {
      $(".last-patch-notes").animate({
        height: containerH
      });
    }
  });

  function appendText(takeTaxt, insertText) {
    var array = [];
    for (var i = 0; i < takeTaxt.length; i++) {
      array.push(takeTaxt[i]);
    }
    for (var i = 0; i < insertText.length; i++) {
      $(insertText[i]).text($(array[i]).text());
    }
  }
  appendText($(".bc-btn"), $(".bc-btn-append"));
  appendText($(".wotlk-btn"), $(".wotlk-btn-append"));
  appendText($(".cata-btn"), $(".cata-btn-append"));
  appendText($(".pandaria-btn"), $(".pandaria-btn-append"));
  appendText($(".wod-btn"), $(".wod-btn-append"));
  appendText($(".legion-btn"), $(".legion-btn-append"));
  appendText($(".bfa-btn"), $(".bfa-btn-append"));

  function appendContent(takeContent, insertContent) {
    var array = [];
    for (var i = 0; i < takeContent.length; i++) {
      array.push(takeContent[i]);
    }
    for (var i = 0; i < insertContent.length; i++) {
      $(array[i]).contents().clone().appendTo($(insertContent[i]));
    }
  }
  appendContent($(".bc-text"), $(".bc-text-append"));
  appendContent($(".wotlk-text"), $(".wotlk-text-append"));
  appendContent($(".cata-text"), $(".cata-text-append"));
  appendContent($(".pandaria-text"), $(".pandaria-text-append"));
  appendContent($(".wod-text"), $(".wod-text-append"));
  appendContent($(".legion-text"), $(".legion-text-append"));
  appendContent($(".bfa-text"), $(".bfa-text-append"));

  $(".close-trailer-btn").click(function() {
    $(this).next().prop("src", "");
    $(this).toggle();
    $(this).prev().toggle();
  });
  $(".game-trailer1 .start-trailer-btn").click(function() {
    $(".game-trailer1 iframe").prop("src", "https://www.youtube.com/embed/IBHL_-biMrQ?autoplay=1");
    $(this).toggle();
    $(this).next().toggle();
  });
  $(".game-trailer2 .start-trailer-btn").click(function() {
    $(".game-trailer2 iframe").prop("src", "https://www.youtube.com/embed/BCr7y4SLhck?autoplay=1");
    $(this).toggle();
    $(this).next().toggle();
  });
  $(".game-trailer3 .start-trailer-btn").click(function() {
    $(".game-trailer3 iframe").prop("src", "https://www.youtube.com/embed/Wq4Y7ztznKc?autoplay=1");
    $(this).toggle();
    $(this).next().toggle();
  });
  $(".game-trailer4 .start-trailer-btn").click(function() {
    $(".game-trailer4 iframe").prop("src", "https://www.youtube.com/embed/wvYXoyxLv64?autoplay=1");
    $(this).toggle();
    $(this).next().toggle();
  });
  $(".game-trailer5 .start-trailer-btn").click(function() {
    $(".game-trailer5 iframe").prop("src", "https://www.youtube.com/embed/TLzhlsEFcVQ?autoplay=1");
    $(this).toggle();
    $(this).next().toggle();
  });
  $(".game-trailer6 .start-trailer-btn").click(function() {
    $(".game-trailer6 iframe").prop("src", "https://www.youtube.com/embed/eYNCCu0y-Is?autoplay=1");
    $(this).toggle();
    $(this).next().toggle();
  });
  $(".game-trailer7 .start-trailer-btn").click(function() {
    $(".game-trailer7 iframe").prop("src", "https://www.youtube.com/embed/jSJr3dXZfcg?autoplay=1");
    $(this).toggle();
    $(this).next().toggle();
  });

  function iframeResize() {
    var w = $(".trailers > div").width();
    var h = (w * 56.2060889929742) / 100;
    $(".trailers > div").height(h);
  }
});