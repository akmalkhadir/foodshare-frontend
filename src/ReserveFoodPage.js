import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const ReserveFoodPage = ({ selectedFood }) => {
  return (
    <Card fluid centered>
      <Card.Content>
        <Image floated='right' size='large' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>{selectedFood.name}</Card.Header>
        <Card.Description>
          <p>Description: {selectedFood.description}</p>
          <p>Location: {selectedFood.location}</p>
          <p>Quantity Available: {selectedFood.quantity}</p>
          <p>Available from: {selectedFood.start_time}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui buttons'>
          <Button basic color='green'>
                          Approve
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}
export default ReserveFoodPage
