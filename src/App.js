import React, { Component } from 'react'
import LandingScreen from './LandingScreen';
import FoodPage from './FoodPage';

class App extends Component {

  state = {
    foods: [
      {
      id: 1,
      name: 'cake',
      description: 'cake cake cake cake cake cake Carrot cake chupa chups sweet chocolate biscuit gummies dessert candy halvah. Muffin tiramisu lollipop jelly beans wafer sweet roll pie candy canes. Lemon drops danish marshmallow soufflé ice cream cake.',
      url: 'https://www.caracaschronicles.com/wp-content/uploads/2013/03/16714-birthday-cake-760x580.jpg'
      },
      {
        id: 2,
        name: 'cake',
        description: 'cake cake cake cake cake cake Carrot cake chupa chups sweet chocolate biscuit gummies dessert candy halvah. Muffin tiramisu lollipop jelly beans wafer sweet roll pie candy canes. Lemon drops danish marshmallow soufflé ice cream cake.',
        url: 'https://www.caracaschronicles.com/wp-content/uploads/2013/03/16714-birthday-cake-760x580.jpg'
      },
      {
        id: 3,
        name: 'cake',
        description: 'cake cake cake cake cake cake Carrot cake chupa chups sweet chocolate biscuit gummies dessert candy halvah. Muffin tiramisu lollipop jelly beans wafer sweet roll pie candy canes. Lemon drops danish marshmallow soufflé ice cream cake.',
        url: 'https://www.caracaschronicles.com/wp-content/uploads/2013/03/16714-birthday-cake-760x580.jpg'
      },
      {
        id: 4,
        name: 'cake',
        description: 'cake cake cake cake cake cake Carrot cake chupa chups sweet chocolate biscuit gummies dessert candy halvah. Muffin tiramisu lollipop jelly beans wafer sweet roll pie candy canes. Lemon drops danish marshmallow soufflé ice cream cake.',
        url: 'https://www.caracaschronicles.com/wp-content/uploads/2013/03/16714-birthday-cake-760x580.jpg'
      }
    ]
  }

  render () {
    const { foods } =  this.state
    return (
      <div className='App'>
        <LandingScreen />
        <FoodPage foods={foods} />
      </div>
    )
  }
}

export default App
