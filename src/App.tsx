import React, { Component } from 'react';
import { store } from "./store/store";
import { Provider } from "react-redux";
import TimeLine from './components/TimeLine'

class App extends Component<any, any> {
	render() {
		return (
			<Provider store={store}>
				<TimeLine />
			</Provider>
		)
	}
}

export default App;
