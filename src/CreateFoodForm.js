import React, { Component } from 'react'
import { Form, Input, TextArea, Checkbox } from 'semantic-ui-react'

class CreateFoodForm extends Component {
  render () {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='Food Name' placeholder='Food Name' />
          <Form.Field control={TextArea} label='Description' placeholder='Description' />
        </Form.Group>

        <Form.Group>
          <label>Dietary Options</label>
          <Form.Field control={Checkbox} label='Vegetarian' value='vegetarian' placeholder='Description' />
          <Form.Field control={Checkbox} label='Vegetarian' value='vegetarian' placeholder='Description' />
          <Form.Field control={Checkbox} label='Vegetarian' value='vegetarian' placeholder='Description' />
          <Form.Field control={Checkbox} label='Vegetarian' value='vegetarian' placeholder='Description' />
          <Form.Field control={Checkbox} label='Vegetarian' value='vegetarian' placeholder='Description' />
          <Form.Field control={Checkbox} label='Vegetarian' value='vegetarian' placeholder='Description' />
          <Form.Field control={Checkbox} label='Vegetarian' value='vegetarian' placeholder='Description' />

        </Form.Group>
      </Form>
    )
  }
}

export default CreateFoodForm
