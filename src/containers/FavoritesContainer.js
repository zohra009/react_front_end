import React from 'react'
import FavFoodItem from '../components/FavFoodItem'

const FavoritesContainer = ({foods, removeHandler}) => {
  const foodsArr = foods.map(food => <FavFoodItem key={food.name} food={food} clickHandler={removeHandler}  />)
  return (
      <div>
        Users Favorite Foods !
        {foodsArr}
      </div>
  )
}

export default FavoritesContainer;
