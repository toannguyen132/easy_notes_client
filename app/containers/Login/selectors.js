import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.get('login', initialState);

/**
 * Other specific selectors
 */
export const selectEmail = () =>
  createSelector(selectLoginDomain, substate => substate.email);

export const selectPassword = () =>
  createSelector(selectLoginDomain, substate => substate.password);

/**
 * Default selector used by Login
 */

const makeSelectLogin = () =>
  createSelector(selectLoginDomain, substate => substate);

export default makeSelectLogin;
export { selectLoginDomain };
