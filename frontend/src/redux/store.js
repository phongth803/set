import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { composeWithDevTools } from "@redux-devtools/extension";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, composeEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
