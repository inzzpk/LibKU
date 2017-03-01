import React ,{Component} from 'react'
import {View , Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content } from 'native-base';


export default class Reserve extends Component{
	render(){
		return(
			<Container>
                <Content padder>
					<Text>มี Application นี้โดยเฉพาะ จัดทำโดยทางเอกชน</Text>
				</Content>
            </Container>
		)
	}
} 