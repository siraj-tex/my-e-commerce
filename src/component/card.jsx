import React from 'react'

function Card({ title = 'Card Title', desc = 'This is a simple card component.', image = '/src/assets/image.png' }) {
  return (
    <div className='card'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Card
