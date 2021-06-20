import {all} from 'redux-saga/effects';

// Sagas
import SelectedRegionDataSagas from '@Redux/sagas/selectedRegionData/selectedRegionData';
import RegionsToCompareSaga from '@Redux/sagas/regionsToCompare/regionsToCompare';


export default function* rootSaga(){
    yield all([...SelectedRegionDataSagas, ...RegionsToCompareSaga]);
}