import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];
// In future we can add more middlewares in it i.e. [logger, '...','...',]

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
