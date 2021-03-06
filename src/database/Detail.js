import React ,{Component} from 'react'
import {View, Text, Image, Linking} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Thumbnail, H3, Button } from 'native-base';

export default class Detail extends Component {

  render() {
    return (
          <Container>
            <Content padder>
                    <Card style={{ flex: 1 }}>
                        <CardItem cardBody> 

                            <Image style={{height: 100,width:100 , resizeMode: 'contain' , alignSelf: 'center' , marginBottom: 20}}
                                    source={{uri: this.props.url_pic }} /> 
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

