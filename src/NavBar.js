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

        return (
            <Menu stackable>
                <Menu.Item>
                    <img src='https://react.semantic-ui.com/logo.png' />
                </Menu.Item>

                <Menu.Item
                    name='foods'
                    active={activeItem === 'foods'}
                    onClick={this.handleItemClick}
                >
                    Find Foods
        </Menu.Item>

                <Menu.Item
                    name='share'
                    active={activeItem === 'share'}
                    onClick={this.handleItemClick}
                >
                    Share Food
        </Menu.Item>
            </Menu>
        )
    }
}