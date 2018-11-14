import React from 'react'
import "./FoodItem.css"
import { Card, Icon, Image } from 'semantic-ui-react'



const FoodItem = ({food, clickHandler}) => {
  return (

    <Card className="card" onClick={() => clickHandler(food)}>

        <img className="img" src={food.image_url} />

        <p >{food.name}</p><br/>


    </Card>
  )
}
export default FoodItem;
