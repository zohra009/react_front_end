import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FoodListContainer from './containers/FoodListContainer';
import FavoritesContainer from './containers/FavoritesContainer'
import ShowPage from './components/ShowPage'
// import Filter from './containers/FoodItem';
// import FoodItem from '.components/FoodItem'

class App extends Component {
  state = {
  foods: [],
  userFavFoods: [],
  clickedFood: null

  }

  componentDidMount() {
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
  // <FoodListContainer foods={this.state.foods} addHandler={this.addHandler}/>

  render() {
    console.log(this.state.foods)
    return (
      <div className="App">
        Your are in App
        <FavoritesContainer foods={this.state.userFavFoods} removeHandler={this.removeHandler}/>

        <FoodListContainer foods={this.state.foods} backToAllFood={this.backToAllFood} switchToViewAll={this.switchToViewAll} addHandler={this.addHandler}/>

      </div>
    );
  }
}

export default App;

// {this.state.clickedFood ? <ShowPage clickedFood={this.state.clickedFood} backToAllFood={this.backToAllFood} addHandler={this.addHandler}/> :
