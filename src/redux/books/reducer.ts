// import { BookState } from '@interfaces/book';
import { ReduxAction } from '@interfaces/redux';

import { actions } from './actions';

const initialState = {
  books: []
};

const reducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case actions.CALL_ALL_BOOK:
      return {
        ...state,
        books: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
