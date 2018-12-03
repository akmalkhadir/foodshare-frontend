import React from 'react';

import FoodList from './FoodList';
import FoodForm from './FoodForm';

import '../styling/App.css';
import Nav from '../components/Nav';
import FoodCard from '../components/FoodCard';

class App extends React.Component {

  state = {
    foodList: [],
    reserver: undefined
  }

  componentDidMount() {
    fetch('http://localhost:3000/v1/foods')
      .then(resp => resp.json())
      .then(foods => this.setState({foods}))
  }

  isReserver = () => {
    this.setState({
      reserver: true
    })
    console.log(`user type is ${this.state.reserver}`)
  }

  isSharer = () => {
    this.setState({
      reserver: false
    })
    console.log(`user type is ${this.state.reserver}`)
  }

  render() {
    console.log(`Render user type is ${this.state.reserver}`)
    const {foodList, reserver} = this.state
    return (
      <div className="App">
        <Nav />
        {
          reserver === undefined
            ? <div>
              <h1>Share your food App!</h1>
              <h3>Carrot cake chupa chups sweet chocolate biscuit gummies dessert candy
                  halvah. Muffin tiramisu lollipop jelly beans wafer sweet roll pie candy canes.
                  Lemon drops danish marshmallow soufflé ice cream cake.</h3>
              <button onClick={() => this.isSharer()}>Share Food</button>
              <button onClick={() => this.isReserver()}>Reserve Food</button>
            </div>
            : null
        }
        {
          reserver === false
            ? <div><FoodList foodList={foodList} /></div>
            : <div><FoodForm /></div>
        }
      </div>
    );
  }
}

export default App;