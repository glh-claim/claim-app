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
import AirlineScreen from './src/AirlineScreen.js';
import SpecificAirlineScreen from './src/SpecificAirlineScreen.js';
import EvidenceScreen from './src/EvidenceScreen.js';
import SummaryScreen from './src/SummaryScreen.js';

global.globalTitle = "";
global.globalIcon = "";
global.globalType = "";

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
	airline: {
      screen: AirlineScreen
  	},
	specificAirline: {
      screen: SpecificAirlineScreen
  	},
	evidence: {
      screen: EvidenceScreen
  	},
	summary: {
      screen: SummaryScreen
  	},
  });

const App = createAppContainer(RootStack);

export default App;
