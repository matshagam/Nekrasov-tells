export const initialState = {
  book: {
    title: 'название книги',
    description: 'описание',
    year: 'год издания',
    image: 'изображение обложки',
    author: 'имена авторов'
  }
};

export const booksReducer = (state = initialState) => {
  return state;
};
