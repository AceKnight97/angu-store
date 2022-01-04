import { Action } from '@ngrx/store';
import { Post } from './post';

export const EDIT_TEXT = '[Post] Edit';
export const UP_VOTE = '[Post] Upvote';
export const DOWN_VOTE = '[Post] Downvote';
export const RESET_VOTE = '[Post] Reset';

export class EditText implements Action {
  readonly type = EDIT_TEXT;
  constructor(public payload: Post) {}
}
export class Upvote implements Action {
  readonly type = UP_VOTE;
  // constructor(public payload: string) {}
}
export class Downvote implements Action {
  readonly type = DOWN_VOTE;
  // constructor(public payload: string) {}
}
export class Reset implements Action {
  readonly type = RESET_VOTE;
  // constructor(public payload: string) {}
}

export type All = Upvote | Downvote | Reset | EditText;
