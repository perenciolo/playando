import produce from 'immer';

import * as types from './types';

const INITIAL_STATE = {
  videos: []
};

export default function videoList(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.GET_VIDEOS_SUCCESS: {
        draft.videos = action.videos;
        break;
      }

      case types.GET_VIDEOS_FAILURE: {
        console.tron.log(action.error);
        break;
      }

      default: {
        break;
      }
    }
  });
}
