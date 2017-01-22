var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

import React ,{Component} from 'react'
import {View ,Image} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Text } from 'native-base';

export default class Rate extends Component{
	render(){
		return(
			<Container>
                <Content>
                        
                            <Text>อัตราค่าบริการ</Text>
                            <Image style={{resizeMode: 'contain'}}
                              source={require('./img/rate.png') }
                            />
                            
                                                           
                </Content>
            </Container>
		)
	}
} 