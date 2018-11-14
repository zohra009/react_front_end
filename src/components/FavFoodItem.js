import React from 'react'
import './FavFoodItem.css'


const FavFoodItem = ({food, clickHandler}) => {
  console.log(food);
  return (

    <div className='favFood' >

    <img className="img" src={food.image_url} />
    <p >Restaurant Name: {food.name}</p>
    <button onClick={() => clickHandler(food)}>Remove Food Item</button>

    </div>

  )
}
export default FavFoodItem;
