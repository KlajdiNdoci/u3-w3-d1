import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import favouriteJobs from "../reducers/favouriteJobs";
import searchedJobs from "../reducers/searchedJobs";

const rootReducer = combineReducers({
  jobsList: searchedJobs,
  favouriteList: favouriteJobs,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
