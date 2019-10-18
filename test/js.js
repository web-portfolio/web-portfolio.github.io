document.addEventListener("DOMContentLoaded", function(event) {
  mapboxgl.accessToken = "pk.eyJ1IjoibmFza285MCIsImEiOiJjazFqMHB5bXgwc3VtM3BqeWJ3Z2F6N2p1In0.UIeRf1hLbffdYk6bibVbLg";
  // mapboxgl.accessToken = "pk.eyJ1IjoibmFza285MCIsImEiOiJjazFrdjhucDQwMDc3M2JsanhocjE5em9sIn0.LOBSHBPTHrQnuWOd7NbKMg";  
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/outdoors-v11",
    center: [23.325304985046387, 42.67382218833651],
    zoom: 13
  });
  // map vision
  var layerList = document.getElementById("menu");
  var inputs = layerList.getElementsByTagName("input");

  function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle("mapbox://styles/mapbox/" + layerId);
  }
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
  }

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
          "message": "Location text 1",
          "description": '<h3><a href="https://www.google.com/"></a></h3>',
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
          "message": "Location text 2",
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
          "message": "Location text 3",
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
    el.style.backgroundImage = "url(location.png";
    el.style.width = marker.properties.iconSize[0] + "px";
    el.style.height = marker.properties.iconSize[1] + "px";
    // create the popup
    var popup = new mapboxgl.Popup({ offset: 25 }).setText(marker.properties.message);
    // add marker to map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(popup)
      .addTo(map);
  });


  $(document).on("keydown", function(e) {
    if ((e.metaKey || e.altKey) && (String.fromCharCode(e.which).toLowerCase() === "h")) {
      $("#map").toggle();
    }
  });
});