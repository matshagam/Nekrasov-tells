import axios from 'axios';
import { URL } from '../helpers/api';
import { GET_BOOKS, GET_ERRORS, GET_SUCCESS } from './types';

export const getBooks = (query, filter) => dispatch => {
  axios
    .post(URL, { name: query, book_type: filter })
    .then(response => {
      if (response.status !== 200) {
        throw Error(response.statusText);
      }

      dispatch({
        type: GET_SUCCESS,
        loading: false
      });

      return response;
    })
    .then(response =>
      dispatch({
        type: GET_BOOKS,
        books: response.data,
        loading: true
      })
    )
    .catch(error =>
      dispatch({
        type: GET_ERRORS,
        loading: false,
        error: error
      })
    );
};
