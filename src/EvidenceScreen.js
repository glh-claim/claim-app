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
			],
			type: "",
		};
	}

	typeChanged(text) {
		this.setState({
			type: text,
		});
	}

	renderItems() {
		return(
			<View style = {{flex: 1}}>
				<View style = {{marginHorizontal: 40, marginBottom: 10}}>
					<Dropdown
					baseColor={"gray"}
					label='Type of Document'
					data={this.state.data}
					onChangeText={(text) => this.typeChanged(text)}/>
				</View>

				<TouchableOpacity style = {{height: 50, backgroundColor: (this.state.type && this.state.type.length > 1 ? 'white' : 'lightgray'), marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={(this.state.type && this.state.type.length > 1 ? () => Alert.alert("Upload Pressed") : () => Alert.alert("Please pick a document type"))}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', textAlign: 'center', fontSize: 16}}>Upload</Text>
				</TouchableOpacity>
			</View>
		);
	}

	renderButton() {
		return(
			<View style = {{justifyContent: 'flex-end'}}>
				<TouchableOpacity style = {{height: 50, backgroundColor: 'white', marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.navigate("summary")}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', textAlign: 'center', fontSize: 16}}>Prepare Claim</Text>
				</TouchableOpacity>
				<TouchableOpacity style = {{height: 50, backgroundColor: 'white', marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', textAlign: 'center', fontSize: 16}}>Go Back</Text>
				</TouchableOpacity>
			</View>
		);
	}

	render()
	{
		return(
			<SafeAreaView style = {styles.container}>
				<View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 24, fontWeight: '500'}}>
						Upload Evidence
					</Text>
					<Text style = {{fontFamily: 'Avenir Next', color: '#33447a', fontSize: 14, fontWeight: '500', textAlign: 'center', paddingHorizontal: 50}}>
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
		backgroundColor: '#ebecf0',
	},
});
