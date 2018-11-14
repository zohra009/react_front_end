import React, { Component } from 'react';
import './FoodPage.css';
import { Button } from 'semantic-ui-react'

import FoodListContainer from './containers/FoodListContainer';
import FavoritesContainer from './containers/FavoritesContainer';
import NavBar  from './NavBar';
import ShowPage from './components/ShowPage';
import FoodItem from './components/FoodItem';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyGoogleMap from './containers/MyGoogleMap';
import Login from './Login'

class FoodPage extends Component {
  state = {
  foods: [],
  userFavFoods: [],
  clickedFood: null,
  visible: true,  //dont need this anymore
  // id: null
  }

  componentDidMount() {
    this.makeSearchFetch()
  }

  makeSearchFetch = () => {
    fetch('http://localhost:3000/foods')
    .then(res => res.json())
    .then(foods => this.setState({foods: foods}))

  }

   //add to Fav Foods

   addHandler = (food) => {
    if (!this.state.userFavFoods.includes(food)) {
      this.setState({
        userFavFoods: [...this.state.userFavFoods, food]
      })
    }
    this.setState({
      clickedFood: null
    })
  }

  backToAllFood = () => {
    this.setState({
      clickedFood: null
    })
  }

  //remove food item from Fav container
  removeHandler = (selectedFood) => {
    let newArr = [...this.state.userFavFoods]
    let newArray2 = newArr.filter(food => food !== selectedFood)
    this.setState({
      userFavFoods: newArray2
    })
  }

  switchToViewAll = (food) => {
    if (this.state.clickedFood === null) {
      this.setState({clickedFood: food})
    }

  }
  //
  // //callback
  // setId = (id) => {
  //   console.log(id);
  //   this.setState({
  //     id: id
  //   })
  // }

  render() {
    // console.log(this.state.foods)
    return (
      <div className="FoodPage">
        <Router>

          <div>
          <NavBar />

              <Switch>


                <Route path="/login" component={Login } > LogIn </Route>
                <Route exact path="/favorites" render={() => <FavoritesContainer foods={this.state.userFavFoods} removeHandler={this.removeHandler} />} > Favorite Food Item </Route>
                <Route exact path='/food'component={ShowPage}> Show Food Page </Route>
                <Route path="/" render={() => <FoodListContainer visible={this.state.visible} foods={this.state.foods} backToAllFood={this.backToAllFood} switchToViewAll={this.switchToViewAll} addHandler={this.addHandler} />} > Food List </Route>


              </Switch>
            </div>

          </Router>



      </div>
    );
  }

}

export default FoodPage;

//step:
