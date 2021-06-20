import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "@Redux/sagas";
import { createBrowserHistory } from "history";

// Reducers
import selectedRegionDataReducer from "@Redux/features/selectedRegionData/selectedRegionData";
import regionsToCompareReducer from "@Redux/features/regionsToCompare/regionsToCompare";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const reducer = combineReducers({
  selectedRegionData: selectedRegionDataReducer,
  regionsToCompare: regionsToCompareReducer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

/**
 * Root of the redux store, including sagas
 */
export default store;
