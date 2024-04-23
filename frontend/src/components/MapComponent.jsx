import React, { useEffect } from 'react';
import {GOOGLE_MAPS_API_KEY} from '../javascript/constants.js'

// Google Maps API key (replace with your own key)

// Define loadMap function outside of MapComponent
const loadMap = (location) => {
  // Initialize map
  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 15,
  });

  // Initialize PlacesService
  const service = new window.google.maps.places.PlacesService(map);

  // Search for nearby places
  const request = {
    location: location,
    radius: 1000, // in meters
    type: ['tourist_attraction'] // specify types of attractions you want to display
  };

  service.nearbySearch(request, (results, status) => {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  });

  // Create a marker for each place found
  const createMarker = (place) => {
    new window.google.maps.Marker({
      map: map,
      position: place.geometry.location,
      title: place.name,
    });
  };
};

// MapComponent
const MapComponent = ({ location }) => {
  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
    script.async = true;

    // Define initMap function
    window.initMap = () => loadMap(location);

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      // Remove the script from the document body
      document.body.removeChild(script);
      // Remove initMap function from window object
      delete window.initMap;
    };
  }, []); // Run effect whenever location changes

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default MapComponent;
