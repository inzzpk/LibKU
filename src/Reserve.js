import React ,{Component} from 'react'
import {View , Text} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class Reserve extends Component{
	render(){
		return(
			<View>
				<Text>Reserve</Text>
				<Text onPress={Actions.Home}> Go Home </Text>
			</View>
		)
	}
} 