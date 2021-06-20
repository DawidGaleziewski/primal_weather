import { call, put, takeLatest, fork } from "redux-saga/effects";

// Requests
import * as api from "@Redux/sagas/api/index";

// Redux
import {
  fetchData,
  setData,
  fetchError,
} from "@Redux/features/regionsToCompare/regionsToCompare";

// # 1 Workers
function* regionsToCompareWorker(action) {
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
