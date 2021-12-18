import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import { rootSaga } from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
