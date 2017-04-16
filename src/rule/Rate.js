var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

import React ,{Component} from 'react'
import {View ,Image , StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Text, Card, CardItem } from 'native-base';

export default class Rate extends Component{
	render(){
		return(

         <Container>
                <Content padder>
                    <Card>
                        <CardItem header>                        
                            <Text>อัตราค่าเข้าใช้ห้องสมุด</Text>
                        </CardItem>

                        <CardItem>                        
                            <Text>
                                <Image style={{height: window.width-80 ,width: window.width-50 , resizeMode: 'contain' , alignSelf: 'center'}} 
                                source={require('./img/rate.png') } 
                                />
                            </Text>
                        </CardItem>
                   </Card>
                   <Card>
                        <CardItem header>                        
                            <Text>อัตราค่าบริการทรัพยากรห้องสมุด บริการภายในประเทศ ผู้ใช้บริการมารับเอง  หรือส่งไปรษณีย์ธรรมดา</Text>
                        </CardItem>
                        <CardItem>                        
                                <Text>
                                1. อัตราแผ่นละ  2  บาท (รวมค่าส่ง)
                                </Text>
                                <Text>
                                2. สำเนาต่ำกว่า 20 แผ่น คิดค่าส่ง 10 บาท (เกิน  200  แผ่น  ส่วนที่เกินอัตราแผ่นละ  1  บาท)
                                </Text>
                                <Text>
                                3. นิสิต  และบุคลากร  มหาวิทยาลัยเกษตรศาสตร์ราคา แผ่นละ  1  บาท  ค่าส่งไปรษณีย์ด่วนพิเศษคิดตามน้ำหนักเอกสาร 
                                (ไม่ต่ำกว่าเล่มละ 30 บาท)  ค่าส่งเอกสารโดยวิธีสแกน (Scan) หรือแนบแฟ้มกับ e-mail   ราคา แผ่นละ 5.00 บาท 
                                ( หน่วยงานเอกชน ราคาแผ่นละ10.00 บาท ) ครั้งละไม่เกิน 10 แผ่น ค่าสำเนาเอกสารระหว่างห้องสมุดวิทยาเขตราคาแผ่นละ  1.00  บาท  
                                ค่าส่งไฟล์เอกสารที่มีฉบับเต็ม ( Fulltext ) ราคาเรื่องละ 50.00 บาท ได้แก่ บทความวารสาร หรือวิทยานิพนธ์ 
                                (หน่วยงานเอกชน ราคาเรื่องละ     200.00 บาท) ภายในกรุงเทพฯและปริมณฑล   จำนวน 1- 5  แผ่นแรก ราคา  25 บาท 
                                แผ่นต่อไป ราคาแผ่นละ  3  บาท  ต่างจังหวัด  จำนวน 5 แผ่นแรกราคาแผ่นละ  5 บาท  แผ่นต่อไป ราคาแผ่นละ 2  บาท บวกค่าทางไกล
                                </Text>
                                <Text>
                                4. บริการยืม (ฉบับจริง) ระหว่างห้องสมุด
                                </Text>
                                <Text>
                                    - ส่งไปรษณีย์ธรรมดา ราคาเล่มละ 50 บาท
                                </Text>
                                <Text>
                                    - ส่งไปรษณีย์ด่วนพิเศษ ( EMS ) อัตราค่าส่ง  คิดตามน้ำหนักเอกสาร  ( ไม่ต่ำกว่าเล่มละ 30 บาท )
                                 </Text>
                                 <Text>
                                    - ค่าส่งแบบลงทะเบียน ราคา เล่มละ  25 บาท
                            </Text>
                        </CardItem>
                   </Card>
                    <Card>
                        <CardItem header>                        
                            <Text>อัตราค่าบริการทรัพยากรห้องสมุด บริการต่างประเทศ </Text>
                        </CardItem>

                        <CardItem>                        
                            <Text>
                                ถ่ายเอกสารระหว่างห้องสมุด  จำนวน 5  แผ่นแรก  อัตรา U.S.$ 15.00  แผ่นต่อไปอัตราแผ่นละ U.S.$ 0.50
                            </Text>
                        </CardItem>
                   </Card>
                    <Card>
                        <CardItem header>                        
                            <Text>อัตราค่าบริการทรัพยากรห้องสมุด บริการต่างประเทศ  (ขอจากต่างประเทศ)</Text>
                        </CardItem>

                        <CardItem>                        
                            <Text>
                                1. บทความ ราคาเรื่องละ 750 บาท (ไม่จำกัดหน้า)
                                </Text>
                                <Text>
                                2. สำเนาวิทยานิพนธ์ ราคาเล่มละ 2,900 บาท
                                </Text>
                                <Text>
                                3.ยืมตัวเล่มจากต่างประเทศ  ราคาเล่มละ  2,000 บาท
                            </Text>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
                            
                                                           
		)
	}
} 

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },

})

        // <Container>
        //     <Content padder>
        //         <Card>
        //             <CardItem padder>                        
        //                 <Text>อัตราค่าเข้าใช้ห้องสมุด</Text>
        //                 <Image style={{height: window.width ,width: window.width , resizeMode: 'contain' , alignSelf: 'center'}} 
        //                 source={require('./img/rate.png') } 
        //             />
        //             </CardItem>
        //         </Card>      

        //     </Content>
        // </Container>