import React from 'react'



const FavFoodItem = ({food, clickHandler}) => {
  return (
    <div >

    <img className="img" src={food.image_url} />
    <p >Restaurant Name: {food.name}</p>
    <button onClick={() => clickHandler(food)}>Remove Food Item</button>
    </div>

  )
}
export default FavFoodItem;
