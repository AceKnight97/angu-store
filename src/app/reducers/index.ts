import { ActionReducerMap } from '@ngrx/store';
import { AuthInterface } from './auth/auth';
import { AuthReducer } from './auth/auth.reducer';
import { Post } from './post/post';
import { PostReducer } from './post/post.reducer';
import { SimpleReducer } from './simple/simple.reducer';

export interface AppState {
  message: string;
  post: Post;
  auth: AuthInterface;
}

export const reducers: ActionReducerMap<AppState, any> = {
  message: SimpleReducer,
  post: PostReducer,
  auth: AuthReducer,
};
