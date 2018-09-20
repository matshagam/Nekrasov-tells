import { GET_ERRORS, GET_SUCCESS, GET_BOOKS } from '../actions/types';

export const initialState = {
  books: [],
  loading: false,
  error: ''
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.books,
        loading: action.loading
      };

    case GET_ERRORS:
      return {
        ...state,
        error: action.error
      };

    case GET_SUCCESS:
      return {
        ...state,
        loading: action.loading
      };

    default:
      return state;
  }
};
