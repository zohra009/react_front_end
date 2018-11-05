import React from 'react'
// import from './FoodItem'


const ShowPage = ({showFood}) => {
  return (
    <div>

      <img className="img" src={showFood.image_url} />
    <p>Restaurant Name: {showFood.name}</p>

      <p>{showFood.categories}</p>
      <p>{showFood.rating}</p>
      <p>{showFood.price}</p>
      <p>{showFood.location}</p>
      <p>{showFood.phone}</p>
    </div>

  )
}

export default ShowPage
