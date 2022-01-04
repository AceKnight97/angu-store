import { Action } from '@ngrx/store';
import { AuthInterface } from './auth';

export const GET_AUTH = '[AuthInterface] Set';
export const UPDATE_AUTH = '[AuthInterface] Update';
export const CLEAR_AUTH = '[AuthInterface] Clear';

export class GetAuth implements Action {
  readonly type = GET_AUTH;
}
export class UpdateAuth implements Action {
  readonly type = UPDATE_AUTH;
  constructor(public payload: AuthInterface) {}
}
export class ClearAuth implements Action {
  readonly type = CLEAR_AUTH;
}
export type All = GetAuth | UpdateAuth | ClearAuth;
