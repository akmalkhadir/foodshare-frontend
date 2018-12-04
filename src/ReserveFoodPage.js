import React from 'react'

const reserveFoodPage = ({selectedFood}) => {
    return (
        <div>
            <div>Reserve Food Page</div>
            <div>{selectedFood.name}</div>
            <div>{selectedFood.description}</div>
            <div>{selectedFood.url}</div>
            <button>Reserve</button>
        </div>


    )
}
export default reserveFoodPage