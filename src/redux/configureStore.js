import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from '@Redux/sagas';

// Reducers
import selectedRegionDataReducer from '@Redux/features/selectedRegionData/selectedRegionData'

const reducer = combineReducers({
    selectedRegionData: selectedRegionDataReducer
})

const store = configureStore({
    reducer
})

export default store