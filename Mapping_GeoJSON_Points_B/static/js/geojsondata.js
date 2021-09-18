// Add GeoJSON data.
let sanFranAirportData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: "3469",
        name: "San Francisco International Airport",
        city: "San Francisco",
        country: "United States",
        faa: "SFO",
        icao: "KSFO",
        alt: "13",
        "tz-offset": "-8",
        dst: "A",
        tz: "America/Los_Angeles",
      },
      geometry: {
        type: "Point",
        coordinates: [-122.375, 37.61899948120117],
        // coordinates are "inverted" in geoJSON (longitude,latitude)
      },
    },
  ],
};

// Other
let sanFranAirportData2 = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          id: "3469",
          name: "San Francisco International Airport",
          city: "San Francisco",
          country: "United States",
          faa: "SFO",
          icao: "KSFO",
          alt: "13",
          "tz-offset": "-8",
          dst: "A",
          tz: "America/Los_Angeles",
        },
        geometry: {
          type: "Point",
          coordinates: [-122.875, 37.61899948120117],
          // coordinates are "inverted" in geoJSON (longitude,latitude)
        },
      },
    ],
  };
