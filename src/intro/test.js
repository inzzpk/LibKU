
import React ,{Component} from 'react'
import {View , Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Thumbnail, H3 } from 'native-base';
import axios from 'axios';

export default class test extends Component {

    state = { albums: [] }

    componentWillMount() {
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    axios.get(`http://158.108.48.254/brequest/book_info.json`)
      .then(res => this.setState({ albums: res.data }))
      .catch(err => console.log(err))
      // .then(response => this.setState({ albums: response.data }));
  }
 
  renderBooks() {
    return this.state.albums.map(( album, index ) =>
      <ListItem key={index}>
          <Thumbnail square size={100} source={require('./img/nov2.jpg')} />
          <Text key={album.title} style={{fontWeight: 'bold'}}>{album.title}</Text>
          <Text note key={album.artist}>{album.artist}</Text>
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