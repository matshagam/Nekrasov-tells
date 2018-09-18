import { combineReducers } from 'redux';

import { booksReducer } from './booksReducer';
import { filterReducer } from './filterReducer';
import { viewReducer } from './viewReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
  listView: viewReducer
});

export default rootReducer;
