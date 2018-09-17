import { combineReducers } from 'redux';
import { booksReducer } from './books';
import { listReducer } from './list';

export const rootReducer = combineReducers({
  books: booksReducer,
  list: listReducer
});
