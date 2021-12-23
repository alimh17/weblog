import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { getUserAction } from "./action/getUserAction";
import { rootReducers } from "./reducers";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(
  rootReducers /* preloadedState, */,
  compose(enhancer)
);

store.dispatch(getUserAction());

export default store;
