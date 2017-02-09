var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

import React ,{Component} from 'react'
import {View ,Image , StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Text } from 'native-base';

export default class Rate extends Component{
	render(){
		return(
            <View style={styles.container}>         
                <Text>อัตราค่าบริการ</Text>
                <Image style={{resizeMode: 'contain'}}
                    source={require('./img/rate.png') }
                />
            </View>
                            
                                                           
		)
	}
} 

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },

})