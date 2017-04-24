
import React, { Component } from 'react';
import {View ,Image ,StyleSheet ,TouchableHighlight ,Form} from 'react-native'
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import axios from 'axios';
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux'
import * as actions from './actions'

const { fetchProfile } = actions


class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '5610503922',
            password: '20056105039224',
            name: ''
        };
    }

    login() {
        console.log(this.state.email)
        this.props.fetchProfile(this.state.email, this.state.password)
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
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
                    onPress={()=> this.login() }>
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



const mapStateToProps = (state) => ({
    profile: state.profile.val[0]
})

const mapDispatchToProps = (dispatch) => ({
  fetchProfile(user,password){
    dispatch(fetchProfile(user,password))
  }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About)



