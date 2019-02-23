import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	SafeAreaView,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class EvidenceScreen extends Component
{
	static navigationOptions = {
		header: null,
		gesturesEnabled: false,
	};

	constructor()
	{
		super();
	}

	renderButton() {
		return(
			<View style = {{flex: 1, justifyContent: 'flex-end'}}>
				<TouchableOpacity style = {{height: 50, backgroundColor: 'lightgray', marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.navigate("evidence")}>
					<Text>Continue</Text>
				</TouchableOpacity>
				<TouchableOpacity style = {{height: 50, backgroundColor: 'lightgray', marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
					<Text>Go Back</Text>
				</TouchableOpacity>
			</View>
		);
	}

	render()
	{
		return(
			<SafeAreaView style = {styles.container}>
				<View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
					<Text style = {{fontFamily: 'Avenir Next', color: 'white', fontSize: 24, fontWeight: '500'}}>
						Upload Evidence
					</Text>
					<Text style = {{fontFamily: 'Avenir Next', color: 'lightgray', fontSize: 14, fontWeight: '500', textAlign: 'center', paddingHorizontal: 50}}>
						Upload relevant documents or photos to support your claim
					</Text>
				</View>
				{this.renderButton()}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2c2c2c',
	},
});
