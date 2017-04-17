
import React, { Component } from 'react';
import {View ,Image ,StyleSheet ,TouchableHighlight ,Form} from 'react-native'
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import axios from 'axios';
import {Actions} from 'react-native-router-flux'


const Item = Picker.Item;

export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        };
    }

    login() {
        console.log(this.state.email)
        console.log(this.state.password)
    axios.get(`http://localhost:7777/chkLogin/${this.state.email}/${this.state.password}`)
      .then(res => {
        if (res.data[0] === undefined){
            console.log("NOOOOO")
            this.setState({ name: "ไม่ถูกต้มมมม" })
        }
        else{
            console.log(res.data[0].th_name)
            this.setState({ name: res.data[0].th_name })
        }
        })
            //(res) => 
        
      .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>
                <Content padder>
                    <List>
                        <Image style={{height: 150 , resizeMode: 'contain' , alignSelf: 'center', marginBottom: 20}} source={require('./img/kulogo.png') } />
                    
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-person" style={{ color: '#66CDAA' }} />
                                <Input placeholder="รหัสนนทรี" value={this.state.email} onChangeText={(email) => this.setState({email})}/>
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" style={{ color: '#66CDAA' }} />
                                <Input placeholder="รหัสผ่าน" value={this.state.password} onChangeText={(password) => this.setState({password})} secureTextEntry />
                            </InputGroup>
                        </ListItem>

                    </List>
                    <Button bordered info style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
                    onPress={this.login.bind(this)}>
                        เข้าสู่ระบบ
                    </Button>
                    <Text>{this.state.name}</Text>
                    <TouchableHighlight onPress={Actions.BarcodeLogin}>
                      <Image style={{height: 100 , resizeMode: 'contain' , alignSelf: 'center' , marginBottom: 20}}
                      source={require('./request/img/barcode.png') }
                      />
                    </TouchableHighlight>
                </Content>
            </Container>
        );
    }
}



