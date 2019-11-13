import React from 'react'
import { ItemTypes } from '../Constants'
import { useDrag } from 'react-dnd'

function Card() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.Card },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
        width: "90%",
        height: "90%",
        border: "4px solid black"
      }}
    >
      Test
    </div>
  )
}

export default Card