
import React, { Fragment, Component } from 'react';
import MyGoogleMap from '../containers/MyGoogleMap';
import keys from '../keys'
import { Card, Icon, Image, Rating } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import './ShowPage.css'
import { Button, Modal } from 'semantic-ui-react'
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

  //rating Star

  ratingStar = () => {
    const rating = parseInt(this.state.showFood.rating)
    let stars = []
    for(let i = 0; i < rating; i++) {
       stars.push(<img src='/star-transparent.png'/>)
    }
    return stars
  }

  render() {
    console.log(parseInt(this.state.showFood.rating).toString());
    const mapURL = `https://maps.googleapis.com/maps/api/js?key=${keys.API_KEY}&v=3.exp&libraries=geometry,drawing,places`
    return (

      <Fragment>


      <img className="show-img" src={this.state.showFood.image_url} />
      <p>Restaurant Name: {this.state.showFood.name}</p>

      <p>Categories: {this.state.showFood.categories}</p>
      <p>Rating:<div id='rating'>{this.ratingStar()}</div></p>

      <p>Price: {this.state.showFood.price}</p>
      <p>Location: {this.state.showFood.location}</p>
      <p>Tel: {this.state.showFood.phone}</p>
      <Modal style={{width: 300}} trigger={<Button onClick={() => this.toggle()}> Add to Favorites</Button>}>
        <Modal.Content style={{"background-color": "aquamarine"}}>

          <p>Added to Your Favorites!</p>

        </Modal.Content >

      </Modal>

      <div className="map">
        <MyGoogleMap
           isMarkerShown
           googleMapURL= {mapURL}
           loadingElement={<div style={{ height: `60%` }} />}
           containerElement={<div style={{ height: `250px` }} />}
           mapElement={<div style={{ height: `100%` }} />}
           food={this.state.showFood}
          />
      </div>

  </Fragment>
  )
  }
}

export default withRouter(ShowPage);

//<Button onClick={this.props.backToAllFood}>Back to Food List</Button>

// <Rating icon='star' defaultRating={parseInt(this.state.showFood.rating).toString()} maxRating={5}/>
