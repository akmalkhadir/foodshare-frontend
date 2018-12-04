import React, {Component} from 'react'
import LandingScreen from './LandingScreen';
import FoodPage from './FoodPage';
import CreateFoodPage from './CreateFoodPage';
import ReserveFoodPage from './ReserveFoodPage';

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
    ],
    selectedFood: null
  }

  createFood = () => {

  }

  foodCardClickHandler = (food) => {
    // console.log(`you have just clicked a food item ${food.name}`)
    this.setState({selectedFood: food})
  }

  render() {
    const {foods, selectedFood} = this.state
    const {foodCardClickHandler} = this
    return (
      selectedFood ?
        <ReserveFoodPage selectedFood={selectedFood} /> :
        <div className='App'>
          <LandingScreen />
          <br />
          <hr />
          <FoodPage foods={foods} foodCardClickHandler={foodCardClickHandler} />
          <br />
          <hr />
          <CreateFoodPage />
        </div>
    )
  }
}

export default App
