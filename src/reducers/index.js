import { combineReducers } from 'redux';

import { booksReducer } from './booksReducer';
import { filterReducer } from './filterReducer';
import { viewReducer } from './viewReducer';
import { searchReducer } from './searchReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
  listView: viewReducer,
  search: searchReducer
});

export default rootReducer;
