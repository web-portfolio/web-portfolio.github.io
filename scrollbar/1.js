document.addEventListener("DOMContentLoaded", function(event) {
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