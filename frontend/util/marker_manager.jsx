export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromBusiness(business) {
    const position = new google.maps.LatLng(business.latitude, business.longitude);
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      businessId: business.id
    });
    this.markers[marker.businessId] = marker;
  }

  updateMarkers(businesses) {
    const businessesObj = {};


    businesses.forEach(business => businessesObj[business.id] = business);

    businesses
      .filter(business => !this.markers[business.id])
      .forEach(newBusiness => this.createMarkerFromBusiness(newBusiness, this.handleClick));

    Object.keys(this.markers)
      .filter(businessId => !businessesObj[businessId])
      .forEach((businessId) => this.removeMarker(this.markers[businessId]));

    

    if (businesses.length === 0) {
      this.map.setCenter(new google.maps.LatLng(37.798002, -122.404282));
    } 
    else {
      let bounds = new google.maps.LatLngBounds();
      const entries = Object.entries(this.markers);
      entries.forEach(e => {
        let marker = e[1];
        bounds.extend(marker.getPosition());
      });
      this.map.setCenter(bounds.getCenter());
      this.map.fitBounds(bounds);
    }
  }
  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}