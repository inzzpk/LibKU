import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Spinner } from 'native-base';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  // Button,
} from 'react-native';
import { Button } from 'native-base';
import Camera from 'react-native-camera';
import Modal from 'react-native-modalbox';
import axios from 'axios';
import { API_END_POINT } from '../config'

import * as actions from '../actions'

const { fetchByBarcode } = actions

class Search extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	barcode: null,
	  	searching:false,
	  	findingButton:false,
	  };
	}

	onCloseModalBox(){
		this.setState({
			searching:false,
			barcode:null,
		})
	}


	onBarCodeRead(obj){
		if (!this.state.searching){
			this.setState({barcode:obj.data,searching: true})
			console.log(obj.data)
			//this.props.fetchByBarcode(obj.data).then( ()=> {
			axios.get(`${API_END_POINT}/byBarcode/${this.state.barcode}`)
		      .then(res => {
		      	this.refs.modal3.open()
		        this.setState({ 
		        	title: res.data[0].title,
		        	isbn: res.data[0].isbn,
		        	//searching: true
		        })
		      })        
		      .catch(err => {
				this.refs.modal3.open()
		        this.setState({ 
		        	title: '',
		        	isbn: 'NOT FOUND',
		        	searching:false})
			})
		}
		
	}

	getinfo() {
		//console.log(this.state.isbn)
      this.props.fetchByBarcode(this.state.isbn)
  	}

 //  	componentDidMount(){ // debuging
	// 	setTimeout( ()=>this.onBarCodeRead({'data':'9786161800963'}),500) 
	// }



	renderModal(){		
		return	<View style={{alignItems:'center',justifyContent:'center'}}>
					<Text style={[styles.text,{color:'green'}]}>Barcode : {this.state.isbn}</Text>
					<Text style={styles.text}>{this.state.title}</Text>
					<Button bordered info style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }} onPress={this.getinfo.bind(this)}>ตกลง</Button>
				</View>

	}

	renderCamera(){
		if (!this.state.searching)
		return <Camera
					style={styles.preview}
					aspect={Camera.constants.Aspect.fill}
					barcodeScannerEnabled = {true}
					onBarCodeRead={ (obj) => this.onBarCodeRead(obj)}
					ref={(cam) => {
						this.camera = cam;
					}}
				>
					<View style={styles.rectangleContainer}>
						<View style={styles.rectangle} />
					</View>
				</Camera>
	}
	render() {
		return (
				<View style={styles.container}>
					{this.renderCamera()}
					<Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={false} onClosed={ ()=> this.onCloseModalBox()}>
			          {this.renderModal()}
			        </Modal> 
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
	flex: 1,
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
  },
   rectangleContainer: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'transparent'
  },
  rectangle: {
	height: Dimensions.get('window').height/2,
	width: 220,
	borderWidth: 2,
	borderColor: '#00FF00',
	backgroundColor: 'transparent'
  },
  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal3: {
    height: 250,
    width: 250,
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    fontSize: 18,
    padding:5,
    fontWeight:'bold',
  }
})

const mapStateToProps = (state) => ({
	bookInfo: state.bookInfo.valu[0]
})

const mapDispatchToProps = (dispatch) => ({
  fetchByBarcode(barcode){
    dispatch(fetchByBarcode(barcode))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Search)