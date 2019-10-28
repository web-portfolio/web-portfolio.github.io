document.addEventListener("DOMContentLoaded", function(event) {
  // $(window).on("load", function() {
  //   $("#nav-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
  //     highlightSelector: "#nav-menu a"
  //   });

  //   $("a[rel='next']").click(function(e) {
  //     e.preventDefault();
  //     var to = $(this).parent().parent("section").next().attr("id");
  //     $.mPageScroll2id("scrollTo", to);
  //   });
  // });

  $("#nav-menu ul li").click(function() {
    var tab_id = $(this).attr("data-tab");
    $("#nav-menu ul li").removeClass("current");
    $(".tab-content").removeClass("current-scroll");
    $(this).addClass("current");
    $("#" + tab_id).addClass("current-scroll");
    $("html, body").stop(true, false).animate({
      scrollTop: $(".current-scroll").offset().top
    }, 500);
  });

  $(window).scroll(function() {
    var elementTop = $(".tab-content").offset().top;
    console.log(elementTop);
    // if ($(this).scrollTop() >= 250) {

    // } else {

    // }
    // var elementTop = $(this).offset().top;
    // alert(elementTop);
  });
});