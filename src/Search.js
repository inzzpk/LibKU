import React ,{Component} from 'react'
import {View , Text, StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, InputGroup, Input, Icon, Button }from 'native-base';


export default class Search extends Component{
	render(){
		return(
			<Container>
        <Content padder>
          <Text>Search KU Library & Worldwide Library Catalog</Text>
          <InputGroup borderType='rounded' style={styles.box} >
            <Input placeholder='Type your text here'/>  
          </InputGroup>
          <Button bordered info style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}> Search </Button>
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