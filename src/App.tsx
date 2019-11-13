import React, { Component } from 'react';
import TimeLine from './components/TimeLine'
import { observe } from './components/DB'

class App extends Component<any, any> {
	state = {
		cardPosition: [0, 0]
	}
	render() {
		return (
			<div style={{ width: document.documentElement.clientWidth - 15, height: document.documentElement.clientHeight - 20 }}>
				{<TimeLine cardPosition={this.state.cardPosition} />}
			</div>
		)
	}

	componentDidMount() {
		observe((cardPosition) => {
			this.setState({
				cardPosition
			})
		})
	}
}

export default App;
