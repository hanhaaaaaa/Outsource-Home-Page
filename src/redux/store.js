import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import rootSaga from './root-sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;
