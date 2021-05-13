import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View, Image } from 'react-native';
import placeholder from '@assets/img_book_placeholder.png';
import styles from './styles';

function Book() {
  const { book } = useSelector(store => store.book);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={book.imageUrl ? { uri: book.imageUrl } : placeholder}
          style={styles.image}
        />
        <View style={styles.containerTexts}>
          <Text style={styles.title}>{book.title} </Text>
          <Text style={styles.subtitle}>{book.author}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Book;
