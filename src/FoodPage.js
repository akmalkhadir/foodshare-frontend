import React, { Component } from 'react'
import { CardGroup, Header } from 'semantic-ui-react'

import FoodList from './FoodList'
import ReserveFoodPage from './ReserveFoodPage'
import ReservedFoodContainer from './ReservedFoodContainer'

class FoodPage extends Component {
  render () {
    const { foods, foodCardClickHandler, selectedFood, reservedFood } = this.props
    return (
      <div>
        { selectedFood === null
          ? <CardGroup>
            <FoodList
              foods={foods}
              foodCardClickHandler={foodCardClickHandler}
            />
          </CardGroup>
          : <ReserveFoodPage selectedFood={selectedFood} />
        }
        <Header as='h3' block>
          Your Reserved Foods
        </Header>
        <CardGroup>
          <ReservedFoodContainer foods={reservedFood} />
        </CardGroup>
      </div>
    )
  }
}

export default FoodPage
