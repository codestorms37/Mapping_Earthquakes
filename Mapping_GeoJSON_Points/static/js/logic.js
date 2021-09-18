// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map("mapid").setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport = sanFranAirportData;

// Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function (feature, latlng) {
    console.log(feature);
    return L.marker(latlng).bindPopup(
      "<h2>" +
        feature.properties.name +
        "</h2>" +
        "<hr>" +
        "<h4>" +
        feature.properties.city +
        ", " +
        feature.properties.country +
        "</h4>"
    );
  },
}).addTo(map);

let sanFranAirport2 = sanFranAirportData2;

L.geoJson(sanFranAirport2, {
  onEachFeature: function (feature, layer) {
    console.log(layer);
    layer.bindPopup(
      "<h2>" +
        "Airport code :" +
        feature.properties.faa +
        "</h2>" +
        "<hr>" +
        "<h4>" +
        "Airport name: " +
        feature.properties.name +
        "</h4>"
    );
  },
}).addTo(map);

// map'styles
// let myMapStyle = 'mapbox/streets-v11'
// let myMapStyle = 'mapbox/outdoors-v11'
// let myMapStyle = "mapbox/light-v10";
let myMapStyle = "mapbox/dark-v10";
// let myMapStyle = 'mapbox/satellite-v9'
// let myMapStyle = "mapbox/satellite-streets-v11";

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: myMapStyle,
    accessToken: MAPBOX_API_KEY,
  }
);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
