import axios from 'axios';
import { URL } from '../helpers/functions';
import { GET_BOOKS } from './types';

export const getBooks = (query, filter) => dispatch => {
  axios
    .post(URL, { name: query, book_type: filter })
    .then(response => {
      dispatch({
        type: GET_BOOKS,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};
