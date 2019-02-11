define(["jquery", "flexslider", "home-page", "web-mobile", "header", "footer", "scrollbar"], function($) {
    $(function() {
      $(".flexslider").flexslider({
        animation: "slide",
        start: function(slider) {
          $("body").removeClass("loading");
        }
      });
      $.fn.header();
      $.fn.footer();
      $.fn.webMob();
    });
});
