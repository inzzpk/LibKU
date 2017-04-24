import React ,{Component} from 'react'
import {View , Text, StyleSheet, Linking, Image} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, InputGroup, Input, Icon, Button }from 'native-base';


export default class Search extends Component{
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

	render(){
		return(
			<Container>

          <Image style={{height: 100 , resizeMode: 'contain' , alignSelf: 'center' ,marginTop: 20, marginBottom: 20}}
              source={require('./img/wclogo.png') }
              />
              <Content style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
          <Text>Search KU Library & Worldwide Library Catalog</Text>
          <InputGroup borderType='rounded' style={styles.box} >
            <Input placeholder='ใส่คำค้น' 
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}/>  
          </InputGroup>
          <Button bordered info style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
          onPress={() => Linking.openURL(`https://kasetsartunivlibrary.on.worldcat.org/external-search?queryString=${this.state.text}&databaseList=2375,2463,2572,1271,2229,1931,3404,1875,1842,2897,2236,3313,239,1708,638&page=1&queryType=search`)}> ค้นหา </Button>
        </Content>
      </Container>
		)
	}
} 

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  box:{
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    
  },
  b:{
  	marginTop: 10,
  	justifyContent: 'center',
    alignItems: 'center',
    
  }
  

})