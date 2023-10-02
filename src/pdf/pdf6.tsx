import React from 'react';
import { Page, Text, View } from '@react-pdf/renderer';

//import styles 
import styles from './style'
//import mockData
import mockData from './mockData';
// Register the Thai font need to change to Saraban when done



const PageSix: React.FC = () => {
  return (
    <Page size={'A4'} style={styles.body}>
       <View style={{marginLeft: '15px'}}>
        {/* section 1 */}
         <Text style={styles.bold}>เหตุผลในการขอรับทุน</Text>
            <View style={styles.flexRow}>
                <Text>18.</Text>
                <Text>เหตุผลและความจำเป็นในการสมัครขอรับทุนการศึกษา (ระบุให้ชัดเจน)</Text>
                <View style={{height: '250px'}}>

                </View>
            </View>
        {/* section 2 */}
            <View style={styles.flexRow}>
                <Text>19.</Text>
                <Text>
                    นักศึกษาสนใจทำงานลักษณะใด และช่วงเวลาใดที่สะดวกที่จะทำงาน (ระบุให้ชัดเจน)

                </Text>
                <View style={{height:'150px'}}></View>
            </View>
            {/* content 3 */}
            <View>
            <Text style={styles.bold}>รายละเอียดบัญชีธนาคาร</Text>
            <View style={[styles.flexRow ,{gap:'5px'}]}>
                <Text>20.</Text>
                <Text style={styles.space200px}>ธนาคาร</Text>
                <Text>สาขา</Text>
            </View>
            <View style={[styles.flexRow , {marginLeft: '15px'}]}>
                <Text style={styles.space200px}>ชื่อบัญชี</Text>
                <Text>เลขที่บัญชี</Text>
            </View>
            </View>
            {/* content 4 */}
            <View>
                <Text style={styles.bold}>ความเห็นของอาจารย์ที่ปรึกษา</Text>
                <Text>21.</Text>
                <View style={{height: '200px'}}></View>
            </View>
             {/* idea use  the different size of box and use align item to adjust the content to be the same line */}
            <View style={[styles.flexRow, {justifyContent:'space-around' }]}>
                {/* sign first box */}
                <View style={[styles.space200px]}>
                    <View style={styles.flexRow}> 
                        <Text>ลงชื่อ</Text>
                        <View style={[styles.space150px,{borderBottom:'1px solid black'}]}></View>
                    </View>
                    <View style={[styles.space175px,{display: 'flex' ,alignItems:'center'}]}>
                        <Text>(ชินวัตร อิศราดิสัยกุล)</Text>
                        <Text>อาจารย์ที่ปรึกษา</Text>
                        <View style={styles.flexRow}>
                            <Text>วันที่</Text>
                            <View style={[styles.space125px ,{borderBottom: '1px solid black'}]}></View>
                        </View>
                    </View>
                </View>
                {/* sign second box */}
                 <View style={[styles.space200px]}>
                    <View style={styles.flexRow}> 
                        <Text>ลงชื่อ</Text>
                        <View style={[styles.space150px,{borderBottom:'1px solid black'}]}></View>
                    </View>
                    <View style={[styles.space175px,{display: 'flex' ,alignItems:'center'}]}>
                        <Text>(ชินวัตร อิศราดิสัยกุล)</Text>
                        <Text>อาจารย์ที่ปรึกษา</Text>
                        <View style={styles.flexRow}>
                            <Text>วันที่</Text>
                            <View style={[styles.space125px ,{borderBottom: '1px solid black'}]}></View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </Page>
)}
export default PageSix