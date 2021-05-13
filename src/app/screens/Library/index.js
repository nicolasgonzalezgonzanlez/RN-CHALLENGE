import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetBook } from '@redux/books/thunks';
import { actionCreators } from '@redux/books/actions';
import { ScrollView } from 'react-native-gesture-handler';

//import { Book } from '@interfaces/book';

import BookItem from './components/BookItem';
// import styles from './styles';

function Library() {
  // TODO: Complete

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
    // TODO: Make a list of BookItems
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
