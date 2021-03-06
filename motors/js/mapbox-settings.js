document.addEventListener("DOMContentLoaded", function(event) {
  mapboxgl.accessToken = "pk.eyJ1IjoibmFza285MCIsImEiOiJjazFrdjhucDQwMDc3M2JsanhocjE5em9sIn0.LOBSHBPTHrQnuWOd7NbKMg";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/outdoors-v11",
    center: [23.32496166229248, 42.67864951904835],
    zoom: 13
  });
  // map vision
  map.setStyle("mapbox://styles/mapbox/dark-v10")
  var layerList = document.getElementById("menu");
  var inputs = layerList.getElementsByTagName("li");

  function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle("mapbox://styles/mapbox/" + layerId);
  }
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
  }
  $("#menu li").click(function() {
    $("#menu li").removeClass("current-map-style");
    $(this).addClass("current-map-style");
    var liId = $(this).attr("id");
    switch (liId) {
      case "streets-v11":
        $("#menu").css("background-color", "#e7e5e0")
        $("#menu li").css("color", "#000000")
        break;
      case "light-v10":
        $("#menu").css("background-color", "#f6f6f4")
        $("#menu li").css("color", "#8e8e8d")
        break;
      case "dark-v10":
        $("#menu").css("background-color", "#323432")
        $("#menu li").css("color", "#8e8e8d")
        break;
      case "satellite-v9":
        $("#menu").css("background-color", "#3d4356")
        $("#menu li").css("color", "#ffffff")
    }
  });

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());

  //Add full screen option
  map.addControl(new mapboxgl.FullscreenControl());

  // custom icons
  var geojson = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
          "title": "<p class='marker-title'>Title text 1</p>",
          "description": "<p class='marker-description'>Some description text 1</p>",
          "tel": "<p class='marker-tel'> tel: <a href='tel:+359111111111'>+359 111 111 111</a></p>",
          "iconSize": [20, 30]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.327794075012207, 42.68271933003726]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "<p class='marker-title'>Title text 2</p>",
          "description": "<p class='marker-description'>Some description text 2</p>",
          "tel": "<p class='marker-tel'> tel: <a href='tel:+359222222222'>+359 222 222 222</a></p>",
          "iconSize": [20, 30]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.33569049835205, 42.67268629131876]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "<p class='marker-title'>Title text 3</p>",
          "description": "<p class='marker-description'>Some description text 3</p>",
          "tel": "<p class='marker-tel'> tel: <a href='tel:+359333333333'>+359 333 333 333</a></p>",
          "iconSize": [20, 30]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [23.31569194793701, 42.674610993495364]
        }
      }
    ]
  };
  // add markers to map
  geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement("div");
    el.className = "marker";
    el.style.backgroundImage = "url(img/location.png)";
    el.style.width = marker.properties.iconSize[0] + "px";
    el.style.height = marker.properties.iconSize[1] + "px";
    // create the popup
    var title = marker.properties.title;
    var description = marker.properties.description;
    var tel = marker.properties.tel;
    var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(title + description + tel);
    // add marker to map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(popup)
      .addTo(map);
  });
});