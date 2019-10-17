document.addEventListener("DOMContentLoaded", function(event) {
  mapboxgl.accessToken = "pk.eyJ1IjoibmFza285MCIsImEiOiJjazFqMHB5bXgwc3VtM3BqeWJ3Z2F6N2p1In0.UIeRf1hLbffdYk6bibVbLg";
  // mapboxgl.accessToken = "pk.eyJ1IjoibmFza285MCIsImEiOiJjazFrdjhucDQwMDc3M2JsanhocjE5em9sIn0.LOBSHBPTHrQnuWOd7NbKMg";  
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/outdoors-v11",
    center: [23.325691223144528, 42.69795509187187],
    zoom: 13
  });
  // map vision
  var layerList = document.getElementById('menu');
  var inputs = layerList.getElementsByTagName('input');

  function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
  }
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
  }

  // za full screen
  // butoni za zoom i vurtene
  // custom icons

  $(document).on("keydown", function(e) {
    if ((e.metaKey || e.altKey) && (String.fromCharCode(e.which).toLowerCase() === "h")) {
      $("#map").slideToggle();
    }
  });
});