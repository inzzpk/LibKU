
import React ,{Component} from 'react'
import {View, Text, Image, Linking} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Thumbnail, H3, Button } from 'native-base';
import axios from 'axios';

export default class test extends Component {

  render(props) {
    console.log(this.props)
    console.log(this.props.id)
    return (
            <Container>
                <Content padder>
                    <Card style={{ flex: 0 }}>
                        <CardItem cardBody> 
                            <Image style={{height: 100 , resizeMode: 'contain' , alignSelf: 'center' , marginBottom: 20}}
                                    source={require('../img/kulogo.png')} /> 
                                <Text key={this.props.name} style={{fontWeight: 'bold'}}>{this.props.name}</Text>
                                <Text key={this.props.intro} >{this.props.intro}</Text>
                                <Button bordered info style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
                                onPress={() => Linking.openURL(this.props.link)}> ไปยังฐานข้อมูล </Button>

                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
  }
}

//<Image style={{height: 100 , resizeMode: 'contain' , alignSelf: 'center' , marginBottom: 20}}
//source={{uri: this.props.url_pic }} /> 