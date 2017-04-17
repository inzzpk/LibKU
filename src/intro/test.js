
import React ,{Component} from 'react'
import {View , Text, Linking} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Thumbnail, H3 } from 'native-base';
import axios from 'axios';

export default class test extends Component {

    state = { books: [] }

    componentWillMount() {


    axios.get(`http://localhost:8888/Laravel-LibKU/public/api/bookinfos`)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err))
      // .then(response => this.setState({ albums: response.data }));
  }
 

  renderBooks() {
    return this.state.books.map((book,index) =>
      <ListItem key={index} onPress={() => Linking.openURL(book.link)}>
          <Thumbnail square size={100} source={{uri: book.image}} />
          <Text key={book.title} style={{fontWeight: 'bold'}}>{book.title}</Text>
          <Text key={book.callno}>{book.callno}</Text>
      </ListItem>          
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.renderBooks()}
          </List>
        </Content>
      </Container>
    );
  }
}

///<Thumbnail square size={100} source={{uri: book.image}} />
///<Thumbnail square size={100} source={require('./img/nov2.jpg')} />