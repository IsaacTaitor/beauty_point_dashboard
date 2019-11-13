import React from 'react'
import Place from './Place'
import { movecard } from './DB'
import { ItemTypes } from '../Constants'
import { useDrop } from 'react-dnd'

function TimeLinePlace({ x, children }) {
	const black = x % 2 === 1
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
			<Place black={black}>{children}</Place>
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

export default TimeLinePlace