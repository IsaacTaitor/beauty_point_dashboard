import React from 'react'
import { connect } from "react-redux";

import Place from './Place'
import { movecard } from '../store/card/cardAction'
import { ItemTypes } from '../constants'
import { useDrop } from 'react-dnd'

const mapDispatchToProps = {
	movecard
}

function TimeLinePlace({ x, children, movecard }) {
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.Card,
		canDrop: () => true,
		drop: () => movecard(x),
		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	})

	return (
		<div
			ref={drop}
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
			}}
		>
			<Place>{children}</Place>
			{isOver && (
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						height: '100%',
						width: '100%',
						zIndex: 1,
						opacity: 0.5,
						backgroundColor: 'yellow',
					}}
				/>
			)}
		</div>
  )
}

export default connect(null, mapDispatchToProps)(TimeLinePlace)