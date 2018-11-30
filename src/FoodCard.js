import React from 'react'
import { Card } from 'semantic-ui-react'

const FoodCard = ({ food }) => {
  return (

    <Card
      image={food.url}
      header={food.name}
      meta={food.name}
      description={food.description}
    />

  )
}

export default FoodCard
