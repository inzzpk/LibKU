
import React ,{Component} from 'react'
import {View , Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Thumbnail, H3 } from 'native-base';
import axios from 'axios';

import * as actions from '../actions'
import { connect } from 'react-redux'

const { fetchDbsInfo } = actions

class index extends Component {

    componentWillMount() {
    	this.props.fetchDbsInfo()
 	}


  render() {
    return (
      <Container>
        <Content>
			<List dataArray={this.props.dbsInfo} renderRow={(data) =>
				<ListItem key={data.id} 
							onPress={() => Actions.DBInfo({id:data.id , name:data.name , 
							link:data.link , intro:data.intro , url_pic:data.url_pic})} >
					<Text>{data.name}</Text>
				</ListItem>
			} />
        </Content>
      </Container>
    );
  }
}

const mapStatetoProps = (state) => ({
	dbsInfo: state.dbsInfo.value
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