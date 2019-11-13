import React from 'react'
import Card from './Card'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import TimeLineSquare from './TimeLinePlace'

function renderPlace(i, cardPosition) {
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <TimeLineSquare x={i}>
        {renderPiece(i, cardPosition)}
      </TimeLineSquare>
    </div>
  )
}

function renderPiece(x, [cardX, cardY]) {
  if (x === cardX) {
    return <Card />
  }
}

export default function TimeLine({ cardPosition }: any) {
    const squares = []
    for (let i = 0; i < 8; i++) {
        squares.push(renderPlace(i, cardPosition))
    }

    return (
       <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >
             <DndProvider backend={HTML5Backend}>
            {squares}
            </DndProvider>
        </div>

    )
}