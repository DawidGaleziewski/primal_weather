import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@Redux/sagas';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'


// Reducers
import selectedRegionDataReducer from '@Redux/features/selectedRegionData/selectedRegionData'

// Types
import {SliceState} from '@Redux/features/selectedRegionData/selectedRegionData';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory()

const reducer = combineReducers({
    selectedRegionData: selectedRegionDataReducer
})

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store