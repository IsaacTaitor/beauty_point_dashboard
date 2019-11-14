import React from 'react'
import { connect } from "react-redux";

import Card from './Card'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import TimeLinePlace from './TimeLinePlace'

const mapStateToProps = (state: any) => ({
  cardPosition: state.Position.cardPosition
});

function renderPlace(i, cardPosition) {
  return (
    <div key={i} style={{ width: '75px', height: '86px'}}>
      <TimeLinePlace x={i}>
        {renderPiece(i, cardPosition)}
      </TimeLinePlace>
    </div>
  )
}

function renderPiece(x, [cardX]) {
  if (x === cardX) {
    return null// <Card />
  }
}


function TimeLine(props) {
  const squares = []
  for (let i = 0; i < 18; i++) {
    squares.push(renderPlace(i, props.cardPosition))
  }

  return (
    <div
      style={{
        width: document.documentElement.clientWidth - 15,
        height: document.documentElement.clientHeight - 20,
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <DndProvider backend={HTML5Backend}>
        {squares}
        <Card cardPosition={props.cardPosition}/>
      </DndProvider>
    </div>

  )
}

export default connect(mapStateToProps)(TimeLine)