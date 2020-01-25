import { call, put, all, takeLatest } from 'redux-saga/effects';

import api, { params } from '../../../services/api';
import * as types from './types';
import { getVideosSuccess, getVideosFailure } from './actions';

function* findVideos({ term }) {
  try {
    const response = yield call(api.get, '/search', {
      params: {
        ...params,
        type: 'video',
        q: term
      }
    });

    if (!response || response.status !== 200 || !response.data.items) {
      throw new Error('Not found');
    }

    yield put(getVideosSuccess(response.data.items));
  } catch (error) {
    yield put(getVideosFailure(error));
  }
}

export default all([takeLatest(types.GET_VIDEOS_REQUEST, findVideos)]);
