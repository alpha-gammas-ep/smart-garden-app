import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home.js';
import Settings from './Settings.js';
import Calendar from './Calendar.js';
import Pots from './Pots.js';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Pots" component={Pots}/>
            <Tab.Screen name="Calendar" component={Calendar}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    );
}
  
export default Tabs;