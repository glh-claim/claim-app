import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	FlatList,
	Dimensions,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default class BrowseScreen extends Component
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
				{name: 'test', icon: 'test2'},
				{name: 'test', icon: 'test2'},
				{name: 'test', icon: 'test2'},
				{name: 'test', icon: 'test2'},
				{name: 'test', icon: 'test2'},
			],
	    };
	}

	renderItem = ({item, index}) => {
		return (
			<View style = {{width: windowWidth/3, borderWidth: 2, height: windowWidth/3}}>
				<Text>{item.name}</Text>
			</View>
		);
	};

	render()
	{
		return(
			<View style = {styles.container}>
				<View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                	<Text style = {{fontFamily: 'Avenir Next', color: 'white', fontSize: 24, fontWeight: '500'}}>INDUSTRIES</Text>
				</View>
				<View>
					<FlatList
						data={this.state.data}
						renderItem={this.renderItem}
						numColumns={3}
						keyExtractor={(item, index) => index.toString()}
					/>
				</View>
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
