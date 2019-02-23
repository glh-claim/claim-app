import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	SafeAreaView
} from 'react-native';
import { Icon } from "native-base";
import { StackActions, NavigationActions } from 'react-navigation';

export default class PickScreen extends Component
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
			<SafeAreaView style = {styles.container}>
				<View style = {styles.half}>
					<TouchableOpacity style = {styles.halfButton} onPress={() => this.props.navigation.navigate("browse")}>
						<View style = {{height: 100, justifyContent: 'center', alignItems: 'center'}}>
							<Icon name="magnifying-glass" type="Entypo" style={{ fontSize: 100, color: "white" }} />
						</View>
						<Text style = {{color: 'white'}}>Browse</Text>
					</TouchableOpacity>
				</View>
				<View style = {styles.half}>
					<TouchableOpacity style = {styles.halfButton} onPress={() => this.props.navigation.navigate("claim")}>
						<View style = {{height: 100, justifyContent: 'center', alignItems: 'center'}}>
							<Icon name="exclamation" type="FontAwesome" style={{ fontSize: 100, color: "white" }} />
						</View>
						<Text style = {{color: 'white'}}>Make a Claim</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2c2c2c',
		flexDirection: 'row',
	},
	half: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	halfButton: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});
