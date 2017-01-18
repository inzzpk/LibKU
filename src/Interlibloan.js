import React ,{Component} from 'react'
import {View , Text} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class Interlibloan extends Component{
	render(){
		return(
			<View>
				<Text>Interlibloan</Text>
				<Text onPress={Actions.Home}> Go Home </Text>
			</View>
		)
	}
} 