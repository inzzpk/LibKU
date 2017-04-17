var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

import React ,{Component} from 'react'
import {View ,Image ,StyleSheet ,TouchableOpacity} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Text, Thumbnail,Button } from 'native-base'
import ImageSlider from 'react-native-image-slider';


export default class Home extends Component {
    render() {
    return (
      
    <View style={styles.container}>          
        <View style={styles.row}> 
          <View style={styles.col}>
            <TouchableOpacity onPress={Actions.Rule}>
              <Image style={styles.img}
              source={require('./img/rule.png') }
              />
            </TouchableOpacity>
          </View> 
  
          <View style={styles.col}>
            <TouchableOpacity onPress={Actions.Intro}>
              <Image style={styles.img}
                source={require('./img/intro.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.col}>
            <TouchableOpacity onPress={Actions.Comment}>
              <Image style={styles.img}
                source={require('./img/comment.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        

        <View style={styles.row}>
          <View style={styles.col}>
            <TouchableOpacity onPress={Actions.Database}>
                <Image style={styles.img}
                  source={require('./img/databases.png')}
                />
            </TouchableOpacity>
          </View> 

          <View style={styles.col}>
            <TouchableOpacity onPress={Actions.Request}>
                <Image style={styles.img}
                  source={require('./img/request.png')}
                />
            </TouchableOpacity>
          </View>

          <View style={styles.col}>
            <TouchableOpacity onPress={Actions.News}>
                <Image style={styles.img}
                  source={require('./img/reserve.png')}
                />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.row}>
          <View style={styles.col}>
            <TouchableOpacity onPress={Actions.Search}>
              <Image style={styles.img}
                source={require('./img/search.png')}
              />
            </TouchableOpacity>
          </View> 

          <View style={styles.col}>
            <TouchableOpacity onPress={Actions.Delivery}>
              <Image style={styles.img}
                source={require('./img/delivery.png')}
              />
            </TouchableOpacity>
          </View>


          
        </View> 
        <Button bordered info style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
              onPress={Actions.Login}>
                        เข้าสู่ระบบ
          </Button>
    </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  row:{
    padding: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col:{
    padding: 5,
  },
  img:{
    height: window.width/3.5,
    width: window.width/3.5,
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
                   =========================
const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  row:{
    padding: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col:{
    padding: 5,
  },
  img:{
    height: 110,
    width: 110,
    resizeMode: 'contain'
  }

})
                   =========================
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col:{
    padding: 5,
    flex : 1
  },
  img:{
    flex : 1,
    resizeMode: 'contain'
  }

})
                   ==========================

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