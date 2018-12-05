import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


export default class NavBar extends Component {
    state = {}

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        if (name === `foods`) {
            this.props.foods()
        } else {
            this.props.createFood()
        }
    }

    render() {
        const { activeItem } = this.state

        return <Menu stackable>
            <Menu.Item>
              <img src="https://banner2.kisspng.com/20180403/zbq/kisspng-beer-vegetarian-cuisine-hamburger-japanese-cuisine-food-icon-5ac32bc1e0cf45.3177800615227401619208.jpg" />
            </Menu.Item>

            <Menu.Item name="foods" active={activeItem === "foods"} onClick={this.handleItemClick}>
              Find Foods
            </Menu.Item>

            <Menu.Item name="share" active={activeItem === "share"} onClick={this.handleItemClick}>
              Share Food
            </Menu.Item>
          </Menu>;
    }
}