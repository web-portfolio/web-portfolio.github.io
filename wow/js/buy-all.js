document.addEventListener( 'DOMContentLoaded', function( event ) {
  $(window).on("load resize", function(){
    topResize();
    gameInfoResize();
  });

  function topResize(){
    var topImgH = $(".top-image img").height();
    $(".top-image").height(topImgH);
  };

  function gameInfoResize(){
    var pcHeight = $(".purchase-content").height();
    var titleHeight = $(".title-notes").outerHeight();
    var camHeight = $(".cover-art-menu").height();
    $(".game-info-scroll").height(pcHeight-titleHeight);
    $(".cover-art-menu").css({"margin-top":(pcHeight-camHeight)/2});
  };

  $(".cover-art-menu li").click(function() {
    var data_id = $(this).attr("data-tab");
    $(this).parent().addClass("cover-art-current-parent");
    $(this).parent().prev().addClass("cover-art-current-parent");
    $(".cover-art-current-parent .cover-art-tab-link, .cover-art-current-parent .cover-art-tab-content").removeClass("cover-art-current");
    $(this).addClass("cover-art-current");
    $(".cover-art-current-parent " + "#" + data_id).addClass("cover-art-current");
    $(this).parent().removeClass("cover-art-current-parent");
    $(this).parent().prev().removeClass("cover-art-current-parent");
  });
});
