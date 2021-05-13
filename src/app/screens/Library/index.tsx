import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetBook } from '@redux/books/thunks';
import { ScrollView } from 'react-native-gesture-handler';

import { LibraryI } from '@interfaces/book';
//components
import BookItem from './components/BookItem';

function Library() {
  const { books } = useSelector(state => state.book);

  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: Complete
    dispatch(apiGetBook());
    //dispatch(actionCreators.getBooks());
    console.log('cambios');
    console.log(books);
  }, []);

  return (
    <ScrollView>
      {books && books.length > 0 ? (
        <>
          {books.map(book => {
            return <BookItem data={book} key={book.id} />;
          })}
        </>
      ) : (
        <BookItem data=" np tmeme" />
      )}
    </ScrollView>
  );
}

export default Library;
