import { all, fork } from 'redux-saga/effects';

import citiesSaga from './../../modules/Register/redux/saga/GetCitiesSaga';

function* rootSaga() {
  yield all([fork(citiesSaga)]);
}

export default rootSaga;
