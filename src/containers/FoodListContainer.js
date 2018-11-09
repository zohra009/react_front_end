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
    const foodsArr = this.props.foods.map(food => {
      // console.log(food);
      return <FoodItem key={food.name + food.longitude + food.latitude} food={food} value={this.state.showFood} clickHandler={this.clickImageHandler} switchToViewAll={this.props.switchToViewAll}/>
    })

    return this.state.selected ? <ShowPage showFood={this.state.showFood} visible={this.props.visible} backToAllFood={this.backToAllFood} addHandler={this.props.addHandler}/> : foodsArr

  }

  render() {

    return (
      <div>



        <div id="categorybar"><br/>

        </div>
        {this.foodArray()}
      </div>
    );
  }

}

export default FoodListContainer;
