
import React ,{Component} from 'react'
import {View , Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Thumbnail, H3 } from 'native-base';
import axios from 'axios';

export default class index extends Component {

    state = { books: [] }

    componentWillMount() {
    axios.get(`http://localhost:8888/Back-LibKU/public/api/dbsinfos`)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err))
  }
 

  renderBooks() {
    return this.state.books.map((book,index) =>
      <ListItem key={index} onPress={Actions.DBInfo}>
          <Text key={book.name} style={{fontWeight: 'bold'}}>{book.name}</Text>
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