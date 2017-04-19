import React ,{Component} from 'react'
import {View , Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Thumbnail, H3 } from 'native-base';
import axios from 'axios';

import { connect } from 'react-redux'


class profile extends Component {

    eiei () {
        var res = this.props.profile[0].home_address.toString()
        var split = res.split("จ.")
        var len = (split.length-1).toString()
        console.log(len)
        var split1 = split[len].split(" ")
        console.log(split1)

    }


  render() {
    
    return (
      <Container>
        <Content>
          <Text>{this.eiei()}</Text>
          
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