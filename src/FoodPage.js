import React, { Component } from 'react'
import FoodList from './FoodList'
import ReserveFoodPage from './ReserveFoodPage'

class FoodPage extends Component {
  render () {
    const { foods, foodCardClickHandler, selectedFood } = this.props
    return (
      <div>
        { selectedFood === null
          ? <FoodList
            foods={foods}
            foodCardClickHandler={foodCardClickHandler}
          />
          : <ReserveFoodPage selectedFood={selectedFood} />
        }
      </div>
    )
  }
}

export default FoodPage
