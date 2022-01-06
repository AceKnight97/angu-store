// import { Action } from '@ngrx/store';
// import { type } from 'os';
import { AuthInterface } from './auth';
import * as AuthActions from './auth.action';

export type Action = AuthActions.All;

const defaultState: AuthInterface = {
  isSuccess: false,
};

const newState = (state: AuthInterface, newData: AuthInterface) => {
  return Object.assign({}, state, newData);
};

export function AuthReducer(
  state: AuthInterface = defaultState,
  action: Action
) {
  // console.log({ action, state });
  switch (action.type) {
    case AuthActions.GET_AUTH:
      return state;
    case AuthActions.UPDATE_AUTH:
      return newState(state, action?.payload);
    case AuthActions.CLEAR_AUTH:
      return defaultState;
    default:
      return state;
  }
}
