// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//  Add a marker to the map for Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(map);

let myCircle = L.circle([34.0522, -118.2437], { radius: 300, fillColor: 'yellow', color: 'blue' });
myCircle.addTo(map);
// 300 meters

let myCircleMarker = L.circleMarker([34.0522, -118.2437], { radius: 300, fillColor: 'yellow', color: 'blue' });
myCircleMarker.addTo(map);
// 300 pixel marker

// map'styles
// let myMapStyle = 'mapbox/streets-v11'
// let myMapStyle = 'mapbox/outdoors-v11'
// let myMapStyle = 'mapbox/light-v10'
let myMapStyle = 'mapbox/dark-v10'
// let myMapStyle = 'mapbox/satellite-v9'
// let myMapStyle = 'mapbox/satellite-streets-v11'

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: myMapStyle,
    accessToken: MAPBOX_API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);