document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("resize", function() {
    mobOverfllow();
  });

  $(".hamburger").click(function() {
    $(this).toggleClass("hamburger-active");
    $(this).css("pointer-events", "none");
    $(".nav-content").slideToggle(function() {
      $(".hamburger").css("pointer-events", "all");
    });
    mobOverfllow();
  });

  function mobOverfllow() {
    if ($(".hamburger").hasClass("hamburger-active") && $(".hamburger").height() > 0) {
      $("body").css("overflowY", "hidden");
      document.addEventListener("touchmove", touchPreven, { passive: false });
    } else {
      $("body").css("overflowY", "auto");
      document.removeEventListener("touchmove", touchPreven);
    }
  };

  function touchPreven(e) {
    e.preventDefault();
  }

  // $(".tab-link-container li").click(function() {
  //   var data_id = $(this).attr("data-tab");
  //   $(this).parent().addClass("current-parent");
  //   $(".tab-content-container").addClass("current-parent");
  //   $(".current-parent .tab-link, .current-parent .tab-content").removeClass("current");
  //   $(this).addClass("current");
  //   $(".current-parent " + "#" + data_id).addClass("current");
  //   $(this).parent().removeClass("current-parent");
  //   $(".tab-content-container").removeClass("current-parent");
  // });

  var last_id = localStorage.getItem("tab_id");
  if (last_id) {
    $(".tab-link-container li").removeClass("current");
    $(".tab-content-container div").removeClass("current");
    $(".tab-link-container li").eq(Number(last_id.match(/\d+/)[0]) - 1).addClass("current");
    $("#" + last_id).addClass("current");
  }
  $(".tab-link-container li").click(function() {
    var tab_id = $(this).attr("data-tab");
    $(".tab-link-container li").removeClass("current");
    $(".tab-content").removeClass("current");
    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
    localStorage.setItem("tab_id", tab_id);
  });
});