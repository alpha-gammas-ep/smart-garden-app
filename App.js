import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './components/WelcomeScreen.js';
import Home from './components/Home.js';
import Settings from './components/Settings.js';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                />
                <Stack.Screen 
                    name="Home"
                    component={Home}
                />
                <Stack.Screen 
                    name="Settings"
                    component={Settings}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}