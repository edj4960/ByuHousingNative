
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import InformationTab from './Information/InformationTab';
import AccountTab from './Account/AccountTab';
import MessagingTab from './Messaging/MessagingTab';
import CalendarTab from './Calendar/CalendarTab';

import contracts_data from '../assets/contracts_data.json'
import petitions_data from '../assets/petitions_data.json'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


export default function HomeScreen() {

    return (
    <Tab.Navigator shifting={true} activeColor="#fff">
        <Tab.Screen 
            name="Account" 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                    )}}>
            {() => <AccountTab contracts={contracts_data} petitions={petitions_data} />}
        </Tab.Screen>
        <Tab.Screen 
            name="Calendar" 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="calendar" color={color} size={size} />
                    )}}> 
            {() => <CalendarTab />}
        </Tab.Screen>
        <Tab.Screen 
            name="Information" 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="information" color={color} size={size} />
                    )}}> 
            {() => <InformationTab />}
        </Tab.Screen>
        <Tab.Screen
            name="Messages"
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="email" color={color} size={size} />
                )
            }}> 
            {() => <MessagingTab />}
        </Tab.Screen>
    </Tab.Navigator>
    )
}