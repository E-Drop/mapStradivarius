import { combineReducers } from 'redux';

import markers from './markersReducer';

export default () => combineReducers({
    markers,
});