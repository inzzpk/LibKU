var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

import React ,{Component} from 'react'
import {View ,Image ,StyleSheet ,TouchableOpacity} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Text, Thumbnail,Button, Header, Icon, Title } from 'native-base'
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
            <TouchableOpacity onPress={Actions.News}>
                <Image style={styles.img}
                  source={require('./img/news.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        

        <View style={styles.row}>
          <View style={styles.col}>
            <TouchableOpacity onPress={Actions.Comment}>
              <Image style={styles.img}
                source={require('./img/comment.png')}
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
            <TouchableOpacity onPress={Actions.Delivery}>
              <Image style={styles.img}
                source={require('./img/delivery.png')}
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
            <TouchableOpacity onPress={Actions.Database}>
                <Image style={styles.img}
                  source={require('./img/databases.png')}
              />
            </TouchableOpacity>
          </View>


          
        </View> 
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