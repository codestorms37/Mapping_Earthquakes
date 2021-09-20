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
let satellite = L.tileLayer(
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
  Street: streets,
  Dark: dark,
  Satellite: satellite,
};

// Create the map object with center, zoom level and default layer.
let map = L.map("mapid", {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [dark],
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData =
  "https://raw.githubusercontent.com/codestorms37/Mapping_Earthquakes/main/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 1,
};

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function (data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    style: myStyle,
    onEachFeature: function (feature, layer) {
      console.log(layer);
      layer.bindPopup(
        "<h3>" +
          "Airline: " +
          feature.properties.airline +
          "</h3>" +
          "<hr>" +
          "<h5>" +
          "Destination: " +
          feature.properties.dst +
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
