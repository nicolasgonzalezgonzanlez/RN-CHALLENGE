import React, { useEffect } from 'react';
import { Text, View, ImageBackground, StyleSheet, Image } from 'react-native';

function Book({ route }) {
  // TODO: Complete

  useEffect(() => {
    // TODO: Complete
    console.log('hola soy la nueva navegacion');
    console.log(route);
  }, []);

  return (
    // TODO: Make a list of BookItems
    <View>
      <Text>HOla soy el {route.params.title} </Text>
    </View>
  );
}

export default Book;
