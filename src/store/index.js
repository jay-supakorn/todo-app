// import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

// eslint-disable-next-line
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import main from "./reducers/index";
import rootSaga from "./sagas/index";

const persistConfig = {
  key: "priestMe",
  storage,
};

const reducer = combineReducers({
  main,
});

// eslint-disable-next-line
const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware, logger))
);

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

const action = (type) => store.dispatch({ type });

export { store, action, persistor };
