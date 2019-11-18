import React, { useState } from 'react'
import { connect } from "react-redux";

import Card from './Card'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import TimeLinePlace from './TimeLinePlace'

const mapStateToProps = (state: any) => ({
  cardList: state.card
});

function renderPlace(i: number, count: number) {
  return (
    <div key={i} style={{ width: '75px', height: '86px' }}>
      <TimeLinePlace x={i} count={count}/>
    </div>
  )
}

function TimeLine(props: any) {
  const [count, setCount] = useState(0);

  const squares = []
  for (let i = 0; i < 18; i++) {
    squares.push(renderPlace(i, count))
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
        {Object.values(props.cardList).map((card: any) => <Card key={card.id} card={card} setCount={setCount} />)}
      </DndProvider>
    </div>

  )
}

export default connect(mapStateToProps)(TimeLine)