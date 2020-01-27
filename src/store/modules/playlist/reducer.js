import produce from 'immer';

import * as types from './types';

const INITIAL_STATE = {
  disclaimer: '',
  emptyPlaylistTxt: 'Não há videos em sua playlist no momento.',
  playlist: []
};

export default function playlist(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.PUSH_VIDEO: {
        if (
          !!state.playlist.find(
            video => video.id.videoId === action.video.id.videoId
          )
        ) {
          draft.disclaimer =
            'Este vídeo já foi inserido na playlist. Por favor, escolha outro.';
          break;
        }
        draft.disclaimer = '';
        draft.playlist.push(action.video);
        break;
      }

      case types.REMOVE_VIDEO: {
        draft.disclaimer = '';
        draft.playlist = state.playlist.filter(
          video => video.id.videoId !== action.videoId
        );
        break;
      }

      default:
        break;
    }
  });
}
