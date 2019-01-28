getMobileOperatingSystem();
fixedLoginForm();
navResize();

$(window).on("resize", function() {
  getMobileOperatingSystem();
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

var user, pass;
function userCheck() {
  if ($(".login-form-inputs input[type='text']").val() == "") {
    $(".login-user-error").show();
    user = false;
  } else {
    $(".login-user-error").hide();
    user = true;
  }
}
function passCheck() {
  if ($(".login-form-inputs input[type='password']").val() == "") {
    $(".login-pass-error").show();
    pass = false;
  } else {
    $(".login-pass-error").hide();
    pass = true;
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

$(".login-after-pass").keypress(function(e) {
    if(e.which == 13 && user == true && pass == true) {
      $(".login-btn").click();
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

function fixedLoginForm(){
  var windowW = $(window).width();
  if (windowW > 1920){
    var x = (windowW - 1920)/2;
    $(".login-form").css({right:x});
  } else{
    $(".login-form").css({right:0});
  }
}

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var winPhone = /windows phone/i.test(userAgent);
  var ios = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  var android = /android/i.test(userAgent);

  if (winPhone || ios || android) {
    $("body *").unbind("mouseenter mouseleave");
    $(".mob-close").show();
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
    return "Phone Device";
  } else {
    $("body *").bind("mouseenter mouseleave");
    $(".mob-close").hide();
    $(".nav-logo").hover(function() {
      $(".nav-logo img").prop("src", "img/nav-logo-hover.png");
    }, function() {
      $(".nav-logo img").prop("src", "img/nav-logo.png");
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

    $(".game").hover(function() {
      var hImg = $("img", this).outerHeight();
      var wImg = $("img", this).outerWidth();
      $(".buy-this", this).outerHeight(hImg);
      $(".buy-this", this).outerWidth(wImg);
      $(".buy-this", this).slideDown();
    }, function() {
      $(".buy-this", this).stop(true, false).slideUp();
    });
    return "Desktop";
  }
}

// JS LINKS
$(".reg-btn").click(function() {
  window.location = "reg-form.html";
});
$(".home, .nav-logo").click(function() {
  window.location = "home-page.html";
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
