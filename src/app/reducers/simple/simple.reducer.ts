import { Action } from '@ngrx/store';

export function SimpleReducer(state: string = 'Hello Triet!', action: Action) {
  // console.log({ action, state });
  switch (action.type) {
    case 'ABC':
      return (state = 'ABC');
    case '123':
      return (state = '123');
    default:
      return state;
  }
}
