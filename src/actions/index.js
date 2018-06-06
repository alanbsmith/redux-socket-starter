import * as types from './ActionTypes';

export function connectSocket() {
  return { type: types.CONNECT };
}

export function disconnectSocket() {
  return { type: types.DISCONNECT };
}

export function upvote(data) {
  return { type: types.UPVOTE, data };
}

export function updateScore(data) {
  return { type: types.UPDATE_SCORE, data };
}
