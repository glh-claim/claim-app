import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	SafeAreaView,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';

export default class EvidenceScreen extends Component
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

	renderItems() {
		return(
			<View style = {{flex: 1, paddingHorizontal: 50, backgroundColor: 'lightgray', marginVertical: 25}}>
				<Dropdown
					baseColor={"gray"}
					label='Type of Document'
					data={this.state.data}/>
					<TouchableOpacity style = {{height: 50, backgroundColor: 'gray', marginBottom: 15, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => Alert.alert("Upload button")}>
						<Text style = {{color: 'white', fontFamily: 'Avenir Next', fontWeight: '500'}}>Upload</Text>
					</TouchableOpacity>
			</View>
		);
	}

	renderButton() {
		return(
			<View style = {{justifyContent: 'flex-end'}}>
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
				{this.renderItems()}
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
