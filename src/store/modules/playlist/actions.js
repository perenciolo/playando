import * as types from './types';

export const pushVideo = video => ({
  type: types.PUSH_VIDEO,
  video
});

export const removeVideo = videoId => ({
  type: types.REMOVE_VIDEO,
  videoId
});

export const emptyDisclaimer = () => ({
  type: types.EMPTY_DISCLAIMER
});
