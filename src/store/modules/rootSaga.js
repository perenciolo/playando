import { all } from 'redux-saga/effects';

import videoList from './videoList/sagas';

export default function* rootSaga() {
  return yield all([videoList]);
}
