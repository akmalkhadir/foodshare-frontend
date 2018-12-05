import React from 'react'
import {Card, Image, Button} from 'semantic-ui-react'

const ReserveFoodPage = ({ selectedFood, handleSubmit }) => {
  const startDate = new Date(selectedFood.start_time)
  const endDate = new Date(selectedFood.end_time)
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
  return (
    <Card fluid centered>
      <Card.Content>
        <Image floated='right' size='large' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>{selectedFood.name}</Card.Header>
        <Card.Description>
          <p>Description: {selectedFood.description}</p>
          <p>Location: {selectedFood.location}</p>
          <p>Quantity available: {selectedFood.quantity}</p>
          <p>Available from: {startDate.toLocaleDateString(undefined, options)} to {endDate.toLocaleDateString(undefined, options)} </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui buttons'>
          <Button basic color='green' onClick={handleSubmit}>
            Reserve
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default ReserveFoodPage
