import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import placeholder from '@assets/img_book_placeholder.png';
import { actionCreators } from '@redux/books/actions';

// import { Book } from '@interfaces/book';

import styles from './styles';
import { useDispatch } from 'react-redux';

interface BookI {
  data: {
    title: string;
    imageUrl?: string;
    author: string;
    id: boolean;
  };
}

function BookItem({ data }: BookI) {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actionCreators.setBook({ data }));
    navigation.navigate('BOOK', { title: data.title, id: data.id });
  };

  return (
    <TouchableOpacity style={styles.div} onPress={handleClick}>
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
