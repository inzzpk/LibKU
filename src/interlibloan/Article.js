import React ,{Component} from 'react'
import {View , Text , StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, Tabs, List, ListItem, InputGroup, Input, Icon, Button, Picker  } from 'native-base'

const Item = Picker.Item;

export default class Article extends Component{

		constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'ไปรษณีย์ธรรมดา',
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
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ชื่อผู้แต่ง (Author)' />
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ชื่อบทความ (Article)' />
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ชื่อวารสาร (Journal)' />
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ปีที่ (Volume)' />
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ฉบับ/เล่ม (Number)' />
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ปี (Year)' />
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='จากหน้า (From Page)' />
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ถึงหน้า (To Page)' />
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='รวมหน้า (Total Pages)' />
              </InputGroup>
            </ListItem>
            <Text style={{fontWeight: 'bold' , marginTop: 10 }}>วิธีจัดส่ง</Text>
          	<ListItem>
          		<Picker
                        iosHeader="วิธีจัดส่ง"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}>
                        <Item value="ไปรษณีย์ธรรมดา" label="ไปรษณีย์ธรรมดา (Regular Letter)" />
						            <Item value="ด่วนพิเศษ EMS" label="ด่วนพิเศษ EMS (Express Mail Service)" />
						            <Item value="สแกนไฟล์" label="สแกนไฟล์เอกสารแนบ E-Mail (ไม่เกิน 10 แผ่น)" />
						            <Item value="โทรสาร" label="โทรสาร (Fax)" />
						            <Item value="Fulltext" label="Fulltext" />
                   </Picker>
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