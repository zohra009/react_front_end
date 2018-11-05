import React from 'react'
// import from './FoodItem'


const ShowPage = ({showFood}) => {
  // displayMap = () => {
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

  return (
    <div>
    
      <img className="img" src={showFood.image_url} />
    <p>Restaurant Name: {showFood.name}</p>

      <p>{showFood.categories}</p>
      <p>{showFood.rating}</p>
      <p>{showFood.price}</p>
      <p>{showFood.location}</p>
      <p>{showFood.phone}</p>
    </div>

  )
}

export default ShowPage
