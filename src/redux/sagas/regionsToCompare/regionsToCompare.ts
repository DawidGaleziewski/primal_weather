import * as Eff from "redux-saga/effects"; // Fix due to to saga issue with TS: https://stackoverflow.com/questions/58502778/how-to-repair-a-ts2769-no-overload-matches-this-call/58814026#58814026

// Requests
import * as api from "@Redux/sagas/api/index";

// Redux
import {
  fetchData,
  setData,
  fetchError,
} from "@Redux/features/regionsToCompare/regionsToCompare";

const call: any = Eff.call;
const put: any = Eff.put;
const takeLatest: any = Eff.takeLatest;
const fork: any = Eff.fork;

type RegionsAction = {
  payload: {
    query: string;
    days: string | number;
  };
};

// # 1 Workers
function* regionsToCompareWorker(action: RegionsAction) {
  try {
    const {
      payload: { query, days },
    } = action;
    const {
      data: {
        forecast: { forecastday },
      },
    } = yield call(api.getWeather, query, days);
    yield put(setData({ data: forecastday }));
  } catch (error) {
    console.log(error);
    yield put(fetchError());
  }
}

// # 2 Watchers
function* watchregionsToCompare() {
  yield takeLatest(fetchData.type, regionsToCompareWorker);
}

const RegionsToCompareSaga = [fork(watchregionsToCompare)];

export default RegionsToCompareSaga;
