import { call, put, all, takeLatest } from 'redux-saga/effects';

import api, { params } from '../../../services/api';
import * as types from './types';

import { getVideosSuccess, getVideosFailure } from './actions';
import { hideLoading, showModal } from '../behaviors/actions';
import { pushVideo } from '../playlist/actions';

function* findVideos({ term, directlyUrl }) {
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

    if (directlyUrl) {
      if (response.data.items) {
        yield put(pushVideo(response.data.items[0]));
      }
    } else {
      yield put(getVideosSuccess(response.data.items));
      yield put(showModal());
    }

    yield put(hideLoading());
  } catch (error) {
    yield put(getVideosFailure(error));
    yield put(hideLoading());
  }
}

export default all([takeLatest(types.GET_VIDEOS_REQUEST, findVideos)]);
