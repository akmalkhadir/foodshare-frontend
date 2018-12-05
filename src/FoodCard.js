import React from 'react'
import { Card } from 'semantic-ui-react'
import Unsplash from 'unsplash-js'

const FoodCard = ({ food, foodCardClickHandler }) => {
  return (
    <Card
      image={food.url}
      header={food.name}
      description={food.description}
      onClick={() => foodCardClickHandler(food)}
    />
  )
}

export default FoodCard
