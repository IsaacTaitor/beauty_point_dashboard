const initialState = {
	cardPosition: [0],
};

export function Position(state = initialState, action) {
	switch (action.type) {
        case "Move": {
            return {
                ...state,
                cardPosition: [action.payload]
            };
        };
		default:
			return state;
	}
}
