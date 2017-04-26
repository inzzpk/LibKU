import React ,{Component} from 'react'
import {View , Text , StyleSheet ,TouchableHighlight ,Image ,Alert} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux'
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Button, Picker } from 'native-base'
import * as actions from './actions'
import Modal from 'react-native-modalbox';

const { createRecom } = actions

const Item = Picker.Item;

class Comment extends Component{

   constructor(props) {
        super(props);
        this.state = {
            r_name: this.props.profile?this.props.profile.th_name:'',
            r_mail: this.props.profile?this.props.profile.mail:'',
            r_tel: this.props.profile?this.props.profile.phone:'',
            r_b: 'ช่วงเกษตรศิลปการ', 
            r_z: 'ชั้น 1', 
            r_rec: ''

        }
    }

    componentWillReceiveProps (nextProps) {

      this.setState({
        r_name: nextProps.profile.th_name.toString(),
        r_mail: nextProps.profile.mail.toString(),
        r_tel: nextProps.profile.phone.toString() 
      })

    }

    componentWillMount() {
      if(this.props.profile === undefined)
      {
        Alert.alert('','กรุณาเข้าสู่ระบบก่อน', [
              {text: 'ตกลง', onPress: () => {Actions.Login()}},
            ])
      }
      
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        var hh = today.getHours();
        var mi = today.getMinutes();
        if(dd<10){ dd='0'+dd;} 
        if(mm<10){ mm='0'+mm;} 
        if(hh<10){ hh='0'+hh;}
        if(mi<10){ mi='0'+mi;} 
        var today = yyyy+'-'+mm+'-'+dd;
        var time = hh+'.'+mi;
        //console.log(today)
        this.state = {
            ...this.state,
            r_date :today,
            r_time :time
        }
    }

    onValueChangeB (value: string) {
        this.setState({
            r_b :value
        });
    }

    onValueChangeZ (value: string) {
        this.setState({
            r_z :value
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
        if(this.state.r_rec === "")
          Alert.alert('','กรุณาใส่ข้อร้องเรียน / เสนอแนะ', [
              {text: 'ตกลง'}])
        else{
          console.log(this.state)
        this.props.createRecom(this.state)
        Alert.alert('','ส่งข้อร้องเรียน/เสนอแนะ สำเร็จ', [
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
              <Text style={{fontWeight: 'bold'}}>อาคาร</Text>
              <Picker
                iosHeader="อาคาร"
                mode="dropdown"
                selectedValue={this.state.r_b}
                onValueChange={this.onValueChangeB.bind(this)}>
                <Item label="ช่วงเกษตรศิลปการ" value="ช่วงเกษตรศิลปการ" />
                <Item label="เทพรัตน์วิทยโชติ (ใหม่)" value="เทพรัตน์วิทยโชติ (ใหม่)" />
              </Picker>
            </ListItem>

              
            <ListItem>
              <Text style={{fontWeight: 'bold'}}>พื้นที่ให้บริการ</Text>
              <Picker
                iosHeader="พื้นที่ให้บริการ"
                mode="dropdown"
                selectedValue={this.state.r_z}
                onValueChange={this.onValueChangeZ.bind(this)}>
                <Item label="ชั้น 1" value="ชั้น 1" />
                <Item label="ชั้น 2" value="ชั้น 2" />
                <Item label="ชั้น 3" value="ชั้น 3" />
                <Item label="ชั้น 4" value="ชั้น 4" />
                <Item label="ชั้น 5" value="ชั้น 5" />

              </Picker>
            </ListItem>

            <ListItem>
           
              <InputGroup style={styles.box}>
                <Input placeholder='ข้อเสนอแนะ / เสนอแนะความคิดเห็น' value={this.state.r_rec} onChangeText={(r_rec) => this.setState({r_rec})}/>
              </InputGroup>
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
    createRecom(value){
      dispatch(createRecom(value))
  }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comment)

