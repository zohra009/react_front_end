import React from 'react'
import FavFoodItem from '../components/FavFoodItem'
import Filter from './Filter'

class FavoritesContainer extends React.Component {
  state = {
    favFoods: []
  }

  componentWillMount(){
    this.setState({
      favFoods: this.props.foods
    })
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.favFoods, 'prevProps:', prevProps, 'this.props.foods:', this.props.foods);
    if(prevProps.foods !== this.props.foods){
      this.setState({favFoods: this.props.foods})
    }
  }

  handleRadio = (event) => {
    // console.log("Vadim");
    //event.preventDefault()
    // console.log('im in handleRadio' ,event.target.value);
    let newArr = [...this.state.favFoods]
    // console.log(event.target.value);
    if(event.target.value === "Categories"){

     // console.log('I hit categories!');
     let x = newArr.sort((foodA, foodB) => foodA.categories.localeCompare(foodB.categories))
     this.setState({favFoods: x})
   } else if (event.target.value === "Rating"){
    let y = newArr.sort((foodA, foodB) => parseFloat(foodA.rating) - parseFloat(foodB.rating))
    this.setState({favFoods: y})

  }}
  foodsArr = () => {
    let foodArr = 'you have no favs'
    //console.log(this.state.favFoods)
    if (this.state.favFoods.length > 0) {
      return foodArr = this.state.favFoods.map(food => <FavFoodItem key={food.id} food={food} clickHandler={this.props.removeHandler}  />)
    }
  }
  render(){
  return (
      <div>
        <Filter handleRadio={this.handleRadio} />
        Users Favorite Foods !
        {this.foodsArr()}
      </div>
  )}
}





export default FavoritesContainer;
