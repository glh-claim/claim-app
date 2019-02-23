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
						<View style = {{height: 125, width: 125, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 100}}>
							<Icon name="magnifying-glass" type="Entypo" style={{ fontSize: 90, color: "#00355f" }} />
						</View>
						<Text style = {{color: '#00355f', marginTop: 5, fontFamily: 'Avenir Next', fontSize: 16}}>Browse</Text>
					</TouchableOpacity>
				</View>
				<View style = {styles.half}>
					<TouchableOpacity style = {styles.halfButton} onPress={() => this.props.navigation.navigate("claim")}>
						<View style = {{height: 125, width: 125, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 100}}>
							<Icon name="exclamation" type="FontAwesome" style={{ fontSize: 90, color: "#00355f" }} />
						</View>
						<Text style = {{color: '#00355f', marginTop: 5, fontFamily: 'Avenir Next', fontSize: 16}}>Make a Claim</Text>
					</TouchableOpacity>
				</View>
				<View style = {styles.half}>
					<TouchableOpacity style = {styles.halfButton} onPress={() => this.props.navigation.navigate("review")}>
						<View style = {{height: 125, width: 125, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 100}}>
							<Icon name="rate-review" type="MaterialIcons" style={{ fontSize: 75, color: "#00355f" }} />
						</View>
						<Text style = {{color: '#00355f', marginTop: 5, fontFamily: 'Avenir Next', fontSize: 16}}>Review</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ebecf0',
		flexDirection: 'column',
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
