
import React, { Fragment, Component } from 'react';
import MyGoogleMap from '../containers/MyGoogleMap';
import keys from '../keys'
import { Card, Icon, Image } from 'semantic-ui-react'
// import StarRating from "./StarRating"

class ShowPage extends Component {


  toggle = () => {
   this.props.addHandler(this.props.showFood)
  }

  render() {
    console.log(this.props);
    const mapURL = `https://maps.googleapis.com/maps/api/js?key=${keys.API_KEY}&v=3.exp&libraries=geometry,drawing,places`
    return (

      <Fragment>
     <div>

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

    </div>
  </Fragment>
  )
  }
}

export default ShowPage;
