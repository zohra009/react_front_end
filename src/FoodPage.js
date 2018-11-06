import React, { Component } from 'react';
import FoodListContainer from './containers/FoodListContainer';
import FavoritesContainer from './containers/FavoritesContainer'
// import ShowPage from './components/ShowPage'
// import FoodItem from './components/FoodItem'
// import FavFoodItem from './components/FavFoodItem'



class FoodPage extends Component {
  state = {
  foods: [],
  userFavFoods: [],
  clickedFood: null,
  visible: true

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

  render() {

    return (
      <div className="FoodPage">

      <FavoritesContainer foods={this.state.userFavFoods} backToAllFood={this.backToAllFood} removeHandler={this.removeHandler}/>
      <FoodListContainer visible={this.state.visible} foods={this.state.foods} backToAllFood={this.backToAllFood} switchToViewAll={this.switchToViewAll} addHandler={this.addHandler}/>
      </div>
    );
  }

}

export default FoodPage;
