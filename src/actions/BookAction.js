import axios from 'axios';
import { URL } from '../helpers/functions';

export const GET_BOOKS = 'GET_BOOKS';

export const getBooks = () => dispatch => {
  axios
    .post(URL, { name: '', book_type: '' })
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
