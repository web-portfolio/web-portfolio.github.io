document.addEventListener("DOMContentLoaded", function(event) {
  $(".container input")
    .mouseenter(function() {
      var x = $(this).find("input").offsetTop() - $(this).find("imput").height();
      $(".popup").show();
      $(".popup").css("top", x)
    })
    .mouseleave(function() {
      $(".car-img", this).prop("src", "img/products/categories/porche/1/porche1.jpg");
    });
});