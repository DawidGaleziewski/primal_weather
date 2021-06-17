import { call, put, select, takeLatest, fork } from 'redux-saga/effects';

// Requests
import * as api from '@Redux/sagas/api/index';

// Redux
import {fetchData, setData, fetchError} from '@Redux/features/selectedRegionData/selectedRegionData';

// # 1 Workers
function* selectedRegionDataWorker(action){
    try {
        const {payload: {query, days}} = action
        const {data} = yield call(api.getWeather, query, days);
        yield put(setData({data}))
    } catch(error){
        console.log(error);
        yield put(fetchError())
    }
}

// # 2 Watchers
function* watchSelectedRegion(){
    yield takeLatest(fetchData.type, selectedRegionDataWorker)
}

const SelectedRegionDataSaga = [fork(watchSelectedRegion)];

export default SelectedRegionDataSaga;