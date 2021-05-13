// import { BookState } from '@interfaces/book';
import { ReduxAction } from '@interfaces/redux';

import { actions } from './actions';

const initialState = {
  books: [],
  book: {}
};

const reducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case actions.CALL_ALL_BOOK:
      return {
        ...state,
        books: action.payload
      };
    case actions.SET_BOOK:
      return {
        ...state,
        book: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
