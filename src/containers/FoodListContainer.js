import React, { Component, Link } from 'react';
import FoodItem from '../components/FoodItem'
import "./FoodListContainer.css"
import { Grid, Image } from 'semantic-ui-react'
import ShowPage from '../components/ShowPage'

import Filter from './Filter'

class FoodListContainer extends Component {
  state = {
    selected: false,
    showFood: null,
    foods: [],
    // currentFood: null
  }

  clickImageHandler = (e) => {
    // debugger
    // console.log(e.id);
    this.setState({
      selected: true,
      showFood: e,
    })

  }

  backToAllFood = () => {
    this.setState({selected: false})
  }

  // radio button
  handleRadio = (event) => {
    // console.log(event.target.value);
    event.preventDefault()
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
    // console.log(this.state.foods);
    if(prevProps.foods !== this.props.foods){
      this.setState({foods: this.props.foods})
    }
  }


  foodArray = () => {
    const foodsArr = this.state.foods.map(food => {

      return <Grid.Column><FoodItem key={food.id}
        food={food} value={this.state.showFood}
        clickHandler={this.clickImageHandler} switchToViewAll={this.props.switchToViewAll} /></Grid.Column>
    })

    return this.state.selected ? <ShowPage showFood={this.state.showFood}
    visible={this.props.visible} backToAllFood={this.backToAllFood}
    addHandler={this.props.addHandler} onClick={this.props.setId}/> : foodsArr

  }

// {!this.state.selected ? <Filter handleRadio={this.handleRadio} sortBy={this.state.radio}/> : null}
  render() {

    return (

          <div className="FoodListContainer">
             <Filter handleRadio={this.handleRadio} />
              <Grid relaxed columns={3}>{this.foodArray()}</Grid>
            </div>

    );
  }

}

export default FoodListContainer;
