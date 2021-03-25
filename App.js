import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './routes.js'

export default function App() {
  return (
    <Routes />
  );
}

AppRegistry.registerComponent('App', () => App);