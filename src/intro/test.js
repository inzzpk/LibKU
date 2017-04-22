import React ,{Component} from 'react'
import {View , Text, Linking} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Thumbnail, H3 } from 'native-base';
import axios from 'axios';
import { API_END_POINT } from '../config'

export default class test extends Component {

    state = { books: [] }

    componentWillMount() {


    //axios.get(`http://localhost:8888/Laravel-LibKU/public/api/bookinfos`)
    //axios.get(`${API_END_POINT}:8888/Laravel-LibKU/public/api/bookinfos`)
    axios.get(`${API_END_POINT}/fetchIntros`)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err))
      // .then(response => this.setState({ albums: response.data }));
  }
 

  renderBooks() {
    return this.state.books.map((book,index) =>
      <Card key={index}>
      <CardItem key={index} onPress={() => Linking.openURL(book.link)}>
          <Thumbnail square size={100} source={{uri: book.image}} />
          <Text key={book.title} style={{fontWeight: 'bold' , marginLeft: 20 , marginRight: 100}}>{book.title}</Text>
          <Text key={book.callno}>{book.callno}</Text>
      </CardItem>
      </Card>          
    );
  }

  render() {
    return (
      <Container>
        <Content padder>
          
            {this.renderBooks()}
          
        </Content>
      </Container>
    );
  }
}

///<Thumbnail square size={100} source={{uri: book.image}} />
///<Thumbnail square size={100} source={require('./img/nov2.jpg')} />