import { all } from "redux-saga/effects";

// Sagas
import SelectedRegionDataSagas from "@Redux/sagas/selectedRegionData/selectedRegionData";
import RegionsToCompareSaga from "@Redux/sagas/regionsToCompare/regionsToCompare";

/**
 * Root saga combining all watchers. Looking for any actions that should be handled async and influance the redux state
 */
export default function* rootSaga() {
  yield all([...SelectedRegionDataSagas, ...RegionsToCompareSaga]);
}
