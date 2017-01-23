import React ,{Component} from 'react'
import {View , Text , StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Button, Picker } from 'native-base'

const Item = Picker.Item;

export default class Interlibloan extends Component{

	 constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: []
            }
        }
    }
    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }





	render(){
		return(
			 <Container>
        <Content>
          <List>
          	<Text style={{fontWeight: 'bold'}}>ประเภททรัพยากรสารสนเทศ</Text>
          	<ListItem>
          		<Picker
                        iosHeader="ประเภททรัพยากรสารสนเทศ"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}>
                        <Item label="หนังสือภาษาไทย (Thai Books)" value="key0" />
                        <Item label="หนังสือภาษาต่างประเทศ (Foreign books)" value="key1" />
                        <Item label="วารสารภาษาไทย (Thai Journals)" value="key2" />
                        <Item label="วารสารภาษาต่างประเทศ (Foreign Journals)" value="key3" />
                        <Item label="โสตทัศนวัสดุ (audiovisuals)" value="key4" />
                   </Picker>
          	</ListItem>
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ชื่อเรื่อง (Title)' />
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ชื่อผู้แต่ง (Author)' />
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ISBN / ISSN (ถ้ามี)' />
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='สำนักพิมพ์ (Publishers)' />
              </InputGroup>
            </ListItem>
          </List>
          <Button info style={styles.b}> ส่ง </Button>
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
