/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { LOGIN } from './constants';

export const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
    default:
      return state;
  }
}

export default loginReducer;
