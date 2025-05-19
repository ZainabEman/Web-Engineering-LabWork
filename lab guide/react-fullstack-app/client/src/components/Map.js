import React from 'react';

export default function Map() {
  return (
    <iframe
      title="map"
      width="100%"
      height="300"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed/v1/place?q=FAST%20Peshawar&key=YOUR_API_KEY">
    </iframe>
  );
}