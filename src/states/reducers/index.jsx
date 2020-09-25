import { combineReducers } from "redux";
import configReducer from "./config.reducer";
import sortReducer from "./sortReducer.reducer";

export const rootReducer = combineReducers({
  config: configReducer,
  sorting: sortReducer,
});
