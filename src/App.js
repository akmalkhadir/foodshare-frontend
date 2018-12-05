import React, {Component} from 'react'
import FoodPage from './FoodPage';
import CreateFoodPage from './CreateFoodPage';
import NavBar from './NavBar';


class App extends Component {

  state = {
    foods: [],
    selectedFood: null,
    page: `foods`,
    reservedFood: []
  }

  componentDidMount() {
    fetch(`http://localhost:3001/v1/foods`)
      .then(resp => resp.json())
      .then(foods => this.setState({foods}))

    fetch('http://localhost:3001/v1/consumers/3')
      .then(resp => resp.json())
      .then(reservedFood => this.setState({reservedFood:reservedFood.foods}))
  }

  createFood = () => {

  }

  reserveFood = () => {
      fetch('http://localhost:3001/v1/reservations', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          food_id: this.state.selectedFood.id,
          consumer_id: 3
        })
      }).then(resp => resp.json())
  }

  foodCardClickHandler = (food) => {
    // console.log(`you have just clicked a food item ${food.name}`)
    this.setState({selectedFood: food})
  }

  setPageToFoods = () => {
    this.setState({page: `foods`})
    this.setState({selectedFood: null})
  }

  setPageToCreateFood = () => {
    this.setState({page: `create`})
    this.setState({selectedFood: null})
  }

  reservedFoodClickHandler = () => {
    console.log('Hello')
  }


  render() {
    const {page, foods, selectedFood, reservedFood} = this.state
    const {foodCardClickHandler, setPageToCreateFood, setPageToFoods, reserveFood, reservedFoodClickHandler} =  this
    return (
      <div className='App'>
        <NavBar createFood={setPageToCreateFood} foods={setPageToFoods} />
          { page === `foods` 
            ? <FoodPage foods={foods} foodCardClickHandler={foodCardClickHandler} selectedFood={selectedFood} reservedFood={reservedFood} reserveFood={reserveFood} reservedFoodClickHandler={reservedFoodClickHandler} />
            : <CreateFoodPage />
          }
        </div>
    )
  }
}

export default App
