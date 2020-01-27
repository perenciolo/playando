import produce from 'immer';

import * as types from './types';

const INITIAL_STATE = {
  showDialog: false,
  isLoading: false
};

export default function behaviors(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.IS_LOADING:
        draft.isLoading = true;
        break;

      case types.HIDE_LOADING:
        draft.isLoading = false;
        break;

      case types.SHOW_MODAL:
        draft.showDialog = true;
        break;

      case types.HIDE_MODAL:
        draft.showDialog = false;
        break;

      default:
        break;
    }
  });
}
