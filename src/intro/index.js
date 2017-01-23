
import React ,{Component} from 'react'
import {View , Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Thumbnail, H3 } from 'native-base';

export default class index extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail square size={100} source={require('./img/nov2.jpg')} />
                            <Text style={{fontWeight: 'bold'}}>ต้นไม้ ป่า ห้วยขาแข้ง</Text>
                            <Text note>เนื้อเรื่อง สรายุทธ บุณยะเวชชีวิน, รุ่งสุริยา บัวสาลี ; ภาพลายเส้น ไพรัช ระยางกูล ; จัดการภาคสนาม ยุทธการ จำลองราช.ราชบุรี : มูลนิธิกระต่ายในดวงจันทร์, 2559.</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={100} source={require('./img/nov4.jpg')} />
                            <Text style={{fontWeight: 'bold'}}>ภูมิทัศน์พื้นฐาน</Text>
                            <Text note>ศศิยา ศิริพานิช.นครปฐม : ภาควิชาพืชสวน คณะเกษตร กำแพงแสน มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน, 2558.</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={100} source={require('./img/nov5.jpg')} />
                            <Text style={{fontWeight: 'bold'}}>การวิเคราะห์และออกแบบเชิงวัตถุ</Text>
                            <Text note>อัษฎาพร ทรัพย์สมบูรณ์ ; บรรณาธิการ กิตติ ภักดีวัฒนะกุล.กรุงเทพฯ : เคทีพี, 2557</Text>
                        </ListItem>

                    </List>
                </Content>
            </Container>
        );
    }
}