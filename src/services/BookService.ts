import { BOOKS_MOCK } from '@constants/mockBooks';

export default {
  getBooks: () => {
    console.log(BOOKS_MOCK);
    // TODO: Complete => Return a new promise with BOOKS_MOCK and ok: true
    return new Promise((resolve, reject) => {
      try {
        resolve({ ok: true, data: BOOKS_MOCK });
      } catch (err) {
        reject(err);
      }
    });
  }
};
