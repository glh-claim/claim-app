import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class ClaimScreen extends Component
{
	static navigationOptions = {
		header: null,
		gesturesEnabled: false,
	};

	constructor()
	{
		super();
	}

	render()
	{
		return(
			<View style = {styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text style = {{color: 'white', marginTop: 50}}>Claim Screen</Text>
                </TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2c2c2c',
	},
});
