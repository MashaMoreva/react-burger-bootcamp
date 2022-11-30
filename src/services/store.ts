import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { compose, createStore, applyMiddleware } from 'redux';
import { wsUrl } from "../utils/constants";
import { wsActions } from "./actions/websockets";
import { socketMiddleware } from "./middleware/socket-middleware";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions))) ;
  export const store = createStore(rootReducer, enhancer);


