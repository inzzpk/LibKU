import React ,{Component} from 'react'
import {View , Text , StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Button } from 'native-base';

export default class Comment extends Component{
	render(){
		return(
			 <Container>
        <Content padder>
          <List>
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ชื่อ-นามสกุล' />
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='หมายเลขโทรศัพท์' />
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='E-mail' />
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='วันที่ใช้บริการ' />
              </InputGroup>
            </ListItem>
                   
            <ListItem>
              <InputGroup style={styles.box}>
                <Input stackedLabel label='ข้อเสนอแนะ / ร้องเรียน' placeholder='พิมตรงนี้' />
                  </InputGroup>
            </ListItem>
          </List>
          <Button bordered info style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}> ส่ง </Button>
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
    marginRight: 25,
    marginTop: 10,
    
  },
  b:{
    marginTop: 10,
    marginLeft: 160,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
  

})
