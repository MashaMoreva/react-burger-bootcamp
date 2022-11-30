import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS
} from "../constants/constants";
import { TUnionWsAction } from "../actions/interfaces";
import { TOrder } from "../types/types";

type TInitialState = {
    wsConnection: boolean,
    orders: Array<TOrder> | []
}

export const initialState: TInitialState = {
    wsConnection: false,
    orders: []
}

export const wsReducer = (state = initialState, action: TUnionWsAction): TInitialState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS: {
            return {
                ...state,
                wsConnection: true
            };
        }
        case WS_CONNECTION_ERROR: {
            return {
                ...state,
                wsConnection: false
            };
        }
        case WS_CONNECTION_CLOSED: {
            return {
                ...state,
                wsConnection: false
            };
        }
        case WS_GET_ORDERS: {
            return {
                ...state,
                orders: action.payload.orders
                //   state.orders.length < 10
                //     ? [...state.orders, ...action.payload.orders]
                //     : [...state.orders],
                //     total: action.payload.total,
                //     totalToday: action.payload.totalToday

            };
        }
        default:
            return state
    }
}
