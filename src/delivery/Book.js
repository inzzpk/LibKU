import React ,{Component} from 'react'
import {View , Text , StyleSheet,Alert} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, Tabs, List, ListItem, InputGroup, Input, Icon, Button, Picker  } from 'native-base'
import { connect } from 'react-redux'
import * as actions from '../actions'

const { createDeli } = actions

const Item = Picker.Item;

class Book extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            barcode: '',
            destination: 'ห้องสมุดคณะประมง',
            b_title1: '',
            b_author1: '',
            b_call1: '',
            a_author1: '',
            a_title1: '',
            a_journal1: '',
            a_vol1: '',
            a_no1: '',
            a_year1: '',
            a_fp1: '',
            a_tp1: '',
            a_ttp1: '',

        }
    }

    componentWillReceiveProps (nextProps) {

      this.setState({
        name: nextProps.profile.th_name.toString(),
        email: nextProps.profile.mail.toString(),
        phone: nextProps.profile.phone.toString(),
        barcode: nextProps.profile.barcode.toString()
      })

    }

    componentWillMount() {
        if(this.props.profile === undefined){
            Alert.alert('','กรุณาเข้าสู่ระบบก่อน', [
              {text: 'ตกลง', onPress: () => {Actions.Login()}},
            ])
        }else{
            var res = this.props.profile.faculty.toString()
            var split = res.split(".")
            var len = (split.length-1).toString()
            //console.log(len)
            var split1 = split[len].split(" ")
            this.state = {
                ...this.state,
                fac :split1[0],
            }
        }

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        var hh = today.getHours();
        var mi = today.getMinutes();
        var ss = today.getSeconds();
        if(dd<10){ dd='0'+dd;} 
        if(mm<10){ mm='0'+mm;} 
        if(hh<10){ hh='0'+hh;}
        if(mi<10){ mi='0'+mi;}
        if(ss<10){ ss='0'+ss;} 
        var today = yyyy+'-'+mm+'-'+dd;
        var time = hh+':'+mi+':'+ss;
        //console.log(today)
        this.state = {
            ...this.state,
            date :today,
            time :time
        }
    }

    onValueChange (value: string) {
        this.setState({
            destination : value
        });
    }

    sentForm() {
        console.log(this.state)
        if(this.props.profile === undefined)
        {
            Alert.alert('','กรุณาเข้าสู่ระบบก่อน', [
                  {text: 'ตกลง', onPress: () => {Actions.Login()}},
                ])
        }else {
            if((this.state.b_title1 === "") || (this.state.b_author1 === "") || (this.state.b_call1 === ""))
              Alert.alert('','กรุณาใส่ข้อมูลให้ครบ', [
                  {text: 'ตกลง'}])
            else{
              console.log(this.state)
            this.props.createDeli(this.state)
            Alert.alert('','แจ้งการนำส่งหนังสือสำเร็จ', [
                  {text: 'ตกลง'},
                ])
            }
        }
    }


	render(){
		return(
			<Container>
        <Content padder>
					<List>
          <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ชื่อเรื่อง (Title)' value={this.state.b_title1} onChangeText={(b_title1) => this.setState({b_title1})}/>
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ชื่อผู้แต่ง (Author)' value={this.state.b_author1} onChangeText={(b_author1) => this.setState({b_author1})}/>
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='เลขเรียกหนังสือ (Call No)' value={this.state.b_call1} onChangeText={(b_call1) => this.setState({b_call1})}/>
              </InputGroup>
            </ListItem>

            <Text style={{fontWeight: 'bold' , marginTop: 10}}>ห้องสมุดที่สะดวกรับ</Text>
            <ListItem>
              <Picker
                        iosHeader="ห้องสมุดที่สะดวกรับ"
                        mode="dropdown"
                        selectedValue={this.state.destination}
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
          <Button bordered info style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }} onPress={()=> this.sentForm() }> ส่ง </Button>
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

const mapStateToProps = (state) => ({
  profile: state.profile.val[0]
})

const mapDispatchToProps = (dispatch) => ({
    createDeli(value){
      dispatch(createDeli(value))
  }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Book)