import React from 'react'
import './FavFoodItem.css'
import { Button, Modal } from 'semantic-ui-react'


const FavFoodItem = ({food, clickHandler}) => {
  console.log(food);
  return (

    <div >

    <img className="fav-img" src={food.image_url} />
    <p className='x'>Restaurant Name: {food.name}</p>
    <Button onClick={() => clickHandler(food)}>Remove Food Item</Button>

    </div>

  )
}
export default FavFoodItem;
