import React, { Component } from 'react';
import FoodItem from '../components/FoodItem'
import "./FoodListContainer.css"
import ShowPage from '../components/ShowPage'

class FoodListContainer extends Component {
  state = {
    selected: false,
    showFood: null,

  }

  clickImageHandler = (e) => {
    console.log(e);
    this.setState({
      selected: true,
      showFood: e
    })
  }

  backToAllFood = () => {
    this.setState({selected: false})
  }

  foodArray = () => {
    const foodsArr = this.props.foods.map(food => <FoodItem key={food.name} food={food} value={this.state.showFood} clickHandler={this.clickImageHandler} switchToViewAll={this.props.switchToViewAll}/>)
    return this.state.selected ? <ShowPage showFood={this.state.showFood} backToAllFood={this.backToAllFood} addHandler={this.props.addHandler}/> : foodsArr

  }

  render() {
    return (
      <div>
        You're in your Food List Container


        <div id="categorybar"><br/>
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
