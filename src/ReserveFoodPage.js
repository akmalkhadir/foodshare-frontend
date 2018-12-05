import React from 'react'
import {Card, Image, Button} from 'semantic-ui-react'


class ReserveFoodPage extends React.Component {


  handleSubmit(selectedFood) {
    fetch('http://localhost:3000/v1/reservations', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        food_id: selectedFood.id,
        consumer_id: 1
      })
    }).then(resp => resp.json())

  }

  render() {
    const {selectedFood} = this.props
    return (
      <Card fluid centered>
        <Card.Content>
          <Image floated='right' size='large' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
          <Card.Header>{this.props.selectedFood.name}</Card.Header>
          <Card.Description>
            <p>Description: {this.props.selectedFood.description}</p>
            <p>Location: {this.props.selectedFood.location}</p>
            <p>Quantity Available: {this.props.selectedFood.quantity}</p>
            <p>Available from: {this.props.selectedFood.start_time}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui buttons'>
            <Button basic color='green' onClick={this.handleSubmit(selectedFood)}>
              Approve
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default ReserveFoodPage
