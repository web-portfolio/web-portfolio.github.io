document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    $(".games_count").text(game_id.length);
  });

  var game_id = $(".to_be_converted GamesContainer Game");
  for (var i = 1; i <= game_id.length; i++) {
    var text_id = $(".to_be_converted GamesContainer Game:nth-child(" + i + ") GameID").text();
    $(".to_be_converted GamesContainer Game:nth-child(" + i + ")").addClass(text_id)
  }

  $(".split_game_names").click(function() {
    var game_array = $(".game_names").val().split("\n");

    for (var i = 0; i <= game_array.length; i++) {
      $("." + game_array[i]).appendTo(".ready GamesContainer");
    }
    $(".games_count").text(game_id.length - game_array.length);
    $(".games_count_ready").text(game_array.length);
  })

  $(".export").click(function() {
    $(".ready GamesContainer Game").removeAttr("class");
    download("game_order_com.html", $(".ready .games").html());
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