import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	FlatList,
	Dimensions,
	SafeAreaView
} from 'react-native';
import { Icon } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default class AirlineScreen extends Component
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
				{title: 'Airline 1', subtitle: 'Lorem Ipsum Dolor Sit Amet', icon: 'plane', type: 'FontAwesome'},
				{title: 'Airline 2', subtitle: 'Lorem Ipsum Dolor Sit Amet', icon: 'paper-plane', type: 'Entypo'},
				{title: 'Airline 3', subtitle: 'Lorem Ipsum Dolor Sit Amet', icon: 'paper-plane-o', type: 'FontAwesome'},
				{title: 'Airline 4', subtitle: 'Lorem Ipsum Dolor Sit Amet', icon: 'ios-paper-plane', type: 'Ionicons'},
				{title: 'Airline 5', subtitle: 'Lorem Ipsum Dolor Sit Amet', icon: 'airplane', type: 'MaterialCommunityIcons'},
			]
	    };
	}

	airlineClicked(title, icon, type, index) {
		globalTitle = title;
		globalIcon = icon;
		globalType = type;
		this.props.navigation.navigate("specificAirline");
	}

	renderItem = ({item, index}) => {
		return (
			<TouchableOpacity style = {{flex: 1, flexDirection: 'row'}} activeOpacity={0.5} onPress={() => this.airlineClicked(item.title, item.icon, item.type, index)}>
				<View style = {{borderWidth: 0, width: (windowWidth-60)/3, height: (windowWidth-60)/3, borderRadius: 100, justifyContent: 'center', alignItems: 'center', borderColor: 'lightgray'}}>
					<Icon name={item.icon} type={item.type} style={{ fontSize: 60, color: "white" }} />
				</View>
				<View style = {{flex: 1, justifyContent: 'center'}}>
					<Text style = {{fontFamily: 'Avenir Next', color: 'white', fontWeight: '500', fontSize: 14}}>{item.title}</Text>
					<Text style = {{fontFamily: 'Avenir Next', color: 'lightgray', fontWeight: '400', fontSize: 12}}>{item.subtitle}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	render()
	{
		return(
			<SafeAreaView style = {styles.container}>
				<View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                	<Text style = {{fontFamily: 'Avenir Next', color: 'white', fontSize: 24, fontWeight: '500'}}>AIRLINES</Text>
				</View>
				<View>
					<FlatList
						data={this.state.data}
						style = {{width: windowWidth, height: windowHeight-150}}
						renderItem={this.renderItem}
						numColumns={1}
						keyExtractor={(item, index) => index.toString()}
					/>
				</View>
				<TouchableOpacity style = {{height: 50, backgroundColor: 'lightgray', marginBottom: 20, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.navigate("browse")}>
					<Text>Go Back</Text>
				</TouchableOpacity>
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
