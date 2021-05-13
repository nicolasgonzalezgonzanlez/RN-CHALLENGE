import BookService from '@services/BookService';

export const actions = {
  // TODO: Complete redux book actions
  CALL_ALL_BOOK: 'CALL_ALL_BOOK'
} as const;

export const actionCreators = {
  //use redux-thunks for the dispatch actions
  getBooks: async () => {}
};

export default actionCreators;
