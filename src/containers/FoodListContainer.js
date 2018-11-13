import React, { Component } from 'react';
import FoodItem from '../components/FoodItem'
import "./FoodListContainer.css"
import ShowPage from '../components/ShowPage'

import Filter from './Filter'

class FoodListContainer extends Component {
  state = {
    selected: false,
    showFood: null,
    foods: []
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

  // radio button
  handleRadio = (event) => {
    // console.log(event.target.value);
    // event.preventDefault()
    // console.log('im in handleRadio' ,event.target.value);
    let newArr = [...this.state.foods]
    if(event.target.value === "Categories"){

     // console.log('I hit categories!');
     let x = newArr.sort((foodA, foodB) => foodA.categories.localeCompare(foodB.categories))
     this.setState({foods: x})
   } else if (event.target.value === "Rating"){
    let y = newArr.sort((foodA, foodB) => parseFloat(foodA.rating) - parseFloat(foodB.rating))
    this.setState({foods: y})

  }}
  componentWillMount(){
    this.setState({
      foods: this.props.foods
    })
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.foods);
    if(prevProps.foods !== this.props.foods){
      this.setState({foods: this.props.foods})
    }
  }

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



  foodArray = () => {
    const foodsArr = this.state.foods.map(food => {
      // console.log(food);
      return <FoodItem key={food.name + food.longitude + food.latitude} food={food} value={this.state.showFood} clickHandler={this.clickImageHandler} switchToViewAll={this.props.switchToViewAll}/>
    })

    return this.state.selected ? <ShowPage showFood={this.state.showFood} visible={this.props.visible} backToAllFood={this.backToAllFood} addHandler={this.props.addHandler}/> : foodsArr

  }

  render() {
    // console.log("state", this.state.foods, "props", this.props.foods);
    return (
      <div>
        <Filter handleRadio={this.handleRadio} sortBy={this.state.radio}/>
        {this.foodArray()}
      </div>
    );
  }

}

export default FoodListContainer;
