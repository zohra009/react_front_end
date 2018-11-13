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


class FoodPage extends Component {
  state = {
  foods: [],
  userFavFoods: [],
  clickedFood: null,
  visible: true,  //dont need this anymore
  // radio: ''

  }

  componentDidMount() {
    this.makeSearchFetch()
  }

  makeSearchFetch = () => {
    fetch('http://localhost:3000/foods')
    .then(res => res.json())
    .then(foods => this.setState({foods: foods}))

  }
  // // radio button
  // handleRadio = (event) => {
  //   event.preventDefault()
  //   console.log('im in handleRadio' ,event.target.value);
  //   // this.setState({
  //   //   radio: event.target.value
  //   // })
  //   let newArr = [...this.state.foods]
  //   if(event.target.value === "Categories"){
  //
  //    console.log('I hit it!');
  //    let x = newArr.sort((foodA, foodB) => foodA.categories.localeCompare(foodB.categories))
  //    this.setState({foods: x})
  // }else if (event.target.value === "Rating"){
  //   let y = newArr.sort((foodA, foodB) => parseFloat(foodA.rating) - parseFloat(foodB.rating))
  //   this.setState({foods: y})
  //
  // }}
  // renderFoods = () => {
  //   let newArr = [...this.state.foods]
  //
  //   // if (this.state.radio === "All") {
  //   //   let a = newArr.filter(item => this.state.radio === item.radio)
  //   //   this.setState({foods: a})
  //   // }
  //    if(this.state.radio === "Categories"){
  //
  //     console.log('I hit it!');
  //     let x = newArr.sort((foodA, foodB) => foodA.categories.localeCompare(foodB.categories))
  //     this.setState({foods: x})
  //   }else if (this.state.radio === "Rating"){
  //     let y = newArr.sort((foodA, foodB) => foodA - foodB)
  //     this.setState({foods: y})
  //     console.log(newArr);
  //   }

      // return newArr  // returns stocks arr




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

  render() {
    // console.log(this.state.foods)
    return (
      <div className="FoodPage">
        <Router>

          <div>
          <NavBar />

              <Switch>

                <Route exact path="/favorites" render={() => <FavoritesContainer foods={this.state.userFavFoods} removeHandler={this.removeHandler}/>} > Favorite Food Item </Route>
                <Route exact path="/food" component={ShowPage}> Show Food Page </Route>
                <Route path="/" render={() => <FoodListContainer visible={this.state.visible} foods={this.state.foods} backToAllFood={this.backToAllFood} switchToViewAll={this.switchToViewAll} addHandler={this.addHandler}/>} > Food List </Route>


              </Switch>
            </div>

          </Router>



      </div>
    );
  }

}

export default FoodPage;
