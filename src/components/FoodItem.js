import React from 'react'
import "./FoodItem.css"


const FoodItem = ({food, clickImageHandler}) => {
  return (
    <div onClick={() => clickImageHandler(food)}>
      <img className="img" src={food.image_url} />
    <p >Restaurant Name: {food.name}</p>
      {/*// <td>{food.is_closed}</td>
      // <td>{food.categories}</td>
      // <td>{food.rating}</td>
      // <td>{food.price}</td>
      // <td>{food.location}</td>
      // <td>{food.phone}</td> */}
    </div>

  )
}
export default FoodItem;
