document.addEventListener("DOMContentLoaded", function(event) {
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