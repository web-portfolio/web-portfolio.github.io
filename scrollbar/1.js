document.addEventListener("DOMContentLoaded", function(event) {
  customeSlider($(".parent1"));

  function customeSlider($customSlider) {
    var contentWidth = $customSlider.outerWidth(),
      contentHeight = $customSlider.outerHeight();

    $customSlider.addClass("scrollable");
    $(".scrollable").wrap('<div class="custom-scrollbar"></div>');
    $(".scrollable, .custom-scrollbar").width(contentWidth).height(contentHeight);
    // $(".custom-scrollbar").prepend('<div class="scrollbar-content"><div class="scrollbar"></div></div>');





    var H = $(".scrollable").outerHeight();
    var sH = $(".scrollable")[0].scrollHeight;
    var sbH = H * H / sH;

    $(".scrollbar").height(sbH);

    $(".scrollable").on("scroll", function() {
      $(".scrollbar").css({ top: $(".scrollable").scrollTop() / H * sbH });
    });

    var ym, mDown;
    $(".scrollbar").on("mousedown", function() {
      mDown = true;
    });

    $(window).on("mousemove", function(event) {
      ym = event.clientY;
      if (mDown == true) {
        $(".scrollable").css({ top: $(".scrollable").scrollTop(sH / H * ym) });
      }
    });

    $(window).on("mouseup", function() {
      mDown = false;
    });
  }

  // var H = $(".scrollable").outerHeight();
  // var sH = $(".scrollable")[0].scrollHeight;
  // var sbH = H * H / sH;

  // $(".scrollbar").height(sbH);

  // $(".scrollable").on("scroll", function() {
  //   $(".scrollbar").css({ top: $(".scrollable").scrollTop() / H * sbH });
  // });

  // var ym, mDown;
  // $(".scrollbar").on("mousedown", function() {
  //   mDown = true;
  // });

  // $(window).on("mousemove", function(event) {
  //   ym = event.clientY;
  //   if (mDown == true) {
  //     $(".scrollable").css({ top: $(".scrollable").scrollTop(sH / H * ym) });
  //   }
  // });

  // $(window).on("mouseup", function() {
  //   mDown = false;
  // });

  // var ys, ym, mDown;
  // $(".scrollbar").on("touchstart", function(event) {
  //   ys = event.touches[0].clientY;
  //   mDown = true;
  // });
  // $(".scrollbar").on("touchmove", function(event) {
  //   ym = event.touches[0].clientY;
  //   if (mDown == true) {
  //     $(this).css({ top: $(".scrollable").scrollTop(sH / H * ym) });
  //   }
  // });
  // $(".scrollbar").on("touchend", function() {
  //   mDown = false;
  // });
});