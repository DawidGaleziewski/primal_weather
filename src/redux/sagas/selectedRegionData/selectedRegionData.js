import { call, put, select, takeLatest, fork } from 'redux-saga/effects';
// import {useHistory} from 'react-router-dom'
import { push } from 'react-router-redux'
import {history} from '@Router/MainRouter';

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
        push('/error-no-city-found')
    }
}

// # 2 Watchers
function* watchSelectedRegion(){
    yield takeLatest(fetchData.type, selectedRegionDataWorker)
}

const SelectedRegionDataSaga = [fork(watchSelectedRegion)];

export default SelectedRegionDataSaga;