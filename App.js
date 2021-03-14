import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import GetInfo from './screens/getinfo';
import Description from './screens/description';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetInfo">
        <Stack.Screen
          name="GetInfo"
          component={GetInfo}
          options={{
            headerStyle: {
              backgroundColor: '#3944F7',
            },
            title: 'GitHub App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#FFF',
              fontWeight: 'bold',
            },
          }}></Stack.Screen>
          <Stack.Screen
          name="Description"
          component={Description}
          options={{
            headerStyle: {
              backgroundColor: '#3944F7',
            },
            title: 'GitHub App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#FFF',
              fontWeight: 'bold',
            },
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
