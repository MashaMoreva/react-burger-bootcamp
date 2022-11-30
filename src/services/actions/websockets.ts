import {
    WS_CONNECTION_START,
    WS_CONNECTION_START_USER,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS
} from "../constants/constants";
import { TOrders } from "../types/types";
import {
    IWsConnectionStart,
    IWsConnectionStartUser,
    IWsConnectionSuccess,
    IWsConnectionError,
    IWsConnectionClosed,
    IWsGetOrders,
    IWsActions
} from "./interfaces";

export const wsConnectionStart = (): IWsConnectionStart => {
    return {
        type: WS_CONNECTION_START
    };
};

export const wsConnectionStartUser = (): IWsConnectionStartUser => {
    return {
        type: WS_CONNECTION_START_USER
    };
};

export const wsConnectionSuccess = (): IWsConnectionSuccess => {
    return {
        type: WS_CONNECTION_SUCCESS
    };
};

export const wsConnectionError = (): IWsConnectionError => {
    return {
        type: WS_CONNECTION_ERROR
    };
};

export const wsConnectionClosed = (): IWsConnectionClosed => {
    return {
        type: WS_CONNECTION_CLOSED
    };
};

export const wsGetOrderds = (payload: TOrders): IWsGetOrders => {
    return {
        type: WS_GET_ORDERS,
        payload
    };
};

export const wsActions: IWsActions = {
    wsInit: WS_CONNECTION_START,
    wsUser: WS_CONNECTION_START_USER,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onOrders: WS_GET_ORDERS
  };
