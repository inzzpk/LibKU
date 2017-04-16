import React ,{Component} from 'react'
import {View , Text ,StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content } from 'native-base';
import ImageSlider from 'react-native-image-slider';


export default class Reserve extends Component{
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null
        };
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageSlider 
                    images={[
                        `http://www.lib.ku.ac.th/web/images/LIBPR/PR-60/13850.jpg`,
                        `http://www.lib.ku.ac.th/web/images/LIBPR/PR-60/Safe%20House-BN.jpg`,
                        `http://www.lib.ku.ac.th/web/images/LIBPR/PR-60/Activity-April-14-BN.jpg`,
                    ]}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({position})}/>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
 })

// return(
// 			<Container>
//                 <Content padder>
// 					<Text>มี Application นี้โดยเฉพาะ จัดทำโดยทางเอกชน</Text>
// 				</Content>
//             </Container>
// 		)