
import React ,{Component} from 'react'
import {View , Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Thumbnail, H3 } from 'native-base';
import axios from 'axios';

export default class test extends Component {

    state = { albums: [] }

    componentWillMount() {
    //axios.get('https://inzzpk.in.th/book_info.json')
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }
 
  renderBooks() {
    return this.state.albums.map(album =>
      <ListItem>
          <Thumbnail square size={100} source={require('./img/nov2.jpg')} />
          <Text key={album.title} style={{fontWeight: 'bold'}}>{album.title}</Text>
          <Text note key={album.artist}>{album.artist}</Text>
      </ListItem>          
    );
  }

  render() {
    console.log(this.state);
 
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