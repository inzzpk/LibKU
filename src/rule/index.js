import React ,{Component} from 'react'
import {View ,Image} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Text } from 'native-base';

export default class index extends Component{
	render(){
		return(
			<Container>
                <Content>
                    <List>
                        <ListItem onPress={Actions.Rate}>
                            <Text>อัตราค่าบริการ</Text>
                        </ListItem>
                        <ListItem>
                            <Text>ข้อปฏิบัติ</Text> 
                        </ListItem>
                        <ListItem>
                            <Text>ระเบียบการยืม</Text> 
                        </ListItem>
                        <ListItem>
                            <Text>เวลาทำการ</Text> 
                        </ListItem>
                    </List>
                </Content>
            </Container>
		)
	}
} 