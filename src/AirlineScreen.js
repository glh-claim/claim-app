import React, { Component } from 'react';
import {
	StyleSheet,
	View, Text, Image,
    TouchableOpacity,
    Alert,
	FlatList,
	Dimensions,
	SafeAreaView,
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
				{title: 'Cathay Pacific', subtitle: 'Total Number of Cases: 18\nSecond line very pretty', icon: 'plane', type: 'FontAwesome', image: require("./images/cathay.png")},
				{title: 'HK Express', subtitle: 'Lorem Ipsum Dolor Sit Amet', icon: 'paper-plane', type: 'Entypo', image: require("./images/hkexpress.jpg")},
				{title: 'China Airlines', subtitle: 'Lorem Ipsum Dolor Sit Amet', icon: 'paper-plane-o', type: 'FontAwesome', image: require("./images/chinaairlines.jpg")},
				{title: 'Ryanair', subtitle: 'Lorem Ipsum Dolor Sit Amet', icon: 'ios-paper-plane', type: 'Ionicons', image: require("./images/ryanair.png")},
				{title: 'Emirates', subtitle: 'Lorem Ipsum Dolor Sit Amet', icon: 'airplane', type: 'MaterialCommunityIcons', image: require("./images/emirates.png")},
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
			<TouchableOpacity style = {{flex: 1, flexDirection: 'row', backgroundColor: 'white', marginVertical: 5, borderRadius: 20, marginHorizontal: 10}} activeOpacity={0.5} onPress={() => this.airlineClicked(item.title, item.image, item.type, index)}>
				<View style = {{borderWidth: 0, width: (windowWidth-60)/3, height: (windowWidth-60)/3, borderRadius: 100, justifyContent: 'center', alignItems: 'center', borderColor: 'lightgray'}}>
					<Image
					style={{width: 75, height: 75, borderRadius: 20, borderWidth: 1, borderColor: "lightgray"}}
					source={item.image}
					/>
				</View>
				<View style = {{flex: 1, justifyContent: 'center'}}>
					<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontWeight: '500', fontSize: 14}}>{item.title}</Text>
					<Text style = {{fontFamily: 'Avenir Next', color: '#687195', fontWeight: '400', fontSize: 12}}>{item.subtitle}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	render()
	{
		return(
			<SafeAreaView style = {styles.container}>
				<View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                	<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', fontSize: 24, fontWeight: '500', marginBottom: 10}}>AIRLINES</Text>
				</View>
				<View>
					<FlatList
						data={this.state.data}
						style = {{width: windowWidth, height: windowHeight-180}}
						renderItem={this.renderItem}
						numColumns={1}
						keyExtractor={(item, index) => index.toString()}
					/>
				</View>
				<View style = {{justifyContent: 'flex-end', flex: 1}}>
					<TouchableOpacity style = {{height: 50, backgroundColor: 'white', marginBottom: 15, marginHorizontal: 100, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
						<Text style = {{fontFamily: 'Avenir Next', color: '#00355f', textAlign: 'center', fontSize: 16}}>Go Back</Text>
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
	},
});
