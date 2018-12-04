import React, { Component } from 'react'
import { Form, Input, TextArea, Checkbox, Button } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

class CreateFoodForm extends Component {

  state = {
    food: {
      "name": "",
      "description": "",
      "location": "",
      "quantity": 0,
      "vegetarian": false,
      "vegan": false,
      "gluten_free": false,
      "nut_free": false,
      "seafood_free": false,
      "halal": false,
      "kosher": false,
      "start_time": '',
      "end_time": '',
      "producer_id": 1
    }
  }

  
  handleSubmit (food) {
    fetch('http://localhost:3001/v1/foods', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({food: food})
    }).then(resp => resp.json())

  }


  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      food: { ...this.state.food, [name]: value }
    });
  }

  handleCheckBoxChange = (e, data) => {
    const value = data.checked
    const name = data.name

    this.setState({
      food: { ...this.state.food, [name]: value }
    });
  }

  handleChangeEnd = (date) => {
    console.log(date)
    this.setState({
      food: { ...this.state.food, end_time: date }
    })
  }

  handleChangeStart = (date) => {
    console.log(date)
    this.setState({
      food: { ...this.state.food, start_time: date }
    })
  }

  render() {
    const { vegetarian, vegan, gluten_free, nut_free, seafood_free, halal, kosher, start_time, end_time } = this.state.food
    return (
      <Form widths='equal'>
        <Form.Field control={Input} label='Food Name' name='name' placeholder='Food Name' onChange={this.handleInputChange} />
        <Form.Field control={TextArea} label='Description' name='description' placeholder='Description' onChange={this.handleInputChange} />
        <Form.Field control={Input} label='Pick-up Location' name='location' placeholder='Pick-up Location' onChange={this.handleInputChange} />
        <Form.Field control={Input} label='Quantity Available' name='quantity' placeholder='Quantity Available' onChange={this.handleInputChange} />
        <label><strong>Dietary Options</strong></label>
        <Form.Group fluid='true'>
          <Form.Field toggle control={Checkbox} label='Vegetarian' name='vegetarian' checked={vegetarian} onChange={this.handleCheckBoxChange} />
          <Form.Field toggle control={Checkbox} label='Vegan' name='vegan' checked={vegan} onChange={this.handleCheckBoxChange} />
          <Form.Field toggle control={Checkbox} label='Gluten Free' name='gluten_free' checked={gluten_free} onChange={this.handleCheckBoxChange} />
          <Form.Field toggle control={Checkbox} label='Contains Nut?' name='nut_free' checked={nut_free} onChange={this.handleCheckBoxChange} />
          <Form.Field toggle control={Checkbox} label='Contains Seafood?' name='seafood_free' checked={seafood_free} onChange={this.handleCheckBoxChange} />
          <Form.Field toggle control={Checkbox} label='Halal' name='halal' checked={halal} onChange={this.handleCheckBoxChange} />
          <Form.Field toggle control={Checkbox} label='Kosher' name='kosher' checked={kosher} onChange={this.handleCheckBoxChange} />
        </Form.Group>
        <label><strong>Pick-Up Availability </strong></label>
        <Form.Group>
          <DatePicker
            selected={start_time}
            selectsStart
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="Time"
            startDate={start_time}
            endDate={end_time}
            onChange={this.handleChangeStart}
          />
          <span>until</span>
          <DatePicker
            selected={end_time}
            selectsEnd
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="Time"
            startDate={start_time}
            endDate={end_time}
            onChange={this.handleChangeEnd}
          />
        </Form.Group>
        <Button onClick={() => this.handleSubmit(this.state.food)} type='submit'>Share Food</Button>
      </Form>
    )
  }
}

export default CreateFoodForm
