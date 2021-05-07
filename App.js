import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import ContractingInfo from './components/Information/ContractingInfo';
import NewMessage from './components/Messaging/NewMessage'
import Messaging from './components/Messaging/Messaging'
import MessagingTab from './components/Messaging/MessagingTab'

import message_data from './assets/message_data.json'
import {storeObject} from './util/Cache'

const Stack = createStackNavigator();

export default function App() {

  storeObject('Messages', message_data)

  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen} 
          options={{
            title: 'On-Campus Housing',
            headerStyle: {
              backgroundColor: '#002E5D',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Stack.Screen
          name="MessagingTab" 
          component={MessagingTab} />
        <Stack.Screen 
          name="ContractingInfo" 
          component={ContractingInfo}
          options={{
            title: 'Waiting List Info',
            headerStyle: {
              backgroundColor: '#002E5D',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen
          name="Messaging"
          component={Messaging} />
        <Stack.Screen
          name="NewMessage"
          component={NewMessage}
          options={{
            title: 'New Message',
            headerStyle: {
              backgroundColor: '#002E5D',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

