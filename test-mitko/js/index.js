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
      document.addEventListener('touchmove', touchPreven, { passive: false });
    } else {
      $("body").css("overflowY", "auto");
      document.removeEventListener('touchmove', touchPreven);
    }
  };

  function touchPreven(e) {
    e.preventDefault();
  }

  $(".tab-link-container li").click(function() {
    var data_id = $(this).attr("data-tab");
    $(this).parent().addClass("current-parent");
    $(".tab-content-container").addClass("current-parent");
    $(".current-parent .tab-link, .current-parent .tab-content").removeClass("current");
    $(this).addClass("current");
    $(".current-parent " + "#" + data_id).addClass("current");
    $(this).parent().removeClass("current-parent");
    $(".tab-content-container").removeClass("current-parent");
  });
});