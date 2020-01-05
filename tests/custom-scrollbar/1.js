document.addEventListener("DOMContentLoaded", function(event) {
  customScrollBar($(".parent1"));
  // customScrollBar($(".parent2"));

  function customScrollBar($customScrollBar) {
    $(window).on("resize", function() {
      variables();
    });

    var contentWidth, contentHeight;

    function variables() {
      // contentWidth = $customScrollBar.outerWidth();
      contentHeight = $customScrollBar.outerHeight();
    }
    variables();

    $customScrollBar.addClass("custom-scrollbar");
    $customScrollBar.contents().wrap('<div class="scrollable"></div>');
    $customScrollBar.prepend('<div class="scrollbar-content"><div class="scrollbar"></div></div>');

    var srollableHeight = $customScrollBar[0].scrollHeight,
      scrollBarHeight = contentHeight * contentHeight / srollableHeight,
      $scrollBar = $customScrollBar.find($(".scrollbar")),
      $scrollable = $customScrollBar.find($(".scrollable"));

    $scrollBar.height(scrollBarHeight);
    $scrollable.height(contentHeight);

    $scrollable.on("scroll", function() {
      $scrollBar.css({ top: $scrollable.scrollTop() / contentHeight * scrollBarHeight });
    });

    var yMove, mDown = false;
    $scrollBar.on("mousedown", function() {
      mDown = true;
    });

    $(window).on("mousemove", function(event) {
      yMove = event.clientY;
      if (mDown == true) {
        $scrollable.css({ top: $scrollable.scrollTop(srollableHeight / contentHeight * yMove) });
      }
    });

    $(window).on("mouseup", function() {
      mDown = false;
    });
  }
});