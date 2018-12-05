import React, { Component } from 'react'
import FoodList from './FoodList'

class FoodPage extends Component {
  render () {
    const { foods, foodCardClickHandler } = this.props
    return (
      <div>
        <h1>Food List</h1>
        <FoodList
          foods={foods}
          foodCardClickHandler={foodCardClickHandler}
        />
      </div>
    )
  }
}

export default FoodPage
