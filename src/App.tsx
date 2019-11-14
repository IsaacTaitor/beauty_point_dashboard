import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import TimeLine from './components/TimeLine'
import { observe } from './components/DB'

const initialState = {
	cardPosition: [],
};

function Position(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}



const store = createStore(combineReducers({
	Position
}), applyMiddleware(logger, thunk));

class App extends Component<any, any> {
	render() {
		return (
			<Provider store={store}>

				<div style={{ width: document.documentElement.clientWidth - 15, height: document.documentElement.clientHeight - 20 }}>
					{<TimeLine cardPosition={[0]} />}
				</div>
			</Provider>
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
