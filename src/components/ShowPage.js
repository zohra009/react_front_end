
import React, { Fragment, Component } from 'react';
import MyGoogleMap from '../containers/MyGoogleMap';
import keys from '../keys'

class ShowPage extends Component {


  toggle = () => {
   this.props.addHandler(this.props.showFood)
  }

  render() {
    console.log(this.props);
    const mapURL = `https://maps.googleapis.com/maps/api/js?key=${keys.API_KEY}&v=3.exp&libraries=geometry,drawing,places`
    return (

      <Fragment>
    {this.props.visible && <div>

      <img className="img" src={this.props.showFood.image_url} />
      <p>Restaurant Name: {this.props.showFood.name}</p>

      <p>{this.props.showFood.categories}</p>
      <p>{this.props.showFood.rating}</p>
      <p>{this.props.showFood.price}</p>
      <p>{this.props.showFood.location}</p>
      <p>{this.props.showFood.phone}</p>
      <button onClick={() => this.toggle()}>Add to Favorites</button>
      <button onClick={this.props.backToAllFood}>Back to Food List</button>

        <MyGoogleMap
           isMarkerShown
           googleMapURL= {mapURL}
           loadingElement={<div style={{ height: `50%` }} />}
           containerElement={<div style={{ height: `200px` }} />}
           mapElement={<div style={{ height: `100%` }} />}
           food={this.props.showFood}
          />

    </div>}
  </Fragment>
  )
  }
}

export default ShowPage;


// / displayMap = () => {
//     // Instantiate a map and platform object:
//   let platform = new H.service.Platform({
//     'app_id': 'ud1bCJMAUnax30Uo7vVx',
//     'app_code': '1DBCV_lTnQNGDdtzfihihQ',
//     useCIT: true,
//     useHTTPS: true
//   });
//
//   // Get default map types from the platform object:
// let defaultLayers = platform.createDefaultLayers();
//
// // Instantiate the map:
// let map = new H.Map(
//   document.getElementById('mapContainer'),
//   defaultLayers.normal.map,
//   {
//   zoom: 10,
//   center: { lat: 52.51, lng: 13.4 }
//   });
//
// // Create the parameters for the geocoding request:
// let geocodingParams = {
//     searchText: '200 S Mathilda Ave, Sunnyvale, CA'
//   };
//
//   // Define a callback function to process the geocoding response:
//   let onResult = function(result) {
//     let locations = result.Response.View[0].Result,
//       position,
//       marker;
//     // Add a marker for each location found
//     for (let i = 0;  i < locations.length; i++) {
//     position = {
//       lat: locations[i].Location.DisplayPosition.Latitude,
//       lng: locations[i].Location.DisplayPosition.Longitude
//     };
//     let marker = new H.map.Marker(position);
//     map.addObject(marker);
//     }
//   };
//
//   // Get an instance of the geocoding service:
//   let geocoder = platform.getGeocodingService();
//
//   // Call the geocode method with the geocoding parameters,
//   // the callback and an error callback function (called if a
//   // communication error occurs):
//   geocoder.geocode(geocodingParams, onResult, function(e) {
//     alert(e);
//   });
// }
