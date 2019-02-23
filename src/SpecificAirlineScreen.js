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

export default class SpecificAirlineScreen extends Component
{
	static navigationOptions = {
		header: null,
		gesturesEnabled: false,
	};

	constructor()
	{
		super();
		this.state = {

	    };
	}

	renderHeader() {
		return(
			<View style = {{marginTop: 10}}>
				<View style = {{height: windowWidth/3, flexDirection: 'row'}}>
					<View style = {{width: windowWidth/3, height: windowWidth/3, justifyContent: 'center', alignItems: 'center'}}>
						<Icon name={globalIcon} type={globalType} style={{ fontSize: 75, color: "white" }} />
					</View>
					<View style = {{justifyContent: 'center', alignItems: 'center', flex: 1, marginRight: windowWidth/4}}>
						<Text style = {{color: 'white', fontFamily: 'Avenir Next', fontSize: 24}}>{globalTitle}</Text>
					</View>
				</View>

				<View style = {{flexDirection: 'row'}}>
					<View style = {{width: windowWidth/3, justifyContent: 'center', alignItems: 'center'}}>
						<View style = {styles.circle}>
							<Text style = {styles.circleText}>
								61%
							</Text>
						</View>

						<Text style = {[styles.circleText, {fontSize: 12, marginTop: 10}]}>
							Responded Within{"\n"}Two Weeks
						</Text>
					</View>

					<View style = {{width: windowWidth/3, justifyContent: 'center', alignItems: 'center'}}>
						<View style = {styles.circle}>
							<Text style = {styles.circleText}>
								30%
							</Text>
						</View>

						<Text style = {[styles.circleText, {fontSize: 12, marginTop: 10}]}>
							Settled Cases{"\n"}
						</Text>
					</View>

					<View style = {{width: windowWidth/3, justifyContent: 'center', alignItems: 'center'}}>
						<View style = {styles.circle}>
							<Text style = {styles.circleText}>
								1802
							</Text>
						</View>

						<Text style = {[styles.circleText, {fontSize: 12, marginTop: 10}]}>
							Cases{"\n"}
						</Text>
					</View>
				</View>
			</View>
		);
	}

	renderInfo() {
		return(
			<View style = {{flex: 1, flexDirection: 'column', marginVertical: 20, marginHorizontal: 20}}>
				<View style = {styles.infoBox}>
					<View style = {styles.settledTextView}>
						<Text style = {styles.settledText}>Not Settled</Text>
					</View>
					<View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						<View style = {{width: windowWidth/3, height: 20, borderRadius: 100, flexDirection: 'row'}}>
							<View style = {{width: windowWidth/3 - windowWidth/5, height: 20, borderTopLeftRadius: 100, borderBottomLeftRadius: 100, backgroundColor: 'green'}}>
							</View>
							<View style = {{width: windowWidth/5, height: 20, borderTopRightRadius: 100, borderBottomRightRadius: 100, backgroundColor: 'red'}}>
							</View>
						</View>
					</View>
				</View>
				<View style = {styles.infoBox}>
					<View style = {styles.settledTextView}>
						<Text style = {styles.settledText}>Settled</Text>
					</View>
					<View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						<View style = {{width: windowWidth/3, height: 20, borderRadius: 100, flexDirection: 'row'}}>
							<View style = {{width: windowWidth/3 - windowWidth/7, height: 20, borderTopLeftRadius: 100, borderBottomLeftRadius: 100, backgroundColor: 'green'}}>
							</View>
							<View style = {{width: windowWidth/7, height: 20, borderTopRightRadius: 100, borderBottomRightRadius: 100, backgroundColor: 'red'}}>
							</View>
						</View>
					</View>
				</View>
				<View style = {styles.infoBox}>
					<View style = {styles.settledTextView}>
						<Text style = {styles.settledText}>In Dispute</Text>
					</View>
					<View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						<View style = {{width: windowWidth/3, height: 20, borderRadius: 100, flexDirection: 'row'}}>
							<View style = {{width: windowWidth/3 - windowWidth/4, height: 20, borderTopLeftRadius: 100, borderBottomLeftRadius: 100, backgroundColor: 'green'}}>
							</View>
							<View style = {{width: windowWidth/4, height: 20, borderTopRightRadius: 100, borderBottomRightRadius: 100, backgroundColor: 'red'}}>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}

	renderButton() {
		return(
			<View style = {{justifyContent: 'flex-end'}}>
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
				{this.renderHeader()}
				{this.renderInfo()}
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
	circle: {
		width: windowWidth/6,
		height: windowWidth/6,
		borderRadius: 100,
		marginHorizontal: 5,
		borderWidth: 1,
		borderColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circleText: {
		fontFamily: 'Avenir Next',
		color: 'white',
		fontWeight: '400',
		fontSize: 16,
		textAlign: 'center',
		paddingHorizontal: 5,
	},
	infoBox: {
		flex: 1,
		flexDirection: 'row',
		borderRadius: 100,
		borderWidth: 2,
		marginVertical: 10,
		borderColor: 'gray',
	},
	settledTextView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	settledText: {
		color: 'white',
		fontFamily: 'Avenir Next',
		fontWeight: '400',
		fontSize: 16,
	},
});
