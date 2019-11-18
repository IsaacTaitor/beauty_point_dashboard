import React, { Component } from 'react';
import { store } from "../../store/store";
import { Provider } from "react-redux";
import TimeLine from '../../components/TimeLine';
import Header from '../../components/Header';
import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'></link>
			<Header />
			<div className={"body"}>
				<div style={{ height: "123px" }}>
					<div style={{ paddingTop: "55px", paddingLeft: "75%", width: "277px" }}>
						<button className={"button"} style={{ marginRight: 13 }}>
							<span className={"buttonText"}>SCHEDULE</span>
						</button>
						<button className={"button"}>
							<span className={"buttonText"}>SELL GOODS</span>
						</button>
					</div>
				</div>
				<TimeLine />
			</div>
		</Provider >
	)
}

export default App;
