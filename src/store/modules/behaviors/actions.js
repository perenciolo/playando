import * as types from './types';

export const showModal = () => ({
  type: types.SHOW_MODAL
});

export const showLoading = () => ({
  type: types.IS_LOADING
});

export const hideModal = () => ({
  type: types.HIDE_MODAL
});

export const hideLoading = () => ({
  type: types.HIDE_LOADING
});
