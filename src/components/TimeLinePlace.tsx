import React from 'react'
import { connect } from "react-redux";

import Place from './Place'
import { movecard } from '../store/card/cardAction'
import { useDrop } from 'react-dnd'

const mapStateToProps = (state: any) => ({
	cardList: state.card
});

const mapDispatchToProps = {
	movecard
}

function TimeLinePlace({ x, count, movecard, cardList }: any) {
	const [{ isOver }, drop] = useDrop({
		accept: Object.values(cardList).map((card: any) => card.id),
		canDrop: () => true,
		drop: item => {
			movecard(item.type, x - count)
		},
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
			<Place></Place>
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

export default connect(mapStateToProps, mapDispatchToProps)(TimeLinePlace)