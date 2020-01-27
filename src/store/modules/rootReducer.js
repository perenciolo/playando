import { combineReducers } from 'redux';

import behaviors from './behaviors/reducer';
import playlist from './playlist/reducer';
import videoList from './videoList/reducer';

export default combineReducers({ behaviors, playlist, videoList });
