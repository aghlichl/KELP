import React, { Component } from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router'

class BusinessMap extends Component {
    componentDidMount() {
        // this is SF
        let lat = 37.798002;
        let lng = -122.404282;
        if (this.props.businesses.length) {
            lat = this.props.businesses[0].latitude;
            lng = this.props.businesses[0].longitude;
        }

        let zoom = 13;
        if (this.props.businesses.length !== 0) {
            zoom = 16;
        }
        const mapOptions = {
            center: { lat: lat, lng: lng },
            zoom: 14,
            maxZoom: 16
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.businesses);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.businesses);
    }

    multipleMarkerCheck(){
        
        if (this.props.location.pathname === "/search"){
            return "multi-map-container"
        }
        else{
            return "map-container"
        }
        

    }

    render() {
        return (
            <div
                id={this.multipleMarkerCheck()}
                ref={map => this.mapNode = map}>
                Business map.
            </div>
        );
    }
}

export default withRouter(BusinessMap);













// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import { withRouter } from 'react-router-dom';

// import MarkerManager from '../../util/marker_manager';

// const getCoordsObj = latLng => ({
//     lat: latLng.lat(),
//     lng: latLng.lng()
// });

// const mapOptions = {
//     center: {
//         lat: 37.773972,
//         lng: -122.431297
//     }, 
//     zoom: 13
// };

// export default class BusinessMap extends Component {
//     componentDidMount() {
//         const map = this.refs.map;
//         this.map = new google.maps.Map(this.map, mapOptions);
//         this.MarkerManager = new MarkerManager(this.map);

//         //this.MarketManager.updateMarkers(this.props.businesses);

//         if (this.props.business) {
//             this.props.fetchBusiness(this.props.businessId);
//         } else {
//             this.registerListeners();
//             this.MarkerManager.updateMarkers(this.props.businesses);
//         }
//     }

//     componentDidUpdate() {
//         if (this.props.singleBusiness) {
//             const targetBusinessKey = Object.keys(this.props.businesses)[0];
//             const targetBusiness = this.props.businesses[targetBusinessKey];
//             this.MarkerManager.updateMarkers([targetBusiness]); //grabs only that one business
//         } else {
//             this.MarkerManager.updateMarkers(this.props.businesses);
//         }
//     }

//     registerListeners() {
//         google.maps.event.addListener(this.map, 'idle', () => {
//             const { north, south, east, west } = this.map.getBounds().toJSON();
//             const bounds = {
//                 northEast: { lat: north, lng: east },
//                 southWest: { lat: south, lng: west }
//             };
//             this.props.updateFilter('bounds', bounds);
//         });
//         google.maps.event.addListener(this.map, 'click', (event) => {
//             const coords = getCoordsObj(event.latLng);
//             this.handleClick(coords);
//         });
//     }

//     handleMarkerClick(business) {
//         this.props.history.push(`businesses/${business.id}`);
//     }

//     handleClick(coords) {
//         this.props.history.push({
//             pathname: 'businesses/new',
//             search: `lat=${coords.lat}&lng=${coords.lng}`
//         });
//     }

//     render() {
//         return (
//             <div className="map" ref={map}>
//                 Map
//             </div>
//         );
//     }
// }

// export default withRouter(BusinessMap);