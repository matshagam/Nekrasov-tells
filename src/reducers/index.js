import { combineReducers } from 'redux';
import { booksReducer } from './books';
import { listReducer } from './list';

const rootReducer = combineReducers({
  books: booksReducer,
  list: listReducer
});

export default rootReducer;
