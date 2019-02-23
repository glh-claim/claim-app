import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	SafeAreaView,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class ReviewScreen extends Component
{
	static navigationOptions = {
		header: null,
		gesturesEnabled: false,
	};

	constructor()
	{
		super();
	}

	renderButtons() {
		return(
			<View style = {{justifyContent: 'flex-end', flex: 1}}>
				<TouchableOpacity style = {{height: 50, backgroundColor: 'white', marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.navigate("summary")}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', textAlign: 'center', fontSize: 16}}>Submit</Text>
				</TouchableOpacity>
				<TouchableOpacity style = {{height: 50, backgroundColor: 'white', marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', textAlign: 'center', fontSize: 16}}>Go Back</Text>
				</TouchableOpacity>
			</View>
		);
	}

	renderClaims() {
		return(
			<View>
			</View>
		);
	}

	render()
	{
		return(
			<SafeAreaView style = {styles.container}>
				<View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 24, fontWeight: '500'}}>Review</Text>
				</View>
				{this.renderClaims()}
				{this.renderButtons()}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ebecf0',
	},
});
