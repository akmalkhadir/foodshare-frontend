import React from 'react';
import '../styling/App.css';

class App extends React.Component {

  state = {
    foods: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/v1/foods')
      .then(resp => resp.json())
      .then(foods => this.setState({foods}))
  }

  render() {
    // console.log(this.state)

    return (
      <div className="App">
        <h1>Share your food App!</h1>
        <h3>Carrot cake chupa chups sweet chocolate biscuit gummies dessert candy
            halvah. Muffin tiramisu lollipop jelly beans wafer sweet roll pie candy canes.
            Lemon drops danish marshmallow soufflé ice cream cake.</h3>
        <button>Share Food</button>
        <button>Reserve Food</button>
      </div>
    );
  }
}

export default App;
