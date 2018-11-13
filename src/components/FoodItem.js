import React from 'react'
import "./FoodItem.css"
import { Card, Icon, Image } from 'semantic-ui-react'



const FoodItem = ({food, clickHandler}) => {
  return (
    <Card className="card">
      <div onClick={() => clickHandler(food)}>

        <img className="img" src={food.image_url} />
        <Card.Content>
        <p >{food.name}</p>
         </Card.Content>
      </div>
    </Card>
  )
}
export default FoodItem;
