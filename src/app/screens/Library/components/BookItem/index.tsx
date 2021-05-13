import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import placeholder from '@assets/img_book_placeholder.png';

// import { Book } from '@interfaces/book';

import styles from './styles';

interface BookI {
  // TODO: Complete
  data: {
    title: string;
    imageUrl?: string;
    author: string;
    id: boolean;
  };
}

function BookItem({ data }: BookI) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.div}
      onPress={() =>
        navigation.navigate('BOOK', { title: data.title, id: data.id })
      }>
      <Image
        source={data.imageUrl ? { uri: data.imageUrl } : placeholder}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subtitle}>{data.author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
