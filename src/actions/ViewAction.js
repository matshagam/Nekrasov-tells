import { LIST_VIEW } from '../actions/types';

export const changeView = boolean => dispatch => {
  dispatch({
    type: LIST_VIEW,
    payload: boolean
  });
};
