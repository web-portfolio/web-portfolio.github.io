document.addEventListener( 'DOMContentLoaded', function( event ) {
  $(window).on("load resize", function() {
    overlayResize();
    policyFlowResize();
    iframeResize();
    hovers();
    fixedDivPosition();
    $(".last-patch-notes").css("height", "auto");
    containerH = $(".last-patch-notes").outerHeight();
    $(".patch-btn-content-current").hide().removeClass("patch-btn-content-current");
    $(".patch-btn-active").removeClass("patch-btn-active");
  });

  $(window).on("load", function() {
    $(".header").load("header.html .container > *");
    $("head").append($("<style type='text/css'>@import url('../css/header/header.css')</style>"));
  });

  // $(".login-btn").click(function() {
  //   userCheck();
  //   passCheck();
  // });
  //
  // function userCheck() {
  //   if ($(".login-form-inputs input[type='text']").val() == "") {
  //     $(".login-user-error").show();
  //   } else {
  //     $(".login-user-error").hide();
  //   }
  // }
  //
  // function passCheck() {
  //   if ($(".login-form-inputs input[type='password']").val() == "") {
  //     $(".login-pass-error").show();
  //   } else {
  //     $(".login-pass-error").hide();
  //   }
  // }
  //
  // $(".lp-continue").click(function(){
  //   var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  //     is_email = re.test($(".lp-email").val());
  //   if (is_email) {
  //     $(".lp-error").hide();
  //     $(".login-problems").slideToggle();
  //     $(".lp-email-send p .lp-mail").text($(".lp-email").val());
  //     $(".lp-email-send").slideDown();
  //   } else {
  //     $(".lp-error").show();
  //   }
  // });
  // $(".lp-email").keypress(function(e) {
  //     if(e.which == 13) {
  //       $(".lp-continue").click();
  //     }
  // });
  //
  // function mailCheck() {
  //   if ($(".login-form-inputs input[type='text']").val() == "") {
  //     $(".login-user-error").show();
  //   } else {
  //     $(".login-user-error").hide();
  //   }
  // }
  //
  // $(".forgotten-pass, .lp-cansel").click(function(){
  //   $(".login").slideToggle();
  //   $(".login-problems").slideToggle();
  // });
  //
  // $(".lp-email-send-bt").click(function(){
  //   $(".lp-email").val("");
  //   $(".lp-email-send").slideUp();
  //   $(".login").slideDown();
  // });
  //
  // $(".wide").click(function() {
  //   $(".last-patch-notes").stop(true,false).slideUp();
  //   $(".last-patch-notes-wide").stop(true,false).slideDown();
  //   $(".grid").removeClass("grid-wide-active");
  //   $(this).addClass("grid-wide-active");
  //   $(this).removeClass("inactive");
  //   $(".grid").addClass("inactive");
  // });
  //
  // $(".grid").click(function() {
  //   $(".last-patch-notes-wide").stop(true,false).slideUp();
  //   $(".last-patch-notes").stop(true,false).slideDown();
  //   $(".wide").removeClass("grid-wide-active");
  //   $(this).addClass("grid-wide-active");
  //   $(this).removeClass("inactive");
  //   $(".wide").addClass("inactive");
  // });
  //
  // $(".tabs li").click(function() {
  //   var data_id = $(this).attr("data-tab");
  //   $(this).parent().addClass("current-parent");
  //   $(this).parent().next().addClass("current-parent");
  //   $(".current-parent .tab-link, .current-parent .tab-content").removeClass("current");
  //   $(this).addClass("current");
  //   $(".current-parent " + "#" + data_id).addClass("current");
  //   $(this).parent().removeClass("current-parent");
  //   $(this).parent().next().removeClass("current-parent");
  // });
  //
  // $(".games").click(function() {
  //   $(".buy-games").stop(true,false).slideToggle();
  //   $(this).toggleClass("games-active");
  //   $(".login-form").slideUp();
  //   $(".profile").removeClass("profile-active");
  // });
  // $(".profile").click(function() {
  //   $(".login-form").stop(true,false).slideToggle();
  //   $(this).toggleClass("profile-active");
  //   $(".buy-games").slideUp();
  //   $(".games").removeClass("games-active");
  // });
  // $(".alternative-signin").click(function() {
  //   $(".alternative-signin-content").stop(true,false).slideToggle();
  //   $(this).toggleClass("alternative-signin-active");
  // });
  //
  // var containerH = $(".last-patch-notes").outerHeight();
  // var element, top, top1, top2, top3;
  // $(".patch-btn1 button, .patch-btn2 button, .patch-btn3 button").click(function() {
  //   if (!$(this).hasClass("patch-btn-active")) {
  //     $(".patch-btn-content-current").slideUp().removeClass("patch-btn-content-current");
  //     $(".patch-btn-active").removeClass("patch-btn-active");
  //   }
  //
  //   $(this).toggleClass("patch-btn-active");
  //   $(this).next().toggleClass("patch-btn-content-current");
  //   element = $(".patch-btn-content-current").outerHeight();
  //   $(this).next().slideToggle();
  //
  //   if ($(this).next().hasClass("patch-btn-content-current")) {
  //     top1 = $(".patch-btn-content-current").position().top;
  //     top2 = $(".patch-btn-content-current").parent().position().top;
  //     top3 = $(".patch-btn-content-current").parent().parent().position().top;
  //     top = (top1 + top2 + top3);
  //   }
  //
  //   if (((element + top) > containerH) && $(".patch-btn-content").hasClass("patch-btn-content-current")) {
  //     $(".last-patch-notes").animate({
  //       height: element + top + 10
  //     });
  //   } else {
  //     $(".last-patch-notes").animate({
  //       height: containerH
  //     });
  //   }
  // });
  //
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() >= 250) {
  //     $(".back-to-top").fadeIn(500)
  //   } else {
  //     $(".back-to-top").fadeOut(500)
  //   }
  // });
  //
  // $(".back-to-top").click(function() {
  //   $("body,html").animate({
  //     scrollTop: 0
  //   }, 500);
  // });
  //
  // var x;
  // function animate() {
  //   if (x == true) {
  //     $(".back-to-top").animate({
  //       "padding": "0px 10px 0px 0px"
  //     }, 300);
  //     $(".back-to-top").animate({
  //       "padding": "0px 0px 0px 10px"
  //     }, 300);
  //     setTimeout(animate, 500);
  //   }
  // }
  //
  // var h1 = $(".footer-nav div:nth-child(1) ul").outerHeight();
  // var h2 = $(".footer-nav div:nth-child(2) ul").outerHeight();
  // var h3 = $(".footer-nav div:nth-child(3) ul").outerHeight();
  // var w1 = $(".footer-nav div:nth-child(1) ul").outerWidth();
  // var w2 = $(".footer-nav div:nth-child(2) ul").outerWidth();
  // var w3 = $(".footer-nav div:nth-child(3) ul").outerWidth();
  // var h = Math.max(h1, h2, h3);
  // var w = Math.max(w1, w2, w3);
  // $(".footer-nav div ul").outerHeight(h);
  // $(".footer-nav div ul").outerWidth(w);
  //
  // var pc;
  // $(".privacy, .policy-link").click(function() {
  //   $(".privacy-content").show();
  //   policyFlowResize();
  //   overlayResize();
  //   $(".overlay").show();
  //   $("body").css({
  //     "overflow-y": "hidden"
  //   })
  // });
  // $(".cookie").click(function() {
  //   $(".cookie-content").show();
  //   overlayResize();
  //   $(".overlay").show();
  //   $("body").css({
  //     "overflow-y": "hidden"
  //   })
  // });
  // $(".policy-close-btn").click(function() {
  //   $(".privacy-content, .cookie-content").hide();
  //   $(".overlay").hide();
  //   $("body").css({
  //     "overflow-y": "auto"
  //   })
  // });
  //
  // function overlayResize() {
  //   var ww = $(window).outerWidth();
  //   var wh = $(window).outerHeight();
  //   $(".overlay").outerWidth(ww).outerHeight(wh);
  // };
  //
  // function policyFlowResize() {
  //   pc = $(".privacy-content").outerHeight();
  //   $(".policy-flow").outerHeight(pc - 178);
  // }
  //
  // function fixedDivPosition(){
  //   var windowW = $(window).width();
  //   if (windowW > 1920){
  //     var x = (windowW - 1920)/2;
  //     $(".alternative-signin-content, .login-form").css({right:x});
  //     $(".back-to-top").css({right:x+10});
  //   } else{
  //     $(".alternative-signin-content, .login-form").css({right:0});
  //     $(".back-to-top").css({right:10});
  //   }
  // }
  //
  // $(".close-trailer-btn").click(function(){
  //   $(this).next().prop("src", "");
  //   $(this).toggle();
  //   $(this).prev().toggle();
  // });
  // $(".game-trailer1 .start-trailer-btn").click(function(){
  //   $(".game-trailer1 iframe").prop("src", "https://www.youtube.com/embed/IBHL_-biMrQ?autoplay=1");
  //   $(this).toggle();
  //   $(this).next().toggle();
  // });
  // $(".game-trailer2 .start-trailer-btn").click(function(){
  //   $(".game-trailer2 iframe").prop("src", "https://www.youtube.com/embed/BCr7y4SLhck?autoplay=1");
  //   $(this).toggle();
  //   $(this).next().toggle();
  // });
  // $(".game-trailer3 .start-trailer-btn").click(function(){
  //   $(".game-trailer3 iframe").prop("src", "https://www.youtube.com/embed/Wq4Y7ztznKc?autoplay=1");
  //   $(this).toggle();
  //   $(this).next().toggle();
  // });
  // $(".game-trailer4 .start-trailer-btn").click(function(){
  //   $(".game-trailer4 iframe").prop("src", "https://www.youtube.com/embed/wvYXoyxLv64?autoplay=1");
  //   $(this).toggle();
  //   $(this).next().toggle();
  // });
  // $(".game-trailer5 .start-trailer-btn").click(function(){
  //   $(".game-trailer5 iframe").prop("src", "https://www.youtube.com/embed/TLzhlsEFcVQ?autoplay=1");
  //   $(this).toggle();
  //   $(this).next().toggle();
  // });
  // $(".game-trailer6 .start-trailer-btn").click(function(){
  //   $(".game-trailer6 iframe").prop("src", "https://www.youtube.com/embed/eYNCCu0y-Is?autoplay=1");
  //   $(this).toggle();
  //   $(this).next().toggle();
  // });
  // $(".game-trailer7 .start-trailer-btn").click(function(){
  //   $(".game-trailer7 iframe").prop("src", "https://www.youtube.com/embed/jSJr3dXZfcg?autoplay=1");
  //   $(this).toggle();
  //   $(this).next().toggle();
  // });
  // function iframeResize(){
  //   var w = $(".trailers > div").width();
  //   var h = (w*56.2060889929742)/100;
  //   $(".trailers > div").height(h);
  // }
  //
  // function hovers(){
  //   if (window.matchMedia("(min-width: 768px)").matches){
  //     $(".nav-logo, .free-acc-logo").hover(function() {
  //       $(".nav-logo img, .free-acc-logo img").prop("src", "img/nav-logo-hover.png");
  //     }, function() {
  //       $(".nav-logo img, .free-acc-logo img").prop("src", "img/nav-logo.png");
  //     });
  //     $(".games").hover(function() {
  //       $(".buy-game-icon").prop("src", "img/ico/buy-hover.png");
  //     }, function() {
  //       $(".buy-game-icon").prop("src", "img/ico/buy.png");
  //     });
  //     $(".profile").hover(function() {
  //       $(".profile-icon").prop("src", "img/ico/profile-hover.png");
  //     }, function() {
  //       $(".profile-icon").prop("src", "img/ico/profile.png");
  //     });
  //     $(".home").hover(function() {
  //       $(".home-icon").prop("src", "img/ico/home-hover.png");
  //     }, function() {
  //       $(".home-icon").prop("src", "img/ico/home.png");
  //     });
  //     $(".alternative-signin").hover(function() {
  //       $(".setup").prop("src", "img/ico/setup-hover.png");
  //     }, function() {
  //       $(".setup").prop("src", "img/ico/setup.png");
  //     });
  //
  //     $(".back-to-top").hover(function() {
  //       x = true;
  //       animate();
  //     }, function() {
  //       $(".back-to-top").stop(true, false);
  //       $(".back-to-top").animate({
  //         "padding": "0"
  //       }, 300);
  //       x = false;
  //     });
  //     $(".footer-phone").hover(function() {
  //       $(this).css("background-image", "url('img/ico/phone-hover.png')");
  //     }, function() {
  //       $(this).css("background-image", "url('img/ico/phone.png')");
  //     });
  //     $(".footer-email").hover(function() {
  //       $(this).css("background-image", "url('img/ico/mail-hover.png')");
  //     }, function() {
  //       $(this).css("background-image", "url('img/ico/mail.png')");
  //     });
  //     $(".live-chat").hover(function() {
  //       $(this).css("background-image", "url('img/ico/chat-hover.png')");
  //     }, function() {
  //       $(this).css("background-image", "url('img/ico/chat.png')");
  //     });
  //     $(".cookie").hover(function() {
  //       $(this).css("background-image", "url('img/ico/cookie-hover.png')");
  //     }, function() {
  //       $(this).css("background-image", "url('img/ico/cookie.png')");
  //     });
  //     $(".privacy").hover(function() {
  //       $(this).css("background-image", "url('img/ico/privacy-hover.png')");
  //     }, function() {
  //       $(this).css("background-image", "url('img/ico/privacy.png')");
  //     });
  //     $(".f1").hover(function() {
  //       $(this).css("background-image", "url('img/ico/f1-hover.png')");
  //     }, function() {
  //       $(this).css("background-image", "url('img/ico/f1.png')");
  //     });
  //     $(".f2").hover(function() {
  //       $(this).css("background-image", "url('img/ico/f2-hover.png')");
  //     }, function() {
  //       $(this).css("background-image", "url('img/ico/f2.png')");
  //     });
  //     $(".f3").hover(function() {
  //       $(this).css("background-image", "url('img/ico/f3-hover.png')");
  //     }, function() {
  //       $(this).css("background-image", "url('img/ico/f3.png')");
  //     });
  //     $(".f4").hover(function() {
  //       $(this).css("background-image", "url('img/ico/f4-hover.png')");
  //     }, function() {
  //       $(this).css("background-image", "url('img/ico/f4.png')");
  //     });
  //     $(".game").hover(function() {
  //       var hImg = $("img", this).outerHeight();
  //       var wImg = $("img", this).outerWidth();
  //       $(".buy-this", this).outerHeight(hImg);
  //       $(".buy-this", this).outerWidth(wImg);
  //       $(".buy-this", this).slideDown();
  //     }, function() {
  //       $(".buy-this", this).stop(true, false).slideUp();
  //     });
  //     $(".buy-games").mCustomScrollbar("disable");
  //   } else{
  //     $("body *").unbind("mouseenter mouseleave");
  //     $(".game > img").click(function() {
  //       var hImg = $(this).outerHeight();
  //       var wImg = $(this).outerWidth();
  //       $(this).next().outerHeight(hImg);
  //       $(this).next().outerWidth(wImg);
  //       $(this).next().slideDown();
  //     });
  //     $(".mob-close").click(function(){
  //       $(this).parent().slideUp();
  //     });
  //     $(".buy-games").mCustomScrollbar("update");
  //   }
  // }
  //
  // // JS LINKS
  // $(".reg-btn").click(function() {
  //   window.location = "reg-form.html";
  // });
  // $(".home, .nav-logo, .free-acc-logo").click(function() {
  //   window.location = "home-page.html";
  // });
  // $(".f1").click(function() {
  //   window.location = "https://bg-bg.facebook.com/Warcraft/";
  // });
  // $(".f2").click(function() {
  //   window.location = "https://twitter.com/warcraft?lang=bg";
  // });
  // $(".f3").click(function() {
  //   window.location = "https://www.youtube.com/results?search_query=world+of+warcraft+trailers";
  // });
  // $(".f4").click(function() {
  //   window.location = "https://plus.google.com/s/world%20of%20warcraft/top";
  // });
  // $(".purchase-btn-bc").click(function() {
  //   window.location = "bc.html";
  // });
  // $(".purchase-btn-lk").click(function() {
  //   window.location = "lk.html";
  // });
  // $(".purchase-btn-cata").click(function() {
  //   window.location = "cata.html";
  // });
  // $(".purchase-btn-pandaria").click(function() {
  //   window.location = "pandaria.html";
  // });
  // $(".purchase-btn-wod").click(function() {
  //   window.location = "wod.html";
  // });
  // $(".purchase-btn-legion").click(function() {
  //   window.location = "legion.html";
  // });
  // $(".purchase-btn-bfa").click(function() {
  //   window.location = "bfa.html";
  // });
});
