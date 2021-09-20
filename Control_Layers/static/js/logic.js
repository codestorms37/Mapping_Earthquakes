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

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark,
};

// Create the map object with center, zoom level and default layer.
let map = L.map("mapid", {
  center: [30, 30],
  zoom: 2,
  layers: [streets],
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData =
  "https://raw.githubusercontent.com/codestorms37/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function (data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    onEachFeature: function (airport, layer) {
      console.log(layer);
      layer.bindPopup(
        "<h3>" +
          "Airport code: " +
          airport.properties.faa +
          "</h3>" +
          "<hr>" +
          "<h5>" +
          "Airport name: " +
          airport.properties.name +
          "</h5>"
      );
    },
  }).addTo(map);
});
