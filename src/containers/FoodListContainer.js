import React, { Component } from 'react';
import FoodItem from '../components/FoodItem'
import "./FoodListContainer.css"
import ShowPage from '../components/ShowPage'

class FoodListContainer extends Component {
  state = {
    selected: false,
    showFood: null
  }

  clickImageHandler = (e) => {
    console.log(e);
    this.setState({
      selected: true,
      showFood: e
    })
  }

  foodArray = () => {
    const foodsArr = this.props.foods.map(food => <FoodItem key={food.name} food={food} value={this.state.showFood} clickImageHandler={this.clickImageHandler} />)
    return this.state.selected ? <ShowPage showFood={this.state.showFood}/> : foodsArr

  }

  render() {
    return (
      <div>
        You're in your Food List Container

        <div id="categorybar">
          <span>Image</span>
          <span>Restaurant Name</span>
          <span>Location</span>
          <span>Open</span>
        </div>
        {this.foodArray()}
      </div>
    );
  }

}

export default FoodListContainer;
