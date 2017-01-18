import React ,{Component} from 'react'
import {View } from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Text, Icon } from 'native-base';

export default class Home extends Component{
	render(){
		return(
			<Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Text onPress={Actions.Rule}> Go Rule </Text>
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Intro}> Go Intro </Text>                      
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Comment}> Go Comment </Text>                     
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Database}> Go Database </Text>                       
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Request}> Go Request </Text>
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Reserve}> Go Reserve </Text>                    
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Search}> Go Search </Text>                    
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Delivery}> Go Delivery </Text>                       
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Interlibloan}> Go Interlibloan </Text>                     
                        </CardItem>

                   </Card>
                </Content>
            </Container>
		)
	}
} 