import React, { Component } from 'react';
import {
	Alert,
	Linking,
	Platform,
	StyleSheet,
	Text,
	View,
	Dimensions,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './src/LoginScreen.js';
import PickScreen from './src/PickScreen.js';
import BrowseScreen from './src/BrowseScreen.js';
import ClaimScreen from './src/ClaimScreen.js';

const RootStack = createStackNavigator({
    login: {
      screen: LoginScreen
    },
    pick: {
      screen: PickScreen
  	},
	browse: {
      screen: BrowseScreen
  	},
	claim: {
      screen: ClaimScreen
  	},
  });

const App = createAppContainer(RootStack);

export default App;
