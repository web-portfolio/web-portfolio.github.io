document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    $("#nav-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
      highlightSelector: "#nav-menu a"
    });

    $("a[rel='next']").click(function(e) {
      e.preventDefault();
      var to = $(this).parent().parent("section").next().attr("id");
      $.mPageScroll2id("scrollTo", to);
    });
  });
});