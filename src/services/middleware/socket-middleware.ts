import { Middleware } from "redux";
import { getCookie } from "../../utils/сookies";
import { IWsActions } from "../actions/interfaces";

export const socketMiddleware = (wsUrl: string, wsActions: IWsActions): Middleware => {
    return (store) => {
        let socket: WebSocket | null = null;
        return (next) => (action) => {
            const { dispatch, getState } = store;
            const { type, payload } = action;
            const { wsInit, wsUser, onOpen, onClose, onError, onOrders } = wsActions;
            const token = getCookie('access')
            if (type === wsInit) {
                socket = new WebSocket(`${wsUrl}/all`);
            } else if (type === wsUser && token) {
                socket = new WebSocket(`${wsUrl}?token=${token.split("Bearer ")[1]}`);
            }
            if (socket) {
                socket.onopen = () => {
                    dispatch({ type: onOpen });
                };
                socket.onerror = () => {
                    dispatch({ type: onError });
                };
                socket.onmessage = (evt) => {
                    const { data } = evt;
                    const parsedData = JSON.parse(data);
                    const { success } = parsedData;
                    success && dispatch({ type: onOrders, payload: parsedData });
                };
                socket.onclose = () => {
                    dispatch({ type: onClose })
                }
            }

            next(action);
        };
    };
};
