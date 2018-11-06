import React from 'react'
import "./FoodItem.css"
// import {NavLink} from 'react-router-dom'


const FoodItem = ({food, clickHandler}) => {console.log(food)
  return (
    <div onClick={() => clickHandler(food)}>

    <img className="img" src={food.image_url} />
    <p >Restaurant Name: {food.name}</p>

    </div>

  )
}
export default FoodItem;
