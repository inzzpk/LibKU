import React ,{Component} from 'react'
import {View , Text , StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, Tabs, List, ListItem, InputGroup, Input, Icon, Button, Picker  } from 'native-base'

const Item = Picker.Item;

export default class Book extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'ห้องสมุดคณะประมง',
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
                <Input placeholder='ชื่อเรื่อง (Title)' />
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='เลขเรียกหนังสือ (Call No)' />
              </InputGroup>
            </ListItem>

            <Text style={{fontWeight: 'bold'}}>ห้องสมุดที่สะดวกรับ</Text>
            <ListItem>
              <Picker
                        iosHeader="ห้องสมุดที่สะดวกรับ"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}>
                        <Item value="ห้องสมุดคณะประมง" label="ห้องสมุดคณะประมง" />
                        <Item value="ห้องสมุดคณะวนศาสตร์" label="ห้องสมุดคณะวนศาสตร์" />
                        <Item value="ห้องสมุดคณะอุตสาหกรรมเกษตร" label="ห้องสมุดคณะอุตสาหกรรมเกษตร" />
                        <Item value="ห้องสมุดคณะวิทยาศาสตร์" label="ห้องสมุดคณะวิทยาศาสตร์" />
                        <Item value="ห้องสมุดคณะวิศวกรรมศาสตร์" label="ห้องสมุดคณะวิศวกรรมศาสตร์" />
                        <Item value="ห้องสมุดคณะสถาปัตยกรรมศาสตร์" label="ห้องสมุดคณะสถาปัตยกรรมศาสตร์" />
                        <Item value="ห้องสมุดคณะมนุษยศาสตร์" label="ห้องสมุดคณะมนุษยศาสตร์" />
                        <Item value="ห้องสมุดคณะศึกษาศาสตร์" label="ห้องสมุดคณะศึกษาศาสตร์" />
                        <Item value="ห้องสมุดคณะสังคมศาสตร์" label="ห้องสมุดคณะสังคมศาสตร์" />
                        <Item value="ห้องสมุดคณะเศรษฐศาสตร์และบริหารธุรกิจ (ห้องสมุดพิทยาลงกรณ)" label="ห้องสมุดคณะเศรษฐศาสตร์และบริหารธุรกิจ (ห้องสมุดพิทยาลงกรณ)" />
                        <Item value="ห้องสมุดคณะสัตวแพทยศาสตร์" label="ห้องสมุดคณะสัตวแพทยศาสตร์" />
                        <Item value="ห้องสมุดสาขาอาหาร สถาบันค้นคว้าและพัฒนาผลิตภัณฑ์อาหาร" label="ห้องสมุดสาขาอาหาร สถาบันค้นคว้าและพัฒนาผลิตภัณฑ์อาหาร" />
                        <Item value="ห้องสมุดภาควิชาเคมี" label="ห้องสมุดภาควิชาเคมี" />
                        <Item value="ห้องสมุดวิทยาลัยสิ่งแวดล้อม" label="ห้องสมุดวิทยาลัยสิ่งแวดล้อม" />
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