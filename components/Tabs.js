import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Octicons } from '@expo/vector-icons';

import Home from './Home.js';
import Settings from './Settings.js';
import Statistics from './Statistics.js';
import Pots from './Pots.js';
import Controls from './Controls.js';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Statistics') {
                    iconName = 'leaf';
                } else if (route.name === 'Pots') {
                    iconName = 'color-fill'
                } else if (route.name === 'Home') {
                    iconName = 'calendar'
                } else if (route.name === 'Controls') {
                    iconName = 'settings'
                    return <Octicons name={iconName} size={size} color={color} />
                } else if (route.name === 'Settings') {
                    iconName = 'settings'
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
                activeTintColor: '#669850',
                inactiveTintColor: 'gray',
                activeBackgroundColor: '#d4f0c7',
                
            }}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Pots" component={Pots}/>
            <Tab.Screen name="Statistics" component={Statistics}/>
            <Tab.Screen name="Controls" component={Controls}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    );
}
  
export default Tabs;