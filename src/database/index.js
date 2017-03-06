
import React ,{Component} from 'react'
import {View , Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Thumbnail, H3 } from 'native-base';
import axios from 'axios';

import * as actions from '../actions'
import { connect } from 'react-redux'

const { fetchDbsInfo } = actions

class index extends Component {

    //state = { books: [] }

    componentWillMount() {
    	this.props.fetchDbsInfo()
 	}
 

  // renderBooks() {
  //   return test.value.map((book,index) =>
  //     <ListItem key={index} onPress={Actions.DBInfo}>
  //         <Text key={book.name} style={{fontWeight: 'bold'}}>{book.name}</Text>
  //     </ListItem>          
  //   );
  // }

  render() {
    return (
      <Container>
        <Content>
			<List dataArray={this.props.test.value} renderRow={(data,index) =>
				<ListItem ListItem key={index} onPress={Actions.DBInfo}>
					<Text>{data.name}</Text>
				</ListItem>
			} />
        </Content>
      </Container>
    );
  }
}

const mapStatetoProps = (state) => ({
	test: state.test
})

const mapDispatchtoProps = (dispatch) => ({
	fetchDbsInfo(){
		dispatch(fetchDbsInfo())
	}
})

export default connect(
	mapStatetoProps,
	mapDispatchtoProps
)(index)