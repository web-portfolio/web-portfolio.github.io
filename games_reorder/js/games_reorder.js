document.addEventListener("DOMContentLoaded", function(event) {
  $(".split_game_names").click(function() {
    var game_array = $(".game_names").val().split(";");

    for (var i = 0; i <= game_array.length; i++) {
      $("#" + game_array[i]).appendTo(".ready .game_container");
    }
  })

  $(".btn_tenst").click(function() {
    download("game_order.html", $(".ready").html());
  });

  function download(filename, text) {
    var pom = document.createElement("a");
    pom.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    pom.setAttribute("download", filename);

    if (document.createEvent) {
      var event = document.createEvent("MouseEvents");
      event.initEvent("click", true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  }
});