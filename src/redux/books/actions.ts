import BookService from '@services/BookService';

export const actions = {
  // TODO: Complete redux book actions
  CALL_ALL_BOOK: 'CALL_ALL_BOOK',
  SET_BOOK: 'SET_BOOK'
} as const;

export const actionCreators = {
  //use redux-thunks for the dispatch actions
  setBook: ({ data }) => {
    return {
      type: actions.SET_BOOK,
      payload: data
    };
  }
};

export default actionCreators;
