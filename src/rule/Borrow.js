var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

import React ,{Component} from 'react'
import {View ,Image , StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Text, Card, CardItem } from 'native-base';

export default class Borrow extends Component{
	render(){
		return(

         <Container>
                <Content padder>
                    <Card>
                        <CardItem>                        
                            <Text>
                                <Image style={{height: window.height-200 ,width: window.width-50 , resizeMode: 'contain' , alignSelf: 'center'}} 
                                source={require('./img/borrow.png') } 
                                />
                            </Text>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
                            
                                                           
		)
	}
} 
