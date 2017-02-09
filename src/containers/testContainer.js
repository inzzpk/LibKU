import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Button, ListItem, List, Header } from 'native-base'
import { Actions } from 'react-native-router-flux'
import * as actions from 'LibKU/src/actions'

const { testAction } = actions

class testContainer extends Component {

	componentWillMount(){
		this.props.testAction()
	}

	render(){
		return (
			<Container>
				<Header>
					<Button onPress={() => Actions.Home({ type: 'reset' })}>Go To Home</Button>
				</Header>
				<Content>
                    <List dataArray={this.props.test.value} renderRow={(data) =>
                        <ListItem>
                            <Text>{data.title}</Text>
                        </ListItem>
                    } />
				</Content>
			</Container>
		)
	}
}

const mapStatetoProps = (state) => ({
	test: state.test
})

const mapDispatchtoProps = (dispatch) => ({
	testAction(){
		dispatch(testAction())
	}
})

export default connect(
	mapStatetoProps,
	mapDispatchtoProps
)(testContainer)