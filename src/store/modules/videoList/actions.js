import * as types from './types';

export const getVideosRequest = term => ({
  type: types.GET_VIDEOS_REQUEST,
  term
});

export const getVideosSuccess = videos => ({
  type: types.GET_VIDEOS_SUCCESS,
  videos
});

export const getVideosFailure = error => ({
  type: types.GET_VIDEOS_FAILURE,
  error
});
