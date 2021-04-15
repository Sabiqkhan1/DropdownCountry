import {combineReducers} from "redux";
import * as ReduxStates from './Reducers/';
const rootReducer = combineReducers({
  region:ReduxStates.Regions,
  countries:ReduxStates.countries,
});

export {rootReducer};