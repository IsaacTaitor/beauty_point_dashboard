import React, { useState } from 'react'
import { useDrag } from 'react-dnd'

const itemWidth = 75;

export default function Card({ card }) {
  const [count, setCount] = useState(0);
  const [use, setUse] = useState(0);

  const [{ isDragging }, drag, drag2] = useDrag({
    item: { type: card.id },
    end: () => {
      setUse(count)
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    }),
  })
  const onDragEnd = (e) => {
    let rect = e.target.getBoundingClientRect();
    setCount(parseInt(String((e.clientX - rect.left) / itemWidth)));
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
          width: `${card.duration * itemWidth}px`,
          height: "86px",
          left: `${card.begin * itemWidth + 9 - itemWidth * use}px`,
          zIndex: 100,
          background: "#FFFFFF",
          boxShadow: "0px 5px 15px rgba(56, 62, 68, 0.125057)",
          borderRadius: "5px"
        }}
      >
      </div> : null
  )
}