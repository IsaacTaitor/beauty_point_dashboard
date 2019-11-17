interface IcardList {
    [id: string]: {
        begin: number; // 1 = 30 min
        duration: number
        id: string;
    }
}

const initialState: IcardList = {
	"ag33g4": {
        begin: 0,
        duration: 4,
        id: "ag33g4"
    },
    "fegrdr": {
        begin: 6,
        duration: 2,
        id: "fegrdr"
    }
};

export function card(state = initialState, action) {
	switch (action.type) {
        case "Move": {
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    begin: action.payload.begin
                }
            };
        };
		default:
			return state;
	}
}
