$(".navigation li").click(function() {
  $(".navigation li").removeClass("nav-active");
  $(this).addClass("nav-active");
});