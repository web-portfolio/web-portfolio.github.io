document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function() {
    $(".games_count").text(game_id.length);
    $(".loader-bg").fadeOut(500);
  });

  var xml = "";
  var xmlAmp = "";
  var game_id = $(".to_be_converted GamesContainer Game");
  for (var i = 1; i <= game_id.length; i++) {
    var text_id = $(".to_be_converted GamesContainer Game:nth-child(" + i + ") GameID").text();
    $(".to_be_converted GamesContainer Game:nth-child(" + i + ")").addClass(text_id);
  }

  $(".split_game_names").click(function() {
    var game_name_string = $(".game_names").val();
    var game_name_array = game_name_string.split("\n");
    var no_space_array = game_name_array.filter(function(el) {
      return el != null && el != "";
    });

    for (var i = 0; i < no_space_array.length; i++) {
      $("." + no_space_array[i]).appendTo(".ready GamesContainer");
    }
    $(".games_count_ready").text($(".ready .games GamesContainer Game").length);
    $(".games_count").text(game_id.length - $(".ready .games GamesContainer Game").length);
    toXML();
  })

  function toXML() {
    xml += "<GamesContainer>";
    $(".ready .games GamesContainer Game").each(function(i, Game) {
      xml += "\n" + "<Game>";
      Game = $(Game);
      Game.find("Provider").each(function(i, Provider) {
        xml += "\n" + "<Provider>";
        xml += $.trim($(Provider).text());
        xml += "</Provider>";
      });
      Game.find("GameID").each(function(i, GameID) {
        xml += "\n" + "<GameID>";
        xml += $.trim($(GameID).text());
        xml += "</GameID>";
      });
      Game.find("Name").each(function(i, Name) {
        xml += "\n" + "<Name>";
        xml += $.trim($(Name).text());
        xml += "</Name>";
      });
      Game.find("HoverText").each(function(i, HoverText) {
        xml += "\n" + "<HoverText>";
        xml += $.trim($(HoverText).text());
        xml += "</HoverText>";
      });
      xml += "\n" + "</Game>";
    });
    xml += "\n" + "</GamesContainer>";
    xmlAmp = xml.replace(/\&/g, "&amp;");
  }

  $(".export").click(function() {
    $(".ready GamesContainer Game").removeAttr("class");
    download("game_order_com.html", xmlAmp);
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