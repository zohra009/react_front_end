
import React, { Fragment, Component } from 'react';
import MyGoogleMap from '../containers/MyGoogleMap';
import keys from '../keys'
import { Card, Icon, Image } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
// import StarRating from "./StarRating"

class ShowPage extends Component {
  state = {
    showFood: {}
  }
  componentDidMount(){
    let id = parseInt(this.props.history.location.pathname.split('/')[2])
    fetch(`http://localhost:3000/foods/${id}`)
    .then(res => res.json())
    .then(showFood => this.setState({showFood: showFood}))
    .catch(console.log)
    // debugger
  }

  toggle = () => {
   this.props.addHandler(this.state.showFood)
  }

  render() {
    // debugger


    // find the matching food instance and set that to selectedFood


    console.log(this.state.showFood);
    const mapURL = `https://maps.googleapis.com/maps/api/js?key=${keys.API_KEY}&v=3.exp&libraries=geometry,drawing,places`
    return (

      <Fragment>
     <div>

      <img className="img" src={this.state.showFood.image_url} />
      <p>Restaurant Name: {this.state.showFood.name}</p>

      <p>{this.state.showFood.categories}</p>
      <p>{this.state.showFood.rating}</p>
      <p>{this.state.showFood.price}</p>
      <p>{this.state.showFood.location}</p>
      <p>{this.state.showFood.phone}</p>
      <button onClick={() => this.toggle()}>Add to Favorites</button>
      <button onClick={this.props.backToAllFood}>Back to Food List</button>

        <MyGoogleMap
           isMarkerShown
           googleMapURL= {mapURL}
           loadingElement={<div style={{ height: `50%` }} />}
           containerElement={<div style={{ height: `200px` }} />}
           mapElement={<div style={{ height: `100%` }} />}
           food={this.state.showFood}
          />

    </div>
  </Fragment>
  )
  }
}

export default withRouter(ShowPage);
