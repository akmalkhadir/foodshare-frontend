import React from 'react'
import FoodCard from './FoodCard'

const ReservedFoodContainer = ({ foods, foodCardClickHandler }) => {
  return (
    foods.map(
      food =>
        <FoodCard
          imgUrl={`https://source.unsplash.com/collection/1054947/480x480&sig${food.id}`}
          key={food.id}
          food={food}
          foodCardClickHandler={foodCardClickHandler}
        />
    )
  )
}

export default ReservedFoodContainer
