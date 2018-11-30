import React from 'react'
import FoodCard from './FoodCard'
import { CardGroup } from 'semantic-ui-react'

const FoodList = ({ foods }) => {
  return (
    <CardGroup>
      {foods.map(food => <FoodCard food={food} />)}
    </CardGroup>
  )
}

export default FoodList
