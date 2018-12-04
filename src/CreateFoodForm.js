import React, { Component } from 'react'
import { Form, Input, TextArea, Checkbox, Button } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

class CreateFoodForm extends Component {

  state = {
    "name": "rice",
    "description": "white rice",
    "location": "131 Finsbury Pavement, London EC2A 1NT, UK",
    "quantity": 5,
    "vegetarian": true,
    "vegan": true,
    "gluten_free": false,
    "nut_free": false,
    "seafood_free": false,
    "halal": true,
    "kosher": false,
    "start_time": '',
    "end_time": ''
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleChangeEnd = (date) => {
    console.log(date)
    this.setState({ end_time: date })
  }

  handleChangeStart = (date) => {
    console.log(date)
    this.setState({ start_time: date })
  }

  render() {
    return (
      <Form widths='equal'>
        <Form.Field control={Input} label='Food Name' name='name' placeholder='Food Name' onChange={this.handleInputChange} />
        <Form.Field control={TextArea} label='Description' name='description' placeholder='Description' onChange={this.handleInputChange} />
        <Form.Field control={Input} label='Pick-up Location' name='location' placeholder='Pick-up Location' onChange={this.handleInputChange} />
        <Form.Field control={Input} label='Quantity Available' name='quantity' placeholder='Quantity Available' onChange={this.handleInputChange} />
        <label><strong>Dietary Options</strong></label>
        <Form.Group fluid='true'>
          <Form.Field control={Checkbox} label='Vegetarian' name='vegetarian' onChange={this.handleInputChange} />
          <Form.Field control={Checkbox} label='Vegan' name='vegan' onChange={this.handleInputChange} />
          <Form.Field control={Checkbox} label='Gluten Free' name='gluten_free' onChange={this.handleInputChange} />
          <Form.Field control={Checkbox} label='Contains Nut?' name='nut_free' onChange={this.handleInputChange} />
          <Form.Field control={Checkbox} label='Contains Seafood?' name='seafood_free' onChange={this.handleInputChange} />
          <Form.Field control={Checkbox} label='Halal' name='halal' onChange={this.handleInputChange} />
          <Form.Field control={Checkbox} label='Kosher' name='kosher' onChange={this.handleInputChange} />
        </Form.Group>
        <label><strong>Pick-Up Availability </strong></label>
        <Form.Group>
          <DatePicker
            selected={this.state.start_time}
            selectsStart
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="Time"
            startDate={this.state.start_time}
            endDate={this.state.end_time}
            onChange={this.handleChangeStart}
          />
          <span>until</span>
          <DatePicker
            selected={this.state.end_time}
            selectsEnd
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="Time"
            startDate={this.state.start_time}
            endDate={this.state.end_time}
            onChange={this.handleChangeEnd}
          />
        </Form.Group>
        <Button type='submit'>Share Food</Button>
      </Form>
    )
  }
}

export default CreateFoodForm
