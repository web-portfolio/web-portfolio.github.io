// hovers();
fixedLoginForm();
navResize();

$(window).on("resize", function() {
  navResize();
  fixedLoginForm();
});

function navResize(){
  var headerWidth = $(".header").width();
  $(".nav-bar").outerWidth(headerWidth);
}

$(".login-btn").click(function() {
  userCheck();
  passCheck();
});

function userCheck() {
  if ($(".login-form-inputs input[type='text']").val() == "") {
    $(".login-user-error").show();
  } else {
    $(".login-user-error").hide();
  }
}

function passCheck() {
  if ($(".login-form-inputs input[type='password']").val() == "") {
    $(".login-pass-error").show();
  } else {
    $(".login-pass-error").hide();
  }
}

$(".lp-continue").click(function(){
  var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    is_email = re.test($(".lp-email").val());
  if (is_email) {
    $(".lp-error").hide();
    $(".login-problems").slideToggle();
    $(".lp-email-send p .lp-mail").text($(".lp-email").val());
    $(".lp-email-send").slideDown();
  } else {
    $(".lp-error").show();
  }
});

$(".lp-email").keypress(function(e) {
    if(e.which == 13) {
      $(".lp-continue").click();
    }
});

function mailCheck() {
  if ($(".login-form-inputs input[type='text']").val() == "") {
    $(".login-user-error").show();
  } else {
    $(".login-user-error").hide();
  }
}

$(".forgotten-pass, .lp-cansel").click(function(){
  $(".login").slideToggle();
  $(".login-problems").slideToggle();
});

$(".lp-email-send-bt").click(function(){
  $(".lp-email").val("");
  $(".lp-email-send").slideUp();
  $(".login").slideDown();
});

$(".games").click(function() {
  $(".buy-games").stop(true,false).slideToggle();
  $(this).toggleClass("games-active");
  $(".login-form").slideUp();
  $(".profile").removeClass("profile-active");
});

$(".profile").click(function() {
  $(".login-form").stop(true,false).slideToggle();
  $(this).toggleClass("profile-active");
  $(".buy-games").slideUp();
  $(".games").removeClass("games-active");
});

$(".alternative-signin").click(function() {
  $(".alternative-signin-content").stop(true,false).slideToggle();
  $(this).toggleClass("alternative-signin-active");
});

function fixedLoginForm(){
  var windowW = $(window).width();
  if (windowW > 1920){
    var x = (windowW - 1920)/2;
    $(".alternative-signin-content, .login-form").css({right:x});
  } else{
    $(".alternative-signin-content, .login-form").css({right:0});
  }
}

function hovers(){
  if (window.matchMedia("(min-width: 768px)").matches){
    $(".nav-logo, .free-acc-logo").hover(function() {
      $(".nav-logo img, .free-acc-logo img").prop("src", "img/nav-logo-hover.png");
    }, function() {
      $(".nav-logo img, .free-acc-logo img").prop("src", "img/nav-logo.png");
    });
    $(".games").hover(function() {
      $(".buy-game-icon").prop("src", "img/ico/buy-hover.png");
    }, function() {
      $(".buy-game-icon").prop("src", "img/ico/buy.png");
    });
    $(".profile").hover(function() {
      $(".profile-icon").prop("src", "img/ico/profile-hover.png");
    }, function() {
      $(".profile-icon").prop("src", "img/ico/profile.png");
    });
    $(".home").hover(function() {
      $(".home-icon").prop("src", "img/ico/home-hover.png");
    }, function() {
      $(".home-icon").prop("src", "img/ico/home.png");
    });
    $(".alternative-signin").hover(function() {
      $(".setup").prop("src", "img/ico/setup-hover.png");
    }, function() {
      $(".setup").prop("src", "img/ico/setup.png");
    });

    $(".back-to-top").hover(function() {
      x = true;
      animate();
    }, function() {
      $(".back-to-top").stop(true, false);
      $(".back-to-top").animate({
        "padding": "0"
      }, 300);
      x = false;
    });
    $(".footer-phone").hover(function() {
      $(this).css("background-image", "url('img/ico/phone-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/phone.png')");
    });
    $(".footer-email").hover(function() {
      $(this).css("background-image", "url('img/ico/mail-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/mail.png')");
    });
    $(".live-chat").hover(function() {
      $(this).css("background-image", "url('img/ico/chat-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/chat.png')");
    });
    $(".cookie").hover(function() {
      $(this).css("background-image", "url('img/ico/cookie-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/cookie.png')");
    });
    $(".privacy").hover(function() {
      $(this).css("background-image", "url('img/ico/privacy-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/privacy.png')");
    });
    $(".f1").hover(function() {
      $(this).css("background-image", "url('img/ico/f1-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/f1.png')");
    });
    $(".f2").hover(function() {
      $(this).css("background-image", "url('img/ico/f2-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/f2.png')");
    });
    $(".f3").hover(function() {
      $(this).css("background-image", "url('img/ico/f3-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/f3.png')");
    });
    $(".f4").hover(function() {
      $(this).css("background-image", "url('img/ico/f4-hover.png')");
    }, function() {
      $(this).css("background-image", "url('img/ico/f4.png')");
    });
    $(".game").hover(function() {
      var hImg = $("img", this).outerHeight();
      var wImg = $("img", this).outerWidth();
      $(".buy-this", this).outerHeight(hImg);
      $(".buy-this", this).outerWidth(wImg);
      $(".buy-this", this).slideDown();
    }, function() {
      $(".buy-this", this).stop(true, false).slideUp();
    });
    // $(".buy-games").mCustomScrollbar("disable");
  } else{
    $("body *").unbind("mouseenter mouseleave");
    $(".game > img").click(function() {
      var hImg = $(this).outerHeight();
      var wImg = $(this).outerWidth();
      $(this).next().outerHeight(hImg);
      $(this).next().outerWidth(wImg);
      $(this).next().slideDown();
    });
    $(".mob-close").click(function(){
      $(this).parent().slideUp();
    });
    // $(".buy-games").mCustomScrollbar("update");
  }
}

// JS LINKS
$(".reg-btn").click(function() {
  window.location = "reg-form.html";
});
$(".home, .nav-logo, .free-acc-logo").click(function() {
  window.location = "home-page.html";
});
$(".f1").click(function() {
  window.location = "https://bg-bg.facebook.com/Warcraft/";
});
$(".f2").click(function() {
  window.location = "https://twitter.com/warcraft?lang=bg";
});
$(".f3").click(function() {
  window.location = "https://www.youtube.com/results?search_query=world+of+warcraft+trailers";
});
$(".f4").click(function() {
  window.location = "https://plus.google.com/s/world%20of%20warcraft/top";
});
$(".purchase-btn-bc").click(function() {
  window.location = "bc.html";
});
$(".purchase-btn-lk").click(function() {
  window.location = "lk.html";
});
$(".purchase-btn-cata").click(function() {
  window.location = "cata.html";
});
$(".purchase-btn-pandaria").click(function() {
  window.location = "pandaria.html";
});
$(".purchase-btn-wod").click(function() {
  window.location = "wod.html";
});
$(".purchase-btn-legion").click(function() {
  window.location = "legion.html";
});
$(".purchase-btn-bfa").click(function() {
  window.location = "bfa.html";
});
