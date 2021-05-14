import React, { useEffect } from 'react';
import { Text, FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetBook } from '@redux/books/thunks';

//components
import BookItem from './components/BookItem';

function Library() {
  const { books } = useSelector((state: any) => state.book);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetBook());
  }, []);

  return (
    <SafeAreaView>
      {books && books.length > 0 ? (
        <FlatList
          data={books}
          renderItem={({ item }) => <BookItem data={item} key={item.id} />}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text>Aun no hay data</Text>
      )}
    </SafeAreaView>
  );
}

export default Library;
