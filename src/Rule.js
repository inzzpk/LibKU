import React ,{Component} from 'react'
import {View ,Image} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Text, Icon } from 'native-base';

export default class Rule extends Component{
	render(){
		return(
			<Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Text>อัตราค่าบริการ</Text>
                        </CardItem>
                        <CardItem>
                            <Text>ข้อปฏิบัติ</Text>                        
                        </CardItem>
                        <CardItem>
                            <Text>ระเบียบการยืม</Text>                        
                        </CardItem>
                        <CardItem>
                            <Text>เวลาทำการ</Text>                        
                        </CardItem>

                   </Card>
                </Content>
            </Container>
		)
	}
} 