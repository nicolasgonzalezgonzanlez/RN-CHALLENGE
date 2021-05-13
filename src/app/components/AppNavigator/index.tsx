import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import Library from '@screens/Library';
import Book from '@screens/Book';
import { getSyntheticLeadingComments } from 'typescript';

const StackNavigator = createStackNavigator();

function AppNavigator() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name={Routes.LIBRARY}
        component={Library}
        options={{ title: 'Library' }}
      />
      <StackNavigator.Screen
        name={Routes.BOOK}
        component={Book}
        options={({ route }) => ({ title: route.params.title })}
      />
    </StackNavigator.Navigator>
  );
}

export default AppNavigator;
