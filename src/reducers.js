/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import { reducer as userFormReducer } from './pages/UserInfo/store';
import { reducer as selfAuthoritiesReducer } from './pages/SelfAuthorities/store'

// Initial routing state
const routeInitialState = {
  location: null,
};

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return Object.assign({}, state, { location: action.payload });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    userForm: userFormReducer,
    selfAuthorities: selfAuthoritiesReducer,
    ...injectedReducers,
  });
}
