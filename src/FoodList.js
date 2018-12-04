import React from 'react'
import FoodCard from './FoodCard'

const FoodList = ({foods, foodCardClickHandler}) => {
  return (
    foods.map(
      food =>
        <FoodCard
          key={food.id}
          food={food}
          foodCardClickHandler={foodCardClickHandler} />
    )
  )
}

export default FoodList
