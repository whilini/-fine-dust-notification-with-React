import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { dustSlice } from './dustSlice';

const reducer = combineReducers({ dustSlice: dustSlice.reducer });

export default configureStore({
  reducer,
});
