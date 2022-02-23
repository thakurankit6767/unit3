function initMap() {
  // Map option

  var options = {
    center: { lat: 38.346, lng: -0.4907 },
    zoom: 10,
  };

  //New Map
  map = new google.maps.Map(document.getElementById("map"), options);

  //listen for click on map location

  google.maps.event.addListener(map, "click", (event) => {
    //add Marker
    addMarker({ location: event.latLng });
  });


  //Add Markers to Array

  let MarkerArray = [
   

    { location: { lat: 39.4699, lng: -0.3763 } },

    {
      location: { lat: 38.5411, lng: -0.1225 },
      content: `<h2>Benidorm City</h2>`,
    },
  ];

  // loop through marker
  for (let i = 0; i < MarkerArray.length; i++) {
    addMarker(MarkerArray[i]);
  }

  // Add Marker

  function addMarker(property) {
    const marker = new google.maps.Marker({
      position: property.location,
      map: map,
      //icon: property.imageIcon
    });

    // Check for custom Icon

    if (property.imageIcon) {
      // set image icon
      marker.setIcon(property.imageIcon);
    }

    if (property.content) {
      const detailWindow = new google.maps.InfoWindow({
        content: property.content,
      });

      marker.addListener("mouseover", () => {
        detailWindow.open(map, marker);
      });
    }
  }
}
