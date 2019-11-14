import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { Position } from "./card/cardReducer";

export const store = createStore(combineReducers({
	Position
}), applyMiddleware(logger, thunk));
