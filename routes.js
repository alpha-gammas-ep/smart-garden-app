import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import WelcomeScreen from './components/WelcomeScreen.js'
import Home from './components/Home.js'

const Routes = () => (
   <Router>
      <Scene key="root">
         <Scene key="WelcomeScreen" component={WelcomeScreen} title="WelcomeScreen" initial={true} />
         <Scene key="Home" component={Home} title="Home" />
      </Scene>
   </Router>
)

export default Routes;