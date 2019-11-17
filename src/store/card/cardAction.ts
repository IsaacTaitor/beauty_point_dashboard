import { Dispatch } from "redux";

export const movecard = (id: number, toX: number) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch({ type: "Move", payload: { id, begin: toX } });
    };
};