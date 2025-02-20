import React from 'react'

const Pizza = () => {
  return (
    <>
      <div className="pizza">
        <video autoPlay loop muted className="full-width-video">
            <source src="./src/assets/pizza.mp4" 
            type="video/mp4"
            />
        </video>
      </div>
    </>
  )
}

export default Pizza
