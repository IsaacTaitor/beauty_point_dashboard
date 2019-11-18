import { Dispatch } from "redux";
export const MOVE = "Move";

export const movecard = (id: number, toX: number) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch({ type: MOVE, payload: { id, begin: toX } });
    };
};