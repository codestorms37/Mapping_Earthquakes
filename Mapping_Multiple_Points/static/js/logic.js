// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([40.7, -94.5], 4);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// An array containing each city's location, state, and population.
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function (city) {
  console.log(city);
  L.circleMarker(city.location, { radius: city.population/100000, color: 'orange', fillColor: 'orange' })
    .bindPopup(
      "<h2>" +
        city.city +
        ", " +
        city.state +
        "</h2> <hr> <h3>Population " +
        city.population.toLocaleString() +
        "</h3>"
    )
    .addTo(map);
});

// map'styles
// let myMapStyle = 'mapbox/streets-v11'
// let myMapStyle = 'mapbox/outdoors-v11'
// let myMapStyle = 'mapbox/light-v10'
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
