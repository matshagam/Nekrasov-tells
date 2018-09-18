import { LIST_VIEW } from '../actions/types';

export const changeView = boolean => {
  return {
    type: LIST_VIEW,
    payload: boolean === false ? true : false
  };
};
