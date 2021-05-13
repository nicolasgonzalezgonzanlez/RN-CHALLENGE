import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetBook } from '@redux/books/thunks';
import { ScrollView } from 'react-native-gesture-handler';

//components
import BookItem from './components/BookItem';
import { Book } from '@interfaces/book';

function Library() {
  const { books } = useSelector((state: any) => state.book);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetBook());
  }, []);

  return (
    <ScrollView>
      {books && books.length > 0 ? (
        <>
          {books.map((book: Book) => {
            return <BookItem data={book} key={book.id} />;
          })}
        </>
      ) : (
        <Text>Aun no hay datos</Text>
      )}
    </ScrollView>
  );
}

export default Library;
