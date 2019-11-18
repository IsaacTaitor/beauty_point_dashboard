import React, { useState } from 'react'
import { useDrag } from 'react-dnd'

const itemWidth = 75;

export default function Card({ card, setCount }: any) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: card.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    }),
  })
  const onMouseDown = (e: any) => {
    setCount(parseInt(String((e.clientX - e.target.getBoundingClientRect().left) / itemWidth)));
  }
  return (
    !isDragging ?
      <div
        onMouseDown={
          onMouseDown
        }
        ref={drag}
        style={{
          cursor: 'move',
          position: "absolute",
          width: `${(card.duration * itemWidth) - 2}px`,
          height: "86px",
          left: `${card.begin * itemWidth + 9}px`,
          background: "#FFFFFF",
          boxShadow: "0px 5px 15px rgba(56, 62, 68, 0.125057)",
          borderRadius: "5px",
          borderBottom: `3px solid ${card.color}`
        }}
      >
        <div
        style={{
          position: "absolute",
          height: "16px",
          left: "6.98%",
          top: "calc(50% - 16px/2 + 2px)",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 300,
          fontSize: "14px",
          lineHeight: "16px"
        }}>{card.title}</div>
        <div
        style={{
          position: "absolute",
          height: "13px",
          left: "6.98%",
          top: "calc(50% - 13px/2 + 19.5px)",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 300,
          fontSize: "11px",
          lineHeight: "13px",
          mixBlendMode: "normal",
          opacity: "0.4"
        }}>{card.note}</div>
        <div
        style={{
          position: "absolute",
          left: "14px",
          top: "14px"
        }}>
          <div
          style={{
            position: "absolute",
            height: "13px",
            left: "39.53%",
            top: "calc(50% - 13px/2)",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "11px",
            lineHeight: "13px",
            color: card.color
          }}>
            {(parseInt(String(card.begin / 2))) + 9 + ":" + ((card.begin % 2) ? "30" : "00")}
          </div>
        </div>
      </div> : null
  )
}