import React from 'react'
import FoodCard from './FoodCard'

const ReservedFoodContainer = ({ foods }) => {
  return (
    foods.map(
      food =>
        <FoodCard
          key={food.id}
          food={food}
        />
    )
  )
}

export default ReservedFoodContainer
