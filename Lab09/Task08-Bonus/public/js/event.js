let marker;

function initMap() {
  const defaultLocation = { lat: 24.8607, lng: 67.0011 }; // Karachi
  const map = new google.maps.Map(document.getElementById('map'), {
    center: defaultLocation,
    zoom: 10
  });

  map.addListener('click', function (e) {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    if (marker) {
      marker.setPosition(e.latLng);
    } else {
      marker = new google.maps.Marker({ position: e.latLng, map: map });
    }

    document.getElementById('latitude').value = lat;
    document.getElementById('longitude').value = lng;
  });
}

document.getElementById('eventForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    event_name: document.getElementById('event_name').value,
    organizer_name: document.getElementById('organizer_name').value,
    event_date: document.getElementById('event_date').value,
    latitude: document.getElementById('latitude').value,
    longitude: document.getElementById('longitude').value
  };

  if (!data.latitude || !data.longitude) {
    alert("Please select a location on the map.");
    return;
  }

  fetch('/api/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    document.getElementById('messageBox').innerHTML =
      `<div class="alert alert-success">✅ Event Registered! Event ID: ${response.eventId}</div>`;
    document.getElementById('eventForm').reset();
    marker.setMap(null);
  });
});
