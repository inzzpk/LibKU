////////////USE THIS ////////////////
import React from 'react'
import {Scene , Router} from 'react-native-router-flux'
import Home from './Home'
import About from './About'
//import Rule from './Rule'
import Rule from './rule/index'
import Rate from './rule/Rate'
import Procedure from './rule/Procedure'
import Borrow from './rule/Borrow'
import Time from './rule/Time'
//import Intro from './Intro'
///////import Intro from './intro/index'
import Intro from './intro/test'
import Comment from './Comment'
//import Database from './Database'
import Database from './database/index'
import DBInfo from './database/test'
//import Request from './Request'
import Request from './request/index'
import Barcode from './request/Barcode'
import Reserve from './Reserve'
import Search from './Search'
import Login from './Login'
import BarcodeLogin from './BarcodeLogin'
//import Delivery from './Delivery'
import Delivery from './delivery/index'
//import Interlibloan from './Interlibloan'
import Interlibloan from './interlibloan/index'
import testContainer from 'LibKU/src/containers/testContainer'

const RouterComponent = () => {
	return (
			<Router sceneStyle={{paddingTop: 65}} navigationBarStyle={{backgroundColor: '#40E0D0' }}>
				<Scene key='Home' component={Home} title='KU Lib App' />
				<Scene key='About' component={About} title='About' />
				<Scene key='Rule' component={Rule} title='ระเบียบการใช้' />
					<Scene key='Rate' component={Rate} title='อัตราค่าบริการ' />
					<Scene key='Procedure' component={Procedure} title='ข้อปฏิบัติ' />
					<Scene key='Borrow' component={Borrow} title='ระเบียบการยืม' />
					<Scene key='Time' component={Time} title='เวลาทำการ' />
				<Scene key='Intro' component={Intro} title='แนะนำทรัพยากร' />
				<Scene key='Comment' component={Comment} title='ร้องเรียน / เสนอแนะ' />
				<Scene key='Database' component={Database} title='ฐานข้อมูล' />
					<Scene key='DBInfo' component={DBInfo} title='ฐานข้อมูล' />
				<Scene key='Request' component={Request} title='เสนอซื้อทรัพยากร' />
					<Scene key='Barcode' component={Barcode} title='Barcode' />
				<Scene key='Reserve' component={Reserve} title='จองใช้ทรัพยากร' />
				<Scene key='Search' component={Search} title='สืบค้นทรัพยากร' />
				<Scene key='Delivery' component={Delivery} title='นำส่งหนังสือ / บทความ' />
				<Scene key='Interlibloan' component={Login} title='ยืม / ถ่ายสำเนา ระหว่างห้องสมุด' />
					<Scene key='BarcodeLogin' component={BarcodeLogin} title='BarcodeLogin' />
			</Router>
		)
}

export default RouterComponent

//<Scene key='test' component={testContainer} title='Test' hideNavBar={true} />