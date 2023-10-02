import React from 'react';
import { Page, Text, View } from '@react-pdf/renderer';

//import styles 
import styles from './style'
//import mockData
import mockData from './mockData';
// Register the Thai font need to change to Saraban when done



const PageFive: React.FC = () => {
  return (
    <Page size={'A4'} style={styles.body}>
       <View >
        {/* section 1 */}
            <View style={{marginLeft: '35px'}}>

                <View style={styles.flexRow }>
                        <div style={styles.flexJustCenter}>
                        <View style={styles.bullet}></View>
                        </div>
                        <Text style={styles.space200px}>ชื่อโรค</Text>
                        <Text>ปีที่ตรวจพบ</Text>
                </View>
                <View style={styles.flexRow }>
                        <div style={styles.flexJustCenter}>
                        <View style={styles.bullet}></View>
                        </div>
                        <Text style={styles.space200px}>ชื่อโรค</Text>
                        <Text>ปีที่ตรวจพบ</Text>
                </View>
                <View style={[styles.flexRow ]}>
                    <Text style={[styles.bold,styles.space50px ]}>คนที่ 2</Text>
                    <Text style={styles.space100px}>ชื่อ    {mockData.firstName}</Text>
                    <Text style={styles.space150px}>สกุล       {mockData.lastName}</Text>
                    <Text style={styles.space75px}>ปีเกิด       {mockData.birthYear}</Text>
                    <Text style={styles.space50px}>อายุ    {mockData.age}</Text>
                    <Text style={styles.space50px}>ปี</Text> 
                </View>
                <View style={styles.flexRow}>
                        <Text style={styles.space150px}>ความสัมพันธ์กับผู้สมัคร</Text>
                        <Text style={styles.space150px}>วุฒิการศึกษา       {"ปริญญาตรี"}</Text>
                        <Text style={styles.space150px}>หมายเลขโทรศัพท์       {mockData.phone}</Text>
                    </View>
                    <Text>โรคประจำตัว</Text>
                    <View style={styles.flexRow }>
                    <div style={styles.flexJustCenter}>
                    <View style={styles.bullet}></View>
                    </div>
                    <Text style={styles.space200px}>ชื่อโรค</Text>
                    <Text>ปีที่ตรวจพบ</Text>
                </View>
                <View style={styles.flexRow }>
                    <div style={styles.flexJustCenter}>
                    <View style={styles.bullet}></View>
                    </div>
                    <Text style={styles.space200px}>ชื่อโรค</Text>
                    <Text>ปีที่ตรวจพบ</Text>
                </View>
            </View>
        {/* section 2 */}
            <View>
                <Text style={styles.bold}>ประวัติการศึกษา</Text>
                <View style={[styles.flexRow , {gap: '5px'}]}>
                    <Text>14.</Text>
                    <Text style={styles.space350px}>จบมัธยมศึกษาตอนปลายจากโรงเรียน</Text>
                    <Text style={styles.space100px}>จังหวัด       {mockData.county}</Text>
                    <Text style={styles.space50px}>GPA  {3.5}</Text>
                </View>
                <View style={[styles.flexRow , {gap: '5px'}]}>
                    <Text>15.</Text>
                    <Text style={styles.space350px}>ประวัติการศึกษาระดับอุดมศึกษา</Text>
                    
                </View>
        {/* table 1 */}
                <View style={[styles.flexRow, {marginLeft:'15px'}]}>
                            <View style={{width: '15%'}}>
                                <View style={[styles.tableLeft,]}>
                                <Text>ปีที่เข้าศึกษา</Text>
                            </View>
                            <View style={[styles.tableRowLeft,]}>
                                <Text>{mockData.birthYear}</Text>
                            </View>
                        </View>
                        <View style={{width: '20%'}}>
                            <View style={[styles.tableMiddle ]}>
                                <Text>มหาวิทยาลัย</Text>
                            </View>
                            <View style={[styles.tableRowMiddle ]}>
                                <Text>{mockData.scholarName}</Text>
                            </View>
                        </View>
                        <View style={{width: '20%'}}>
                            <View style={[styles.tableRight]}>
                                <Text>คณะ</Text>
                            </View>
                            <View style={[styles.tableRowRight]}>
                                <Text></Text>
                            </View>
                        </View>
                        <View style={{width: '20%'}}>
                            <View style={[styles.tableRight]}>
                                <Text>สาขาวิชา</Text>
                            </View>
                            <View style={[styles.tableRowRight]}>
                                <Text></Text>
                            </View>
                        </View>
                        <View style={{width: '15%'}}>
                            <View style={[styles.tableRight]}>
                                <Text>ระยะเวลาที่ศึกษา</Text>
                            </View>
                            <View style={[styles.tableRowRight]}>
                                <Text></Text>
                            </View>
                        </View>
                        <View style={{width: '10%'}}>
                            <View style={[styles.tableRight]}>
                                <Text>GPA</Text>
                            </View>
                            <View style={[styles.tableRowRight]}>
                                <Text></Text>
                            </View>
                        </View>
                </View>
                <View style={[styles.flexRow , {gap: '5px'}]}>
                    <Text>16.</Text>
                    <Text style={styles.space350px}>ผลการเรียนและการขอรับทุน</Text> 
                </View>
        {/* table 2 */}
                <View style={[styles.flexRow, {marginLeft:'15px'}]}>
                            <View style={{width: '5%'}}>
                                <View style={[styles.tableLeft, {height: '40px'}]}>
                                    <Text>ชั้นปี</Text>
                                </View>
                                <View style={[styles.tableRowLeft,]}>
                                    <Text>ม.6</Text>
                                </View>
                            </View>
                            <View style={{width: '25%'}}>
                                <View style={[styles.tableMiddle ]}>
                                <Text>GPA</Text>
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={[styles.tableRowLeft ,{width:'35%'}]}>
                                    <Text>เทอม 1</Text>
                                    </View>
                                    <View style={[styles.tableRowMiddle ,{width:'35%'}]}>
                                    <Text>เทอม 2</Text>
                                    </View>
                                    <View style={[styles.tableRowRight,{width:'35%'}]}>
                                    <Text>ฤดูร้อน</Text>
                                    </View>
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={[styles.tableRowLeft ,{width:'35%'}]}>
                                        <Text>{mockData.grade}</Text>
                                    </View>
                                    <View style={[styles.tableRowMiddle ,{width:'35%'}]}>
                                        <Text>{mockData.grade}</Text>
                                    </View>
                                    <View style={[styles.tableRowRight,{width:'35%'}]}>
                                        <Text>{mockData.grade}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{width: '20%'}}>
                                <View style={[styles.tableRight]}>
                                <Text>กยศ.</Text>
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={[styles.tableRowRight,{width:'50%'}]}>
                                    <Text>รายเดือน</Text>
                                    </View>
                                    <View style={[styles.tableRowRight ,{width:'50%'}]}>
                                    <Text>ค่าเล่าเรียน</Text>
                                    </View>
                                    
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={[styles.tableRowRight,{width:'50%'}]}>
                                    <Text>{mockData.money}</Text>
                                    </View>
                                    <View style={[styles.tableRowRight ,{width:'50%'}]}>
                                    <Text>{mockData.money}</Text>
                                    </View>
                                    
                                </View>
                            </View>
                            <View style={{width: '50%'}}>
                                <View style={[styles.tableRight]}>
                                <Text>ทุนคณะวิศวกรรมศาสตร์</Text>
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={[styles.tableRowRight ,{width:'35%'}]}>
                                    <Text>มูลค่าทุน</Text>
                                    </View>
                                    <View style={[styles.tableRowRight,{width:'35%'}]}>
                                    <Text>สถานที่ทำงานทุน</Text>
                                    </View>
                                    <View style={[styles.tableRowRight,{width:'35%'}]}>
                                    <Text>หมายเหตุ</Text>
                                    </View>
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={[styles.tableRowRight ,{width:'35%'}]}>
                                    <Text></Text>
                                    </View>
                                    <View style={[styles.tableRowRight,{width:'35%'}]}>
                                    <Text></Text>
                                    </View>
                                    <View style={[styles.tableRowRight,{width:'35%'}]}>
                                    <Text></Text>
                                    </View>
                                </View>
                            </View>
                        
                </View>
                <Text style={[styles.bold, {marginTop: '15px'}]}>กิจกรรมที่เคยเข้าร่วม</Text>
                <Text>17.</Text>
            </View>
        </View>
    </Page>
)}
export default PageFive