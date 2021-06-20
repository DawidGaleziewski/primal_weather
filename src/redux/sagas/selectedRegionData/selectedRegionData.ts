import * as Eff from "redux-saga/effects"; // Fix due to to saga issue with TS: https://stackoverflow.com/questions/58502778/how-to-repair-a-ts2769-no-overload-matches-this-call/58814026#58814026

// Requests
import * as api from "@Redux/sagas/api/index";

// Redux
import {
  fetchData,
  setData,
  fetchError,
} from "@Redux/features/selectedRegionData/selectedRegionData";

const call: any = Eff.call;
const put: any = Eff.put;
const takeLatest: any = Eff.takeLatest;
const fork: any = Eff.fork;

type SelectedRegionAction = {
  payload: {
    query: string;
    days: string | number;
  };
};

// # 1 Workers
/**
 * Worker setting state after fetch request
 */
function* selectedRegionDataWorker(action: SelectedRegionAction) {
  try {
    const {
      payload: { query, days },
    } = action;
    const { data } = yield call(api.getWeather, query, days);
    yield put(setData({ data }));
  } catch (error) {
    console.log(error);
    yield put(fetchError());
  }
}

// # 2 Watchers
/**
 * Watcher for fetch redux actions
 */
function* watchSelectedRegion() {
  yield takeLatest(fetchData.type, selectedRegionDataWorker);
}

const SelectedRegionDataSaga = [fork(watchSelectedRegion)];

export default SelectedRegionDataSaga;
