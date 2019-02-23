import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	SafeAreaView,
	ScrollView,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';

var dummyText =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis. Non blandit massa enim nec dui. Turpis egestas pretium aenean pharetra magna ac placerat. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Lorem mollis aliquam ut porttitor leo a. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Auctor urna nunc id cursus metus. Tellus in metus vulputate eu scelerisque felis imperdiet. Neque viverra justo nec ultrices. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Quam elementum pulvinar etiam non quam. Scelerisque felis imperdiet proin fermentum. Facilisis mauris sit amet massa vitae tortor. Felis donec et odio pellentesque diam volutpat commodo sed egestas."

export default class SummaryScreen extends Component
{
	static navigationOptions = {
		header: null,
		gesturesEnabled: false,
	};

	constructor()
	{
		super();
		this.state = {
			data: [
				{ value: 'Receipt' },
				{ value: 'Ticket' },
				{ value: 'Identification' }
			]
		};
	}

	renderButton() {
		return(
			<View style = {{justifyContent: 'flex-end'}}>
				<TouchableOpacity style = {{height: 50, backgroundColor: 'lightgray', marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => Alert.alert("Ok")}>
					<Text>Submit</Text>
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
					<Text style = {{fontFamily: 'Avenir Next', color: 'white', fontSize: 24, fontWeight: '500'}}>Your Claim Letter</Text>
				</View>
				<ScrollView style ={{margin: 20, flex: 1, backgroundColor: 'lightgray', borderRadius: 10, padding: 10}}>
					<Text style = {{fontFamily: 'Avenir Next', fontSize: 12}}>{dummyText}</Text>
				</ScrollView>
				<View style = {{marginBottom: 20, marginHorizontal: 20,}}>
					<Text style = {{fontFamily: 'Avenir Next', color: 'white', fontSize: 14, fontWeight: '500'}}>Your Attachments</Text>
					<View style = {{flexDirection: 'row'}}>
						<View style = {{width: 120, height: 30, backgroundColor: 'gray', borderRadius: 100, marginTop: 5, marginRight: 10, justifyContent: 'center', alignItems: 'center'}}>
							<Text style = {{color: 'white', fontFamily: 'Avenir Next'}}>ticket.pdf</Text>
						</View>
						<View style = {{width: 120, height: 30, backgroundColor: 'gray', borderRadius: 100, marginTop: 5, marginRight: 10, justifyContent: 'center', alignItems: 'center'}}>
							<Text style = {{color: 'white', fontFamily: 'Avenir Next'}}>screenshot.jpg</Text>
						</View>
					</View>
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
