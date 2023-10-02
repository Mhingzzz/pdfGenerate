import React from 'react';
import { Page, Text, View } from '@react-pdf/renderer';

//import styles 
import styles from './style'
//import mockData
import mockData from './mockData';
// Register the Thai font need to change to Saraban when done



const PageTwo: React.FC = () => {
  return (
    <Page size={'A4'} style={styles.body}>
       <View >
          
        <Text style={styles.bold}>ประวัติครอบครัว</Text>
         
          <View style={[ styles.flexRow, styles.normal ,{gap:'5px' }]}>
        
            <Text>9.</Text>        
            <div>
              <View style={[styles.flexRow]}>
                  <Text style={styles.space125px}>ผู้สมัครเป็นบุตรลำดับที่   {5730}</Text>
                  <Text style={styles.space75px}>จากทั้งสิ้น    {mockData.age}</Text>
                  <Text style={styles.space100px}>คน</Text>
              </View >

            </div>
            
          </View>
          <View style={[ styles.flexRow, styles.normal ,{gap:'5px' }]}>
        
            <Text>10.</Text>        
            <div>
              <View style={[styles.flexRow]}>
                  <Text style={styles.space125px}>ความสัมพันธ์ในครอบครัว</Text>
                  
              </View >
            </div>
            
          </View>
          <View style={[ styles.flexRow, styles.normal ,{gap:'5px' }]}>
        
            <Text>11.</Text>        
            <div>
              {/* section 1 */}
              <View style={[styles.flexRow]}>
                  <Text style={[styles.bold, styles.space75px]}>บิดาโดยกำเนิด</Text>
                  <Text style={styles.space100px}>ชื่อ</Text>
                  <Text style={styles.space150px}>สกุล</Text>
                  <Text style={styles.space75px}>ปีเกิด</Text>
                  <Text style={styles.space50px}>อายุ</Text>
                  <Text style={styles.space50px}>ปี</Text>
              </View >
              <View style={styles.flexRow }>
                <Text style={styles.space150px}>วุฒิการศึกษา</Text>
                <Text style={styles.space175px}>หมายเลขโทรศัพท์</Text>
                <Text style={styles.space50px}>ปีที่เสียชีวิต</Text>
              </View>
              
              <Text>ยานพาหนะปัจจุบัน</Text>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
                <Text>ยี่ห้อยานพาหนะ</Text>
              </View>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
                <Text>ยี่ห้อยานพาหนะ</Text>
              </View>
              <Text>งานปัจจุบัน</Text>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ลักษณะงาน</Text>
                <Text style={styles.space150px}>ตำแหน่ง</Text>
                <Text>พ.ศ. ที่ทำงาน</Text>
              </View>
              <View style={[styles.flexRow ,{marginLeft: '20px'}]}>
                <Text style={styles.space350px}>สถานที่ทำงาน</Text>
                <Text style={styles.space100px}>รายได้ต่อเดือน   {mockData.money}</Text>
                <Text>บาท</Text>
              </View>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ลักษณะงาน</Text>
                <Text>ตำแหน่ง</Text>
              </View>
              <View style={[styles.flexRow ,{marginLeft: '20px'}]}>
                <Text style={styles.space350px}>สถานที่ทำงาน</Text>
                <Text style={styles.space100px}>รายได้ต่อเดือน   {mockData.money}</Text>
                <Text>บาท</Text>
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
              {/* section 2 */}
              <View style={[styles.flexRow]}>
                  <Text style={[styles.bold, styles.space75px]}>มารดาโดยกำเนิด</Text>
                  <Text style={styles.space100px}>ชื่อ</Text>
                  <Text style={styles.space150px}>สกุล</Text>
                  <Text style={styles.space75px}>ปีเกิด</Text>
                  <Text style={styles.space50px}>อายุ</Text>
                  <Text style={styles.space50px}>ปี</Text>
              </View >
              <View style={styles.flexRow }>
                <Text style={styles.space150px}>วุฒิการศึกษา</Text>
                <Text style={styles.space175px}>หมายเลขโทรศัพท์</Text>
                <Text style={styles.space50px}>ปีที่เสียชีวิต</Text>
              </View>
              
              <Text>ยานพาหนะปัจจุบัน</Text>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
                <Text>ยี่ห้อยานพาหนะ</Text>
              </View>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
                <Text>ยี่ห้อยานพาหนะ</Text>
              </View>
              <Text>งานปัจจุบัน</Text>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ลักษณะงาน</Text>
                <Text style={styles.space150px}>ตำแหน่ง</Text>
                <Text>พ.ศ. ที่ทำงาน</Text>
              </View>
              <View style={[styles.flexRow ,{marginLeft: '20px'}]}>
                <Text style={styles.space350px}>สถานที่ทำงาน</Text>
                <Text style={styles.space100px}>รายได้ต่อเดือน   {mockData.money}</Text>
                <Text>บาท</Text>
              </View>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ลักษณะงาน</Text>
                <Text>ตำแหน่ง</Text>
              </View>
              <View style={[styles.flexRow ,{marginLeft: '20px'}]}>
                <Text style={styles.space350px}>สถานที่ทำงาน</Text>
                <Text style={styles.space100px}>รายได้ต่อเดือน   {mockData.money}</Text>
                <Text>บาท</Text>
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
              {/* section 3 */}
              <View style={[styles.flexRow]}>
                  <Text style={[styles.bold, styles.space75px]}>บิดาปัจจุบัน</Text>
                  <Text style={styles.space100px}>ชื่อ</Text>
                  <Text style={styles.space150px}>สกุล</Text>
                  <Text style={styles.space75px}>ปีเกิด</Text>
                  <Text style={styles.space50px}>อายุ</Text>
                  <Text style={styles.space50px}>ปี</Text>
              </View >
              <View style={styles.flexRow }>
                <Text style={styles.space150px}>วุฒิการศึกษา</Text>
                <Text style={styles.space175px}>หมายเลขโทรศัพท์</Text>
                <Text style={styles.space50px}>ปีที่เสียชีวิต</Text>
              </View>
              
              <Text>ยานพาหนะปัจจุบัน</Text>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
                <Text>ยี่ห้อยานพาหนะ</Text>
              </View>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
                <Text>ยี่ห้อยานพาหนะ</Text>
              </View>
              <Text>งานปัจจุบัน</Text>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ลักษณะงาน</Text>
                <Text style={styles.space150px}>ตำแหน่ง</Text>
                <Text>พ.ศ. ที่ทำงาน</Text>
              </View>
              <View style={[styles.flexRow ,{marginLeft: '20px'}]}>
                <Text style={styles.space350px}>สถานที่ทำงาน</Text>
                <Text style={styles.space100px}>รายได้ต่อเดือน   {mockData.money}</Text>
                <Text>บาท</Text>
              </View>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ลักษณะงาน</Text>
                <Text>ตำแหน่ง</Text>
              </View>
              <View style={[styles.flexRow ,{marginLeft: '20px'}]}>
                <Text style={styles.space350px}>สถานที่ทำงาน</Text>
                <Text style={styles.space100px}>รายได้ต่อเดือน   {mockData.money}</Text>
                <Text>บาท</Text>
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
              {/* section 4 */}
              <View style={[styles.flexRow]}>
                  <Text style={[styles.bold, styles.space75px]}>มารดาปัจจุบัน</Text>
                  <Text style={styles.space100px}>ชื่อ</Text>
                  <Text style={styles.space150px}>สกุล</Text>
                  <Text style={styles.space75px}>ปีเกิด</Text>
                  <Text style={styles.space50px}>อายุ</Text>
                  <Text style={styles.space50px}>ปี</Text>
              </View >
              <View style={styles.flexRow }>
                <Text style={styles.space150px}>วุฒิการศึกษา</Text>
                <Text style={styles.space175px}>หมายเลขโทรศัพท์</Text>
                <Text style={styles.space50px}>ปีที่เสียชีวิต</Text>
              </View>
              
              <Text>ยานพาหนะปัจจุบัน</Text>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
                <Text>ยี่ห้อยานพาหนะ</Text>
              </View>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
                <Text>ยี่ห้อยานพาหนะ</Text>
              </View>
              <Text>งานปัจจุบัน</Text>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ลักษณะงาน</Text>
                <Text style={styles.space150px}>ตำแหน่ง</Text>
                <Text>พ.ศ. ที่ทำงาน</Text>
              </View>
              <View style={[styles.flexRow ,{marginLeft: '20px'}]}>
                <Text style={styles.space350px}>สถานที่ทำงาน</Text>
                <Text style={styles.space100px}>รายได้ต่อเดือน   {mockData.money}</Text>
                <Text>บาท</Text>
              </View>
              <View style={styles.flexRow }>
                <div style={styles.flexJustCenter}>
                <View style={styles.bullet}></View>
                </div>
                <Text style={styles.space200px}>ลักษณะงาน</Text>
                <Text>ตำแหน่ง</Text>
              </View>
              <View style={[styles.flexRow ,{marginLeft: '20px'}]}>
                <Text style={styles.space350px}>สถานที่ทำงาน</Text>
                <Text style={styles.space100px}>รายได้ต่อเดือน   {mockData.money}</Text>
                <Text>บาท</Text>
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
            </div>
            
          </View>
        </View>
        
    </Page>
  );
};

export default PageTwo;
