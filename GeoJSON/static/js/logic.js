// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([37.6213, -122.379], 3);

let sfo = [37.6213, -122.379];
let jfk = [40.6413, -73.7781];
let aus = [30.1975, -97.6664];
let yyz = [43.6777, -79.6248];

// Coordinates for each point to be used in the polyline.
let line = [sfo, aus, yyz, jfk];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: "2",
  dashArray: "20, 20",
  dashOffset: "0",
}).addTo(map);

// GeoJSON
let geojsonFeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        airline: "AA",
        airline_id: "24",
        src: "LAX",
        dst: "ABQ",
        dst_id: "4019",
        stops: "0",
        equipment: "CRJ CR7",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-118.4079971, 33.94250107],
          [-106.609001, 35.040199],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        airline: "AA",
        airline_id: "24",
        src: "LAX",
        src_id: "3484",
        dst: "ANC",
        dst_id: "3774",
        codeshare: "Y",
        stops: "0",
        equipment: "737",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-118.4079971, 33.94250107],
          [-149.99600219726562, 61.174400329589844],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        airline: "AA",
        airline_id: "24",
        src: "LAX",
        src_id: "3484",
        dst: "AUS",
        dst_id: "3673",
        codeshare: "",
        stops: "0",
        equipment: "M83 738",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-118.4079971, 33.94250107],
          [-97.6698989868164, 30.194499969482422],
        ],
      },
    },
  ],
};

L.geoJSON(geojsonFeatureCollection).addTo(map);

var geojsonFeature = {
  "type": "Feature",
  "properties": {
      "name": "Coors Field",
      "amenity": "Baseball Stadium",
      "popupContent": "This is where the Rockies play!"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [-104.99404, 39.75621]
  }
};

L.geoJSON(geojsonFeature).addTo(map);

// map'styles
// let myMapStyle = 'mapbox/streets-v11'
// let myMapStyle = 'mapbox/outdoors-v11'
let myMapStyle = "mapbox/light-v10";
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
    id: myMapStyle,
    accessToken: MAPBOX_API_KEY,
  }
);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
