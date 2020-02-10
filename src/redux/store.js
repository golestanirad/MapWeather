import { createStore, applyMiddleware, compose  } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
/// project files
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
//const middlewares = [sagaMiddleware, logger];
const middlewares = [sagaMiddleware, require('redux-immutable-state-invariant').default()];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
