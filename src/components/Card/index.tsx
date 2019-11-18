import React from 'react'
import './Card.css';
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
        className={'card'}
        style={{
          width: `${(card.duration * itemWidth) - 2}px`,
          left: `${card.begin * itemWidth + 9}px`,
          borderBottom: `3px solid ${card.color}`
        }}
      >
        <div className={'cardTitle'}>{card.title}</div>
        <div className={'cardNote'}>{card.note}</div>
        <div className={'cardTime'}>
          <div
          className={'cardTimeValue'}
          style={{
            color: card.color
          }}>
            {(parseInt(String(card.begin / 2))) + 9 + ":" + ((card.begin % 2) ? "30" : "00")}
          </div>
        </div>
      </div> : null
  )
}