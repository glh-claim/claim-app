import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	FlatList,
	Dimensions,
} from 'react-native';
import { Icon } from 'native-base';
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
				{name: 'Airline', icon: 'plane', type: 'FontAwesome'},
				{name: 'placeholder', icon: 'question', type: 'AntDesign'},
				{name: 'placeholder', icon: 'question', type: 'AntDesign'},
				{name: 'placeholder', icon: 'question', type: 'AntDesign'},
				{name: 'placeholder', icon: 'question', type: 'AntDesign'},
				{name: 'placeholder', icon: 'question', type: 'AntDesign'},
				{name: 'placeholder', icon: 'question', type: 'AntDesign'},
				{name: 'placeholder', icon: 'question', type: 'AntDesign'},
				{name: 'placeholder', icon: 'question', type: 'AntDesign'},
				{name: 'placeholder', icon: 'question', type: 'AntDesign'},
				{name: 'placeholder', icon: 'question', type: 'AntDesign'},
				{name: 'placeholder', icon: 'question', type: 'AntDesign'},
			],
	    };
	}

	renderItem = ({item, index}) => {
		return (
			<TouchableOpacity style = {{flex: 1, margin: 10, height: windowWidth/3}} activeOpacity={0.5} onPress={() => Alert.alert("Pressed " + item.name + " with index " + index.toString())}>
				<View style = {{borderWidth: 0, width: (windowWidth-60)/3, height: (windowWidth-60)/3, borderRadius: 100, justifyContent: 'center', alignItems: 'center', borderColor: 'lightgray'}}>
					<Icon name={item.icon} type={item.type} style={{ fontSize: 75, color: "white" }} />
				</View>
				<View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<Text style = {{fontFamily: 'Avenir Next', color: 'white'}}>{item.name}</Text>
				</View>
			</TouchableOpacity>
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
						style = {{width: windowWidth, height: windowHeight-100}}
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
