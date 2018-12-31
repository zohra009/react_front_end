import React from 'react';

import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyGoogleMap = withScriptjs(withGoogleMap((props) =>

//  navigator.geolocation.watchPosition(function(position) {
//   do_something(position.coords.latitude, position.coords.longitude);
// })
 <GoogleMap
     defaultZoom={15}
     defaultCenter={{ lat: parseFloat(props.food.latitude), lng: parseFloat(props.food.longitude) }}

     
  >
   {props.isMarkerShown && <Marker position={{ lat:  parseFloat(props.food.latitude), lng: parseFloat (props.food.longitude) }} />}
 </GoogleMap>
))
 export default MyGoogleMap;
