
import React ,{Component} from 'react'
import {View , Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Thumbnail, H3 } from 'native-base';
import axios from 'axios';

export default class test extends Component {

    state = { books: [] }

    componentWillMount() {
    //axios.get('http://inzzpk.in.th/book_info.json')
    //axios.get('http://localhost:8888/book_info.json')
    // axios.get('http://158.108.48.254/brequest/book_info.json')
    //axios.get('http://158.108.48.254/brequest/bookinfo.php')
    //  .then(response => this.setState({ books: response.data }));
    //.then(response => console.log(response.data))
    //axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // .then(response => this.setState({ books: response.data }));
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    axios.get(`http://158.108.48.254/brequest/book_info.json`)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err))
      // .then(response => this.setState({ albums: response.data }));
  }
 

  renderBooks() {
    return this.state.books.map((book,index) =>
      <ListItem key={index}>
          <Thumbnail square size={100} source={require('./img/nov2.jpg')} />
          <Text key={book.title} style={{fontWeight: 'bold'}}>{book.title}</Text>
          <Text key={book.author}>{book.author}</Text>
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