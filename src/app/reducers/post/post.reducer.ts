// import { Action } from '@ngrx/store';
// import { type } from 'os';
import { Post } from './post';
import * as PostActions from './post.action';

export type Action = PostActions.All;

const defaultState: Post = {
  text: 'Hello, I am triet!',
  likes: 0,
};

const newState = (state: Post, newData: Post) => {
  return Object.assign({}, state, newData);
};

export function PostReducer(state: Post = defaultState, action: Action) {
  // console.log({ action, state });
  let likes;
  let text;
  switch (action.type) {
    case PostActions.EDIT_TEXT:
      text = action?.payload.text || '';
      return newState(state, { text });
    case PostActions.UP_VOTE:
      likes = state?.likes || 0;
      return newState(state, { likes: likes + 1 });
    case PostActions.DOWN_VOTE:
      likes = state?.likes || 0;
      return newState(state, { likes: likes - 1 });
    case PostActions.RESET_VOTE:
      return defaultState;
    default:
      return state;
  }
}
