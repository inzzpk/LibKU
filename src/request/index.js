import React ,{Component} from 'react'
import {View , Text , StyleSheet ,TouchableHighlight ,Image} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux'
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Button, Picker } from 'native-base'

const Item = Picker.Item;

class index extends Component{

	 constructor(props) {
        super(props);
        this.state = {
            selected1: 'หนังสือภาษาไทย',
            title:'',
            author:'',
            isbn:'',
            publishers:'',
            r_name: this.props.profile.th_name.toString()
        }
    }
    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }

    sentForm() {
        console.log(this.state.title)
        console.log(this.state.author)
        console.log(this.state.selected1)
        console.log(this.state.isbn)
        console.log(this.state.publishers)
        console.log(this.state.r_name)
    // axios.get(`http://localhost:7777/chkLogin/${this.state.email}/${this.state.password}`)
    //   .then(res => 
    //         console.log(res.data[0].th_name)
        
    //   .catch(err => console.log(err))
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
                selectedValue={this.state.selected1}
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
                <Input placeholder='ชื่อเรื่อง (Title)' value={this.state.title} onChangeText={(title) => this.setState({title})}/>
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ชื่อผู้แต่ง (Author)' value={this.state.author} onChangeText={(author) => this.setState({author})}/>
              </InputGroup>
            </ListItem>
                    
            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='ISBN / ISSN (ถ้ามี)' value={this.state.isbn} onChangeText={(isbn) => this.setState({isbn})}/>
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup style={styles.box}>
                <Input placeholder='สำนักพิมพ์ (Publishers)' value={this.state.publishers} onChangeText={(publishers) => this.setState({publishers})}/>
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

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index)
