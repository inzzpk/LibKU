import React ,{Component} from 'react'
import {View , Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, InputGroup, Input, Icon } from 'native-base';

export default class Comment extends Component{
	render(){
		return(
			 <Container>
                <Content>
                    <List>
                        <ListItem>
	                        <InputGroup iconRight success>
	                        <Icon name='ios-checkmark-circle' style={{color:'#00C497'}}/>
	                        <Input placeholder='ชื่อ-นามสกุล' />
	                    	</InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup>
                                <Input placeholder='หมายเลขโทรศัพท์' />
                            </InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup >
                                <Input placeholder='E-mail' />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup >
                                <Input placeholder='วันที่ใช้บริการ' />
                            </InputGroup>
                        </ListItem>
                   
                        <ListItem>
                            <InputGroup >
                                <Input stackedLabel label='ข้อเสนอแนะ / ร้องเรียน' placeholder='พิมตรงนี้' />
                            </InputGroup>
                        </ListItem>
                    </List>
                </Content>
            </Container>
		)
	}
} 