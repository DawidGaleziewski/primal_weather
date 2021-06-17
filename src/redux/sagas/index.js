import {all} from 'redux-saga/effects';

// Sagas
import SelectedRegionDataSagas from '@Redux/sagas/selectedRegionData/selectedRegionData';

export default function* rootSaga(){
    yield all([...SelectedRegionDataSagas]);
}