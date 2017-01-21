import React ,{Component} from 'react'
import {View ,Image ,StyleSheet ,TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Text, Thumbnail } from 'native-base'


export default class Home extends Component {
    render() {
    return (
      
    <View style={styles.container}>
        
        <View style={styles.row}>
        </View>
        <View style={styles.row}>
        </View>
        <View style={styles.row}> 
            <TouchableHighlight onPress={Actions.Rule}>
                <View style={styles.col}>
                    <Image style={styles.img}
                    source={require('./img/rule.png') }
                    />
                </View> 
            </TouchableHighlight>
        
            <TouchableHighlight onPress={Actions.Intro}>
                <View style={styles.col}>
                    <Image style={styles.img}
                      source={require('./img/intro.png')}
                    />
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={Actions.Comment}>
                <View style={styles.col}>
                    <Image style={styles.img}
                      source={require('./img/comment.png')}
                    />
                </View>
            </TouchableHighlight>
        </View>
        

        <View style={styles.row}>
            <View style={styles.col}>
            <Image style={styles.img}
              source={require('./img/databases.png')}
            />
          </View> 
          <View style={styles.col}>
            <Image style={styles.img}
              source={require('./img/request.png')}
            />
          </View>
          <View style={styles.col}>
            <Image style={styles.img}
              source={require('./img/reserve.png')}
            />
          </View>
        </View>


        <View style={styles.row}>
          <View style={styles.col}>
            <Image style={styles.img}
              source={require('./img/search.png')}
            />
          </View> 
          <View style={styles.col}>
            <Image style={styles.img}
              source={require('./img/delivery.png')}
            />
          </View>
          <View style={styles.col}>
            <Image style={styles.img}
              source={require('./img/interloan.png')}
            />
          </View>
        </View> 

    </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  row:{
    flex:1,
    flexDirection: 'row',
  },
  col:{
    flex:1,
  },
  img:{
    flex:1,
    resizeMode: 'contain'
  }

 })


/*
import { Container, Content, Card, CardItem, Text, Icon } from 'native-base';

---------
<List>
                        <ListItem button onPress={Actions.Rule}>
                            <Thumbnail source={require('./img/rule.png')} />
                            <Text>ระเบียบการใช้</Text>
                        </ListItem>
                   </List>
                   ------------------------

export default class Home extends Component{
	render(){
		return(
			<Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Text onPress={Actions.Rule}> Go Rule </Text>
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Intro}> Go Intro </Text>                      
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Comment}> Go Comment </Text>                     
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Database}> Go Database </Text>                       
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Request}> Go Request </Text>
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Reserve}> Go Reserve </Text>                    
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Search}> Go Search </Text>                    
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Delivery}> Go Delivery </Text>                       
                        </CardItem>
                        <CardItem>
                            <Text onPress={Actions.Interlibloan}> Go Interlibloan </Text>                     
                        </CardItem>

                   </Card>
                </Content>
            </Container>
		)
	}
} 
*/