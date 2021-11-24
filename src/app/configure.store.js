import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
import posts from './posts.slices';
import comments from './comments.slices';
import categories from './categories.slices';

const rootReducer = combineReducers({
  // reducers go here
  comments,
  posts,
  categories,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
