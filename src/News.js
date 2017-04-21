import React ,{Component} from 'react'
import {View , Text, Image,Linking} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List,Card, CardItem, Thumbnail, H3 } from 'native-base';
import axios from 'axios';
import { API_END_POINT } from './config'

export default class news extends Component {

    state = { news: [] }

    componentWillMount() {

    //axios.get(`http://localhost:8888/Laravel-LibKU/public/api/news`)
    //axios.get(`${API_END_POINT}:8888/Laravel-LibKU/public/api/news`)
    axios.get(`${API_END_POINT}:7777/fetchNews`)
      .then(res => this.setState({ news: res.data }))
      .catch(err => console.log(err))
      // .then(response => this.setState({ albums: response.data }));
  }
 

  renderNews() {
    return this.state.news.map((news,index) =>
      <Card key={index}>
      <CardItem cardBody onPress={() => Linking.openURL(news.link)}>
          <Text key={news.title} style={{fontWeight: 'bold' ,marginLeft: 10, marginRight: 10,marginBottom: 10}}>{news.title}</Text>
                                  
            <Image style={{ resizeMode: 'cover', width: null }} source={{uri: news.image}} /> 
          </CardItem>
      </Card>          
    );
  }

  render() {
    return (
      <Container>
        <Content padder>
          <List >
            {this.renderNews()}
          </List>
        </Content>
      </Container>
    );
  }
}

///<Thumbnail square size={100} source={{uri: news.image}} />
///<Thumbnail square size={100} source={require('./img/nov2.jpg')} />