import React from 'react'
import { connect } from "react-redux";

import Card from './Card'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import TimeLinePlace from './TimeLinePlace'

const mapStateToProps = (state: any) => ({
  cardPosition: state.Position.cardPosition
});

function renderPlace(i) {
  return (
    <div key={i} style={{ width: '75px', height: '86px'}}>
      <TimeLinePlace x={i}/>
    </div>
  )
}

function TimeLine(props) {
  const squares = []
  for (let i = 0; i < 18; i++) {
    squares.push(renderPlace(i))
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