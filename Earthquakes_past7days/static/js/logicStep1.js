// Add console.log to check to see if our code is working.
console.log("working");

// map'styles
// let myMapStyle = 'mapbox/streets-v11'
// let myMapStyle = 'mapbox/outdoors-v11'
// let myMapStyle = "mapbox/light-v10";
// let myMapStyle = "mapbox/dark-v10";
// let myMapStyle = 'mapbox/satellite-v9'
// let myMapStyle = "mapbox/satellite-streets-v11";

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken: MAPBOX_API_KEY,
  }
);

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/dark-v10",
    accessToken: MAPBOX_API_KEY,
  }
);

// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/satellite-streets-v11",
    accessToken: MAPBOX_API_KEY,
  }
);

// Create a base layer that holds both maps.
let baseMaps = {
  Streets: streets,
  Dark: dark,
  Satellite: satelliteStreets,
};

// Create the map object with center, zoom level and default layer.
let map = L.map("mapid", {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets], // default base map
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods =
  "https://raw.githubusercontent.com/codestorms37/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Retrieve the earthquake GeoJSON data.
let earthquakesData= "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create a style for the polygon.
// For more information, see the Leaflet documentation on changing color options and other features of polygons:
// https://leafletjs.com/reference-1.6.0.html#path-color
let myStyle = {
  color: "blue",
  fillColor: "yellow",
  weight: 1,
};

// Grabbing our GeoJSON data.
d3.json(earthquakesData).then(function (data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    // add Style
    style: myStyle,
    // add Popup
    onEachFeature: function (feature, layer) {
      console.log(layer);
      layer.bindPopup(
        "<h3>" +
          "Area: " +
          feature.properties.AREA_NAME +
          "</h3>" +
          "<hr>" +
          "<h5>" +
          "Code: " +
          feature.properties.AREA_S_CD +
          "</h5>"
      );
    },
  }).addTo(map);
});

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: "2",
  dashArray: "20, 20",
  dashOffset: "0",
}).addTo(map);
