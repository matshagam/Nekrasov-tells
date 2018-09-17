import { GET_BOOKS } from '../actions/types';

export const initialState = {
  books: []
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: action.payload };

    default:
      return state;
  }
};
