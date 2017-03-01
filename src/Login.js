import React, { Component } from 'react';
import {View ,Image ,StyleSheet ,TouchableOpacity} from 'react-native'
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';

const Item = Picker.Item;

export default class About extends Component {


    render() {
        return (
            <Container>
                <Content padder>
                    <List>
                    	<Image style={{height: 150 , resizeMode: 'contain' , alignSelf: 'center', marginBottom: 20}} source={require('./img/kulogo.png') } />
                    
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-person" style={{ color: '#66CDAA' }} />
                                <Input placeholder="รหัสนนทรี" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" style={{ color: '#66CDAA' }} />
                                <Input placeholder="รหัสผ่าน" secureTextEntry />
                            </InputGroup>
                        </ListItem>

                    

                    </List>
                    <Button bordered info style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                        เข้าสู่ระบบ
                    </Button>
                </Content>
            </Container>
        );
    }
}