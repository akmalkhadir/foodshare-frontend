import React, {Component} from 'react'
import LandingScreen from './LandingScreen';
import FoodPage from './FoodPage';
import CreateFoodPage from './CreateFoodPage';
import ReserveFoodPage from './ReserveFoodPage';
import NavBar from './NavBar';


class App extends Component {

  state = {
    foods: [],
    selectedFood: null
  }

  url = 'http://localhost:3001/v1/'

  componentDidMount() {
    fetch(`http://localhost:3001/v1/foods`)
      .then(resp => resp.json())
      .then(foods => this.setState({foods}))
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
        <NavBar />
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
