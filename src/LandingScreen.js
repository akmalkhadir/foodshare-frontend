import React from 'react'
import { Button } from 'semantic-ui-react'

const LandingScreen = () => {
  return (

    <div>
      <div className='ui fluid container'>
        <h2 className='ui centered header'>Share your food App!</h2>
        <h3 className='ui centered header'>
        Carrot cake chupa chups sweet chocolate biscuit gummies dessert candy halvah. Muffin tiramisu lollipop jelly beans wafer sweet roll pie candy canes. Lemon drops danish marshmallow soufflé ice cream cake.
        </h3>
        <div align='center'>
          <Button content='Share Food' primary />
          <Button content='Search Food' secondary />
        </div>
      </div>
    </div>

  )
}

export default LandingScreen
