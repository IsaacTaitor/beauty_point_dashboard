import React, { useState } from 'react'
import { ItemTypes } from '../constants'
import { useDrag } from 'react-dnd'

const itemCount = 4;

function Card({ cardPosition }) {
  const [count, setCount] = useState(0);
  const [use, setUse] = useState(0);

  const [{ isDragging }, drag, drag2] = useDrag({
    item: { type: ItemTypes.Card },
    end: () => {
      setUse(count)
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    }),
  })
  const onDragEnd = (e) => {
    let rect = e.target.getBoundingClientRect();
    setCount(parseInt(String((e.clientX - rect.left) / 71.5)));
  }
  return (
    !isDragging ?
      <div
        onMouseDown={
          onDragEnd
        }
        ref={drag}
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move',
          position: "absolute",
          width: `${71.5 * itemCount}px`,
          height: "86px",
          left: `${cardPosition[0] * 71.5 + 9 - 71.5 * use}px`,
          zIndex: 100,
          background: "#FFFFFF",
          boxShadow: "0px 5px 15px rgba(56, 62, 68, 0.125057)",
          borderRadius: "5px"
        }}
      >
      </div> : null
  )
}

export default (Card)