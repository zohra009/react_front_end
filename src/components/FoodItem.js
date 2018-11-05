import React from 'react'
import "./FoodItem.css"


const FoodItem = ({food, clickHandler}) => {
  return (
    <div onClick={() => clickHandler(food)}>
  
    <img className="img" src={food.image_url} />
    <p >Restaurant Name: {food.name}</p>

    </div>

  )
}
export default FoodItem;
