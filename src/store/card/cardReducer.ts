interface IcardList {
    [id: string]: {
        begin: number; // 1 = 30 min
        duration: number
        id: string;
        title: string;
        note: string;
        color: string;
    }
}

const initialState: IcardList = {
	"ag33g4": {
        begin: 0,
        duration: 3,
        id: "ag33g4",
        title: "Song Bao",
        note: "Haircut standart",
        color: "#8D8D8D"
    },
    "fegrdr": {
        begin: 4,
        duration: 4,
        id: "fegrdr",
        title: "Elston Gullan",
        note: "Haircut standart",
        color: "#8D43FF"
    },
    "4g4w3t": {
        begin: 8,
        duration: 4,
        id: "4g4w3t",
        title: "Marti Valencia",
        note: "Haircut standart",
        color: "#8D43FF"
    },
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
