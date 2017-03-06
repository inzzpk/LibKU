
import React ,{Component} from 'react'
import {View , Text,Image} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Thumbnail, H3 } from 'native-base';
import axios from 'axios';

export default class test extends Component {

    state = { books: [] }

    componentWillMount() {
    axios.get(`http://localhost:8888/Back-LibKU/public/api/dbsinfosfirst`)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err))
  }
 

  render() {
    return (
            <Container>
                <Content padder>
                    <Card style={{ flex: 0 }}>
                        <CardItem cardBody> 
                            <Image style={{ resizeMode: 'contain' }} source={require('../img/kulogo.png')} /> 
                                <Text key={this.state.books.name} style={{fontWeight: 'bold'}}>{this.state.books.name}</Text>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
  }
}
