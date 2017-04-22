import React ,{Component} from 'react'
import {View , Text , StyleSheet ,TouchableHighlight ,Image} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux'
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Button, Picker } from 'native-base'
import * as actions from '../actions'

const { createRequest } = actions

const Item = Picker.Item;

class index extends Component{

	 constructor(props) {
        super(props);
        this.state = {
            r_title: this.props.bookInfo?this.props.bookInfo.title.toString():'',
            r_type: 'หนังสือภาษาไทย',
            r_author: this.props.bookInfo?this.props.bookInfo.author.toString():'',
            r_isbn: this.props.bookInfo?this.props.bookInfo.isbn.toString():'',
            r_pub: this.props.bookInfo?this.props.bookInfo.pbulish2.toString():'',
            r_name: this.props.profile?this.props.profile.th_name.toString():'',
            r_mail: this.props.profile?this.props.profile.mail.toString():'',
            r_tel: this.props.profile?this.props.profile.phone.toString():''
            // r_fac: '',
            // r_year: '',
            // r_date: ''
        }
    }

    // componentWillReceiveProps (nextProps) {

    // if (nextProps === this.props) {
    //     return console.log("eiei");
    // }else return console.log(nextProps.bookInfo.title);


    // this.setState({
    //   r_title: nextProps.bookInfo.title.toString(),
    //   r_type: 'หนังสือภาษาไทย',
    //   r_author: nextProps.bookInfo.author,
    //   r_isbn: nextProps.bookInfo.isbn,
    //   r_pub: nextProps.bookInfo.pbulish2,
    // });

    // }

   getProfileInfo() {
      if(this.props.profile === undefined)
        { console.log("Nooo")}
      else
        {        
          //console.log(this.state.r_title)
          var res = this.props.profile.faculty.toString()
          var split = res.split(".")
          var len = (split.length-1).toString()
            //console.log(len)
          var split1 = split[len].split(" ")
          var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth()+1; //January is 0!

          var yyyy = today.getFullYear();
          if(dd<10){
              dd='0'+dd;
          } 
          if(mm<10){
              mm='0'+mm;
          } 
          var today = yyyy+'-'+mm+'-'+dd;
          this.state = {
            ...this.state,
            r_fac :split1[0],
            r_year :yyyy+543,
            r_date :today
            // r_name: this.props.profile.th_name.toString(),
            // r_mail: this.props.profile.mail.toString(),
            // r_tel: this.props.profile.phone.toString() 
          }
        }
        
        
   }

    onValueChange (value: string) {
        this.setState({
          r_type :value
        });
    }

    sentForm() {
      //this.getProfileInfo()
      // this.setState({
      //   r_name: this.props.profile?this.props.profile.th_name.toString():'',
      //   r_mail: this.props.profile?this.props.profile.mail.toString():'',
      //   r_tel: this.props.profile?this.props.profile.phone.toString():''
      // })
      console.log(this.state)
      //this.props.createRequest(this.state)
    }




	render(){
		return(
			 <Container>
        <Content padder>
        	<TouchableHighlight onPress={Actions.Barcode}>
              <Image style={{height: 100 , resizeMode: 'contain' , alignSelf: 'center' , marginBottom: 20}}
              source={require('./img/barcode.png') }
              />
            </TouchableHighlight>

          <List>
          	<Text style={{fontWeight: 'bold'}}>ประเภททรัพยากรสารสนเทศ</Text>
          	<ListItem>
          		<Picker
                iosHeader="ประเภททรัพยากรสารสนเทศ"
                mode="dropdown"
                selectedValue={this.state.r_type}
                onValueChange={this.onValueChange.bind(this)}>
                <Item label="หนังสือภาษาไทย (Thai Books)" value="หนังสือภาษาไทย" />
                <Item label="หนังสือภาษาต่างประเทศ (Foreign books)" value="หนังสือภาษาต่างประเทศ" />
                <Item label="วารสารภาษาไทย (Thai Journals)" value="วารสารภาษาไทย" />
                <Item label="วารสารภาษาต่างประเทศ (Foreign Journals)" value="วารสารภาษาต่างประเทศ" />
                <Item label="โสตทัศนวัสดุ (audiovisuals)" value="โสตทัศนวัสดุ" />
              </Picker>
          	</ListItem>
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ชื่อเรื่อง (Title)' value={this.state.r_title} onChangeText={(r_title) => this.setState({r_title})}/>
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ชื่อผู้แต่ง (Author)' value={this.state.r_author} onChangeText={(r_author) => this.setState({r_author})}/>
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ISBN / ISSN (ถ้ามี)' value={this.state.r_isbn} onChangeText={(r_isbn) => this.setState({r_isbn})}/>
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='สำนักพิมพ์ (Publishers)' value={this.state.r_pub} onChangeText={(r_pub) => this.setState({r_pub})}/>
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
  profile: state.profile.val[0],
  bookInfo: state.bookInfo.valu[0]
})

const mapDispatchToProps = (dispatch) => ({
    createRequest(value){
    dispatch(createRequest(value))
  }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index)
