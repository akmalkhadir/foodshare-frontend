import React, { Component } from 'react'
import FoodList from './FoodList'

class FoodPage extends Component {
  render () {
    const { foods } = this.props
    return (
      <div>
        <FoodList foods={foods} />
      </div>
    )
  }
}

export default FoodPage
