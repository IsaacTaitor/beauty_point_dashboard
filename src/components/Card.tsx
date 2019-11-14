import React, { useState } from 'react'
import { ItemTypes } from '../constants'
import { useDrag } from 'react-dnd'

function Card({ cardPosition }) {
  const [count, setCount] = useState(0);
  const [use, setUse] = useState(0);
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.Card },
    end: () => { setUse(count) },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  return (
    !isDragging ?
      <div
        ref={drag}
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move',
          position: "absolute",
          width: "143px",
          height: "86px",
          left: `${cardPosition[0] * 75 + 9 - 75 * use}px`,
          zIndex: 100,
          background: "#FFFFFF",
          boxShadow: "0px 5px 15px rgba(56, 62, 68, 0.125057)",
          borderRadius: "5px"
        }}
      >
        <div onMouseDown={() => { setCount(0) }} style={{ height: "100%", width: "50%", backgroundColor: "blue", display: "inline-block" }}></div>
        <div onMouseDown={() => { setCount(1) }} style={{ height: "100%", width: "50%", backgroundColor: "red", display: "inline-block" }}></div>
      </div> : null
  )
}

export default Card