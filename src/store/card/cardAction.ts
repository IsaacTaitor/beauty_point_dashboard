import { Dispatch } from "redux";

export const movecard = (toX: number) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch({type: "Move", payload: toX});
    };
};