import * as types from './types';

export const getVideosRequest = (term, directlyUrl = false) => ({
  type: types.GET_VIDEOS_REQUEST,
  term,
  directlyUrl
});

export const getVideosSuccess = videos => ({
  type: types.GET_VIDEOS_SUCCESS,
  videos
});

export const getVideosFailure = error => ({
  type: types.GET_VIDEOS_FAILURE,
  error
});
