import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { card } from "./card/cardReducer";

export const store = createStore(combineReducers({
	card
}), applyMiddleware(logger, thunk));
