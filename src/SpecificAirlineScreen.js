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
			data: [
				{status: "In Dispute", 	nature: "Overbooking", date: "23/02/2019", approval: 140},
				{status: "In Progress", nature: "Overcharged", date: "18/02/2019", approval: 120},
				{status: "Settled", 	nature: "Overbooking", date: "02/02/2019", approval: 130},
				{status: "In Dispute", 	nature: "Overbooking", date: "13/01/2019", approval: 80},
				{status: "In Progress", nature: "Overcharged", date: "23/12/2018", approval: 20},
				{status: "In Progress", nature: "Overcharged", date: "18/11/2018", approval: 110},
				{status: "In Dispute",	nature: "Overbooking", date: "02/11/2018", approval: 100},
				{status: "Settled", 	nature: "Overbooking", date: "13/09/2018", approval: 70},
				{status: "In Dispute", 	nature: "Overbooking", date: "23/02/2019", approval: 140},
				{status: "In Progress", nature: "Overcharged", date: "18/02/2019", approval: 120},
				{status: "Settled", 	nature: "Overbooking", date: "02/02/2019", approval: 130},
				{status: "In Dispute", 	nature: "Overbooking", date: "13/01/2019", approval: 80},
				{status: "In Progress", nature: "Overcharged", date: "23/12/2018", approval: 20},
				{status: "In Progress", nature: "Overcharged", date: "18/11/2018", approval: 110},
				{status: "In Dispute",	nature: "Overbooking", date: "02/11/2018", approval: 100},
				{status: "Settled", 	nature: "Overbooking", date: "13/09/2018", approval: 70},
			]
	    };
	}

	renderHeader() {
		return(
			<View>
				<View style = {{height: windowWidth/3+85, flexDirection: 'column', backgroundColor: 'white', borderRadius: 20, marginHorizontal: 20, marginVertical: 10, paddingTop: 20}}>
					<View style = {{justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 20, flexDirection: 'row'}}>
						<Image
						style={{width: 75, height: 75, borderRadius: 20, borderWidth: 1, borderColor: "lightgray"}}
						source={globalIcon}
						/>
						<View style = {{height: 75, width: windowWidth-150, justifyContent: 'center', alignItems: 'center'}}>
							<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 24}}>{globalTitle}</Text>
						</View>
					</View>

					<View style = {{marginTop: 15}}>
						<View style = {{flexDirection: 'row'}}>
							<View style = {styles.circleAndText}>
								<View style = {styles.circle}>
									<Text style = {styles.circleText}>
										61%
									</Text>
								</View>

								<Text style = {styles.circleTextBelow}>
									Response Rate
								</Text>
							</View>

							<View style = {styles.circleAndText}>
								<View style = {styles.circle}>
									<Text style = {styles.circleText}>
										30%
									</Text>
								</View>

								<Text style = {styles.circleTextBelow}>
									Settled Cases
								</Text>
							</View>

							<View style = {styles.circleAndText}>
								<View style = {styles.circle}>
									<Text style = {styles.circleText}>
										{this.state.data.length}
									</Text>
								</View>

								<Text style = {styles.circleTextBelow}>
									Cases
								</Text>
							</View>
						</View>
					</View>

				</View>
			</View>
		);
	}

	renderInfo() {
		return(
			<View style = {{flex: 1, flexDirection: 'column', marginVertical: 10, marginHorizontal: 20}}>
				<FlatList
					data={this.state.data}
					style = {{width: windowWidth-40, height: windowHeight-160}}
					renderItem={this.renderItem}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		);
	}

	renderItem = ({item, index}) => {
		return (
			<TouchableOpacity style = {{height: windowWidth/4, borderWidth: 0, borderRadius: 10, marginVertical: 5, borderColor: 'white', backgroundColor: 'white', justifyContent: 'space-between', padding: 10}} activeOpacity={0.5} onPress={() => Alert.alert((index+1).toString())}>
				<View style = {{flexDirection: 'row', flex: 1}}>
					<View style = {{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
						<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 13}}>Case #{index+1}</Text>
						<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 13}}>Date: {item.date}</Text>
						<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 13}}>Status: {item.status}</Text>
					</View>
					<View style = {{flex: 1, flexDirection: 'column'}}>
						<View style = {{flex: 1}}>
							<Text style = {{color: '#00355f', fontFamily: 'Avenir Next', fontSize: 13}}>Nature: {item.nature}</Text>
						</View>
						<View style = {{flex: 2, justifyContent: 'center'}}>
							<View style = {{flexDirection: 'row', opacity: 0.75}}>
								<View style = {{width: item.approval, height: 20, borderTopLeftRadius: 100, borderBottomLeftRadius: 100, backgroundColor: 'green'}}>
								</View>
								<View style = {{width: 150 - item.approval, height: 20, borderTopRightRadius: 100, borderBottomRightRadius: 100, backgroundColor: 'red'}}>
								</View>
							</View>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	renderButton() {
		return(
			<View style = {{justifyContent: 'flex-end'}}>
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
		backgroundColor: '#ebecf0',
	},
	circle: {
		width: windowWidth/6,
		height: windowWidth/6,
		borderRadius: 100,
		marginHorizontal: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderWidth: 1,
	},
	circleText: {
		fontFamily: 'Avenir Next',
		color: '#00355f',
		fontWeight: '400',
		fontSize: 16,
		textAlign: 'center',
		paddingHorizontal: 5,
	},
	circleTextBelow: {
		fontFamily: 'Avenir Next',
		color: '#00355f',
		fontWeight: '400',
		fontSize: 11,
		textAlign: 'center',
		paddingHorizontal: 10,
		marginTop: 10,
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
	circleAndText: {width: (windowWidth-40)/3, justifyContent: 'center', alignItems: 'center'},
});
