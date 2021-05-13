import { actions } from './actions';
import Api from '@services/BookService';
export const apiGetBook = () => {
  return async dispatch => {
    try {
      const response = await Api.getBooks();
      console.log(response);
      if (response.ok) {
        dispatch({
          type: actions.CALL_ALL_BOOK,
          payload: response.data
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
