
import * as React from 'react';
import Messaging from './Messaging';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function MessagingTab() {
    return (
        <Tab.Navigator shifting={true} activeColor="#fff">
            <Tab.Screen 
                name="Received"> 
                {() => <Messaging inbox="received" />}
            </Tab.Screen>
            <Tab.Screen 
                name="Sent">
                {() => <Messaging inbox="sent" />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}