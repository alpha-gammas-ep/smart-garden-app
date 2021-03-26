import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './Home.js';
import Settings from './Settings.js';
import Calendar from './Calendar.js';
import Pots from './Pots.js';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'leaf'
                        : 'leaf-outline';
                } else if (route.name === 'Pots') {
                    iconName = focused 
                        ? 'color-fill'
                        : 'color-fill-outline';
                } else if (route.name === 'Calendar') {
                    iconName = focused 
                        ? 'calendar'
                        : 'calendar-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused 
                        ? 'settings'
                        : 'settings-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
                activeTintColor: '#669850',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Pots" component={Pots}/>
            <Tab.Screen name="Calendar" component={Calendar}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    );
}
  
export default Tabs;