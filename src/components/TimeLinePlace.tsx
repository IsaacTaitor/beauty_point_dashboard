import React from 'react'
import { connect } from "react-redux";

import { movecard } from '../store/card/cardAction'
import { useDrop } from 'react-dnd'

const mapStateToProps = (state: any) => ({
	cardList: state.card
});

const mapDispatchToProps = {
	movecard
}

function TimeLinePlace({ x, movecard, cardList }: any) {
	const [{ isOver }, drop] = useDrop({
		accept: Object.values(cardList).map((card: any) => card.id),
		canDrop: (item) => {
			/* if (cardList[item.type].begin === x) {
				return false
			} */
			return true
		},
		drop: item => {
			movecard(item.type, x)
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
				border: "1px dashed #D7D9DC",
				width: '100%',
				height: '100%',
			}}
		>
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