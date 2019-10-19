getMobileOperatingSystem();

$(window).on("resize", function() {
  getMobileOperatingSystem();
});

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var winPhone = /windows phone/i.test(userAgent);
  var ios = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  var android = /android/i.test(userAgent);

  if (winPhone || ios || android) {
    $('link[href="css/hovers.css"]').prop("disabled", true);
    $("body *").unbind("mouseenter mouseleave");

    return "Phone Device";
  } else {
    $('link[href="css/hovers.css"]').prop("disabled", false);
    $(".navigation li")
      .mouseenter(function() {
        if (!$(this).hasClass("inactive-menu")) {
          $(this).addClass("nav-active-hover");
        }
      })
      .mouseleave(function() {
        $(this).removeClass("nav-active-hover");
      });

    $("#menu li")
      .mouseenter(function() {
        $(this).addClass("current-map-style-hover");
      })
      .mouseleave(function() {
        $(this).removeClass("current-map-style-hover");
      });

    $(".cars > div")
      .mouseenter(function() {
        $(this).find(".cars-hover").show();
      })
      .mouseleave(function() {
        $(this).find(".cars-hover").hide();
      });

    $(".categories-car-names li")
      .mouseenter(function() {
        $(this).addClass("car-names-active-hover");
      })
      .mouseleave(function() {
        $(this).removeClass("car-names-active-hover");
      });

    $(".lamborgini-page-1 .car-item")
      .mouseenter(function() {
        $(".car-img", this).prop("src", "img/products/categories/lamborghini/1/lamborghini2.jpg");
      })
      .mouseleave(function() {
        $(".car-img", this).prop("src", "img/products/categories/lamborghini/1/lamborghini1.jpg");
      });

    $(".lamborgini-page-2 .car-item")
      .mouseenter(function() {
        $(".car-img", this).prop("src", "img/products/categories/lamborghini/2/lamborghini2.jpg");
      })
      .mouseleave(function() {
        $(".car-img", this).prop("src", "img/products/categories/lamborghini/2/lamborghini1.jpg");
      });

    $(".porche-page-1 .car-item")
      .mouseenter(function() {
        $(".car-img", this).prop("src", "img/products/categories/porche/1/porche2.jpg");
      })
      .mouseleave(function() {
        $(".car-img", this).prop("src", "img/products/categories/porche/1/porche1.jpg");
      });

    $(".porche-page-2 .car-item")
      .mouseenter(function() {
        $(".car-img", this).prop("src", "img/products/categories/porche/2/porche2.jpg");
      })
      .mouseleave(function() {
        $(".car-img", this).prop("src", "img/products/categories/porche/2/porche1.jpg");
      });

    $(".back-to-top").mouseenter(function() {
      x = true;
      animate();
    }).mouseleave(function() {
      $(".back-to-top").stop(true, false);
      $(".back-to-top").animate({
        "padding": "0"
      }, 300);
      x = false;
    });

    return "Desktop";
  }
}