import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Camera from 'react-native-camera';
import axios from 'axios';
import { API_END_POINT } from '../config'
import { connect } from 'react-redux'
import * as actions from '../actions'

const { fetchByBarcode } = actions

class Barcode extends Component {

  constructor(props) {
    super(props);
    this.state = {
      barcode_number: null,
      name:''
    };
  }

  
  getinfo() {
      console.log(this.state.barcode_number)
      this.props.fetchByBarcode(this.state.barcode_number)
  }



  render() {
    return (
      <View style={styles.container}>
        <Camera
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          barcodeScannerEnabled = {true}
          onBarCodeRead = {(obj)=>this.setState({barcode_number:obj.data})}
          ref={(cam) => {this.camera = cam;}}
          >
          <TouchableHighlight onPress={this.getinfo.bind(this)}><Text style={styles.capture}>{this.state.barcode_number}</Text>
          </TouchableHighlight>
          <Text>{this.state.name}</Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  fetchByBarcode(barcode){
    dispatch(fetchByBarcode(barcode))
  }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Barcode)