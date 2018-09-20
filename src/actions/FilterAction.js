import { CHANGE_FILTER } from './types';

export const changeFilter = filter => {
  return {
    type: CHANGE_FILTER,
    filter:
      filter === 'Везде'
        ? ''
        : filter === 'Книги'
          ? 1
          : filter === 'Периодика'
            ? 2
            : null
  };
};
