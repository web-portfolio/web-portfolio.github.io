document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    loadElements();
    fixedDivAlternative();
  });

  $(window).on("load resize", function() {
    fixedDivAlternative();
  });

  function loadElements() {
    $(".footer").load("footer.html .container > *", function() {
      $.getScript("js/footer.js");
      $.getScript("js/web-mobile.js");
      $.getScript("js/simplebar.js");
      $(".loader-bg").fadeOut(500);
    });
    $("head .media").before('<link rel="stylesheet" href="css/footer.css">');
    $("head .media").before('<link rel="stylesheet" href="css/simplebar.css">');
  };

  function fixedDivAlternative() {
    var windowW = $(window).width();
    if (windowW > 1920) {
      var x = (windowW - 1920) / 2;
      $(".alternative-signin-content").css({ right: x });
    } else {
      $(".alternative-signin-content").css({ right: 0 });
    }
  }

  $(".alternative-signin").click(function() {
    $(this).css("pointer-events", "none");
    $(".alternative-signin-content").slideToggle(function(){
      $(".alternative-signin").css("pointer-events", "all");
    });
    $(this).toggleClass("alternative-signin-active");
  });

  $(".month").click(function() {
    $(".countries").slideUp();
    $(".questions").slideUp();
    $(this).css("pointer-events", "none");
    $(".months").slideToggle(function(){
      $(".month").css("pointer-events", "all");
    });
    $(".months").outerWidth($(this).outerWidth());
  });
  $(".country").click(function() {
    $(".months").slideUp();
    $(".questions").slideUp();
    $(this).css("pointer-events", "none");
    $(".countries").slideToggle(function(){
      $(".country").css("pointer-events", "all");
    });
    $(".countries").outerWidth($(this).outerWidth());
  });
  $(".question").click(function() {
    $(".months").slideUp();
    $(".countries").slideUp();
    $(this).css("pointer-events", "none");
    $(".questions").slideToggle(function(){
      $(".question").css("pointer-events", "all");
    });
    $(".questions").outerWidth($(this).outerWidth());
  });

  $(".months li").click(function() {
    $(".month").text($(this).text());
    if ($(".month").text() !== "Birth Month") {
      $(".month").css("color", "#996019");
    };
    $(".months").slideUp(300);
  });

  $(".countries li").click(function() {
    $(".country").text($(this).text());
    if ($(".country").text() !== "Country") {
      $(".country").css("color", "#996019");
    };
    $(".countries").slideUp(300);
  });

  $(".questions li").click(function() {
    $(".question").text($(this).text());
    if ($(".question").text() !== "Select Question") {
      $(".question").css("color", "#996019");
    };
    $(".questions").slideUp(300);
  });

  //* VALIDATIONS *
  $(".submit").click(function() {
    fnameCheck();
    lnameCheck();
    monthCheck();
    dayCheck();
    yearCheck();
    countryCheck();
    emailCheck();
    passCheck();
    questionCheck();
    answerCheck();
    policyCheck();
    successCheck();
  });

  var fname, lname, month, day, year, country, email, pass, question, answer, policy;

  function fnameCheck() {
    if ($(".fname").val().length >= 3) {
      $(".fname").removeClass("invalid").addClass("valid");
      fname = true;
      if ((fname && lname) == true) {
        $(".error1").hide();
      }
    } else {
      $(".fname").removeClass("valid").addClass("invalid");
      $(".error1").show();
      fname = false;
    }
  };

  function lnameCheck() {
    if ($(".lname").val().length >= 3) {
      $(".lname").removeClass("invalid").addClass("valid");
      lname = true;
      if ((fname && lname) == true) {
        $(".error1").hide();
      }
    } else {
      $(".lname").removeClass("valid").addClass("invalid");
      $(".error1").show();
      lname = false;
    }
  };

  function monthCheck() {
    if ($(".month").text() !== "Birth Month") {
      $(".month").removeClass("invalid").addClass("valid");
      month = true;
    } else {
      $(".month").removeClass("valid").addClass("invalid");
      month = false;
    }
  };

  function dayCheck() {
    if ($(".day").val() >= 1 && $(".day").val() <= 31) {
      $(".day").removeClass("invalid").addClass("valid");
      day = true;
    } else {
      $(".day").removeClass("valid").addClass("invalid");
      day = false;
    }
  };

  function yearCheck() {
    if ($(".year").val().length == 4 && $.isNumeric($(".year").val())) {
      $(".year").removeClass("invalid").addClass("valid");
      year = true;
    } else {
      $(".year").removeClass("valid").addClass("invalid");
      year = false;
    }
  };

  function countryCheck() {
    if ($(".country").text() !== "Country") {
      $(".country").removeClass("invalid").addClass("valid");
      country = true;
    } else {
      $(".country").removeClass("valid").addClass("invalid");
      country = false;
    }
  };

  function emailCheck() {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      is_email = re.test($(".email").val());
    if (is_email) {
      $(".email").removeClass("invalid").addClass("valid");
      $(".error2").hide();
      email = true;
    } else {
      $(".email").removeClass("valid").addClass("invalid");
      $(".error2").show();
      email = false;
    }
  };

  function passCheck() {
    var p = $(".pass").val(),
      rp = $(".re-pass").val(),
      c;
    if ((p.length == 0) && (rp.length == 0)) {
      c = 1;
    } else {
      if (p !== rp) {
        c = 2;
      } else {
        if (((p.length && p.length) < 6) || ((p.length && p.length) > 12)) {
          c = 3;
        };
      }
    };
    switch (c) {
      case 1:
        $(".error3").show();
        $(".error3").text("Please, insert password!");
        $(".pass").removeClass("valid").addClass("invalid");
        $(".re-pass").removeClass("valid").addClass("invalid");
        pass = false;
        break;
      case 2:
        $(".error3").show();
        $(".error3").text("Passwords are not equal!");
        $(".pass").removeClass("valid").addClass("invalid");
        $(".re-pass").removeClass("valid").addClass("invalid");
        pass = false;
        break;
      case 3:
        $(".error3").show();
        $(".error3").text("Password must be between 6 and 12 sybols!");
        $(".pass").removeClass("valid").addClass("invalid");
        $(".re-pass").removeClass("valid").addClass("invalid");
        pass = false;
        break;
      default:
        $(".error3").hide();
        $(".pass").removeClass("invalid").addClass("valid");
        $(".re-pass").removeClass("invalid").addClass("valid");
        pass = true;
    }
  };

  function questionCheck() {
    if ($(".question").text() !== "Select Question") {
      $(".question").removeClass("invalid").addClass("valid");
      question = true;
    } else {
      $(".question").removeClass("valid").addClass("invalid");
      question = false;
    }
  };

  function answerCheck() {
    if ($(".answer").val().length !== 0) {
      $(".answer").removeClass("invalid").addClass("valid");
      answer = true;
    } else {
      $(".answer").removeClass("valid").addClass("invalid");
      answer = false;
    }
  };

  function policyCheck() {
    if ($(".policy").is(":checked")) {
      $(".pr-policy").removeClass("invalid").addClass("valid");
      $(".label-item > span").removeClass("err-text");
      policy = true;
    } else {
      $(".pr-policy").removeClass("valid").addClass("invalid");
      $(".label-item > span").addClass("err-text");
      policy = false;
    }
  }

  function successCheck() {
    if ((fname && lname && month && day && year && country && email && pass && question && answer && policy) == true) {
      $(".reg-success").show();
      $("body,html").animate({
        scrollTop: 0
      }, 500);
    }
  };

  $(".btn-success").click(function() {
    $(".reg-success").hide();
  });

  // JS LINKS
  $(".home, .nav-logo, .free-acc-logo").click(function() {
    window.location = "home-page.html";
  });
});