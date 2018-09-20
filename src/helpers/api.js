import axios from 'axios';

export const URL = 'http://job.nekrasovka.ru/search';

export const XMLHttpRequest = (query, filter) => {
  return axios.post(URL, { name: query, book_type: filter });
};
