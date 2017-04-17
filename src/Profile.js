import React ,{Component} from 'react'
import {View , Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Thumbnail, H3 } from 'native-base';
import axios from 'axios';

import { connect } from 'react-redux'


class profile extends Component {


  render() {
    return (
      <Container>
        <Content>
          <Text>{this.props.profile.toString()}</Text>
        </Content>
      </Container>
    );
  }
}

const mapStatetoProps = (state) => ({
	profile: state.profile.val
})

const mapDispatchtoProps = (dispatch) => ({

})

export default connect(
	mapStatetoProps,
	mapDispatchtoProps
)(profile)