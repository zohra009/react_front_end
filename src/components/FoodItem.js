import React from 'react'
import "./FoodItem.css"

const FoodItem = ({food, clickImageHandler}) => {
  return (
    <figure onClick={clickImageHandler}>
      <img className="img" src={food.image_url} />
    <figcaption >Restaurant Name: {food.name}</figcaption>
      {/*// <td>{food.is_closed}</td>
      // <td>{food.categories}</td>
      // <td>{food.rating}</td>
      // <td>{food.price}</td>
      // <td>{food.location}</td>
      // <td>{food.phone}</td> */}
    </figure>

  )
}
export default FoodItem;
