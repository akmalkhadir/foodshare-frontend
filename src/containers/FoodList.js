import React from 'react'

const FoodList = (props) => {
    const {foodList} = props
    return (
        <div >
            <h1>Food List</h1>

            {
                foodList.map(
                    f => <p1>hello</p1>
                    // <div>
                    //     <p>f.name</p>
                    //     <p>f.description</p>
                    //     <p>f.location</p>
                    //     <p>f.quantity</p>
                    // </div>
                )
            }
        </div>
    )
}

export default FoodList