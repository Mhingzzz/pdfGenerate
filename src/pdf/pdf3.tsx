import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";

//import styles
import styles from "./style";
//import mockData
import mockData from "./mockData";
// Register the Thai font need to change to Saraban when done

const PageThree: React.FC = () => {
	return (
		// <Page size={'A4'} style={styles.body}>
		<View style={styles.body}>
			<Text style={styles.bold}>พี่น้องที่ยังมีชีวิตอยู่</Text>

			<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
				<View></View>
				<Text>12.</Text>
				<View>
					{/* section 1 */}
					<View wrap={false}>
						<View style={[styles.flexRow]}>
							<Text style={[styles.bold, styles.space75px]}>
								บุตรลำดับที่ {mockData.age}
							</Text>
							<Text style={styles.space100px}>ชื่อ {mockData.firstName}</Text>
							<Text style={styles.space150px}>สกุล {mockData.lastName}</Text>
							<Text style={styles.space75px}>ปีเกิด {mockData.birthYear}</Text>
							<Text style={styles.space50px}>อายุ {mockData.age}</Text>
							<Text style={styles.space50px}>ปี</Text>
						</View>
						<View style={styles.flexRow}>
							<Text style={styles.space150px}>วุฒิการศึกษา</Text>
							<Text style={styles.space175px}>หมายเลขโทรศัพท์</Text>
							<Text style={styles.space100px}>สถานภาพ</Text>
							<Text style={styles.space75px}>จำนวนบุตร {mockData.age}</Text>
							<Text>คน</Text>
						</View>

						<Text>ยานพาหนะปัจจุบัน</Text>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
							<Text>ยี่ห้อยานพาหนะ</Text>
						</View>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
							<Text>ยี่ห้อยานพาหนะ</Text>
						</View>
						<Text>การศึกษาปัจจุบัน (หากยังศึกษาอยู่)</Text>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ระดับการศึกษา</Text>
							<Text style={styles.space150px}>สถานศึกษา</Text>
							<Text>จังหวัด</Text>
						</View>
						<View style={[styles.flexRow, { marginLeft: "20px" }]}>
							<Text style={styles.space125px}>
								ค่าใช้จ่ายรายเดือน {mockData.money}
							</Text>
							<Text>บาท </Text>
							<Text>ผู้อุปการะค่าใช้จ่าย {mockData.Mentor}</Text>
						</View>
						<Text>งานปัจจุบัน (หากมีงานทำ)</Text>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ลักษณะงาน</Text>
							<Text style={styles.space150px}>ตำแหน่ง</Text>
							<Text>พ.ศ. ที่ทำงาน</Text>
						</View>
						<View style={[styles.flexRow, { marginLeft: "20px" }]}>
							<Text style={styles.space350px}>สถานที่ทำงาน</Text>
							<Text style={styles.space100px}>
								รายได้ต่อเดือน {mockData.money}
							</Text>
							<Text>บาท</Text>
						</View>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ลักษณะงาน</Text>
							<Text>ตำแหน่ง</Text>
						</View>
						<View style={[styles.flexRow, { marginLeft: "20px" }]}>
							<Text style={styles.space350px}>สถานที่ทำงาน</Text>
							<Text style={styles.space100px}>
								รายได้ต่อเดือน {mockData.money}
							</Text>
							<Text>บาท</Text>
						</View>
						<Text>โรคประจำตัว</Text>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ชื่อโรค</Text>
							<Text>ปีที่ตรวจพบ</Text>
						</View>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ชื่อโรค</Text>
							<Text>ปีที่ตรวจพบ</Text>
						</View>
					</View>
					{/* section 2 */}
					<View wrap={false} style={{ marginTop: "20px" }}>
						<View style={[styles.flexRow]}>
							<Text style={[styles.bold, styles.space75px]}>
								บุตรลำดับที่ {mockData.age}
							</Text>
							<Text style={styles.space100px}>ชื่อ {mockData.firstName}</Text>
							<Text style={styles.space150px}>สกุล {mockData.lastName}</Text>
							<Text style={styles.space75px}>ปีเกิด {mockData.birthYear}</Text>
							<Text style={styles.space50px}>อายุ {mockData.age}</Text>
							<Text style={styles.space50px}>ปี</Text>
						</View>
						<View style={styles.flexRow}>
							<Text style={styles.space150px}>วุฒิการศึกษา</Text>
							<Text style={styles.space175px}>หมายเลขโทรศัพท์</Text>
							<Text style={styles.space100px}>สถานภาพ</Text>
							<Text style={styles.space75px}>จำนวนบุตร {mockData.age}</Text>
							<Text>คน</Text>
						</View>

						<Text>ยานพาหนะปัจจุบัน</Text>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
							<Text>ยี่ห้อยานพาหนะ</Text>
						</View>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
							<Text>ยี่ห้อยานพาหนะ</Text>
						</View>
						<Text>การศึกษาปัจจุบัน (หากยังศึกษาอยู่)</Text>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ระดับการศึกษา</Text>
							<Text style={styles.space150px}>สถานศึกษา</Text>
							<Text>จังหวัด</Text>
						</View>
						<View style={[styles.flexRow, { marginLeft: "20px" }]}>
							<Text style={styles.space125px}>
								ค่าใช้จ่ายรายเดือน {mockData.money}
							</Text>
							<Text>บาท </Text>
							<Text>ผู้อุปการะค่าใช้จ่าย {mockData.Mentor}</Text>
						</View>
						<Text>งานปัจจุบัน (หากมีงานทำ)</Text>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ลักษณะงาน</Text>
							<Text style={styles.space150px}>ตำแหน่ง</Text>
							<Text>พ.ศ. ที่ทำงาน</Text>
						</View>
						<View style={[styles.flexRow, { marginLeft: "20px" }]}>
							<Text style={styles.space350px}>สถานที่ทำงาน</Text>
							<Text style={styles.space100px}>
								รายได้ต่อเดือน {mockData.money}
							</Text>
							<Text>บาท</Text>
						</View>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ลักษณะงาน</Text>
							<Text>ตำแหน่ง</Text>
						</View>
						<View style={[styles.flexRow, { marginLeft: "20px" }]}>
							<Text style={styles.space350px}>สถานที่ทำงาน</Text>
							<Text style={styles.space100px}>
								รายได้ต่อเดือน {mockData.money}
							</Text>
							<Text>บาท</Text>
						</View>
						<Text>โรคประจำตัว</Text>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ชื่อโรค</Text>
							<Text>ปีที่ตรวจพบ</Text>
						</View>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ชื่อโรค</Text>
							<Text>ปีที่ตรวจพบ</Text>
						</View>
					</View>
					{/* section 3 */}
					<View style={{ marginTop: "20px" }} wrap={false}>
						<View style={[styles.flexRow]}>
							<Text style={[styles.bold, styles.space75px]}>
								บุตรลำดับที่ {mockData.age}
							</Text>
							<Text style={styles.space100px}>ชื่อ {mockData.firstName}</Text>
							<Text style={styles.space150px}>สกุล {mockData.lastName}</Text>
							<Text style={styles.space75px}>ปีเกิด {mockData.birthYear}</Text>
							<Text style={styles.space50px}>อายุ {mockData.age}</Text>
							<Text style={styles.space50px}>ปี</Text>
						</View>
						<View style={styles.flexRow}>
							<Text style={styles.space150px}>วุฒิการศึกษา</Text>
							<Text style={styles.space175px}>หมายเลขโทรศัพท์</Text>
							<Text style={styles.space100px}>สถานภาพ</Text>
							<Text style={styles.space75px}>จำนวนบุตร {mockData.age}</Text>
							<Text>คน</Text>
						</View>

						<Text>ยานพาหนะปัจจุบัน</Text>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
							<Text>ยี่ห้อยานพาหนะ</Text>
						</View>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
							<Text>ยี่ห้อยานพาหนะ</Text>
						</View>
						<Text>การศึกษาปัจจุบัน (หากยังศึกษาอยู่)</Text>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ระดับการศึกษา</Text>
							<Text style={styles.space150px}>สถานศึกษา</Text>
							<Text>จังหวัด</Text>
						</View>
						<View style={[styles.flexRow, { marginLeft: "20px" }]}>
							<Text style={styles.space125px}>
								ค่าใช้จ่ายรายเดือน {mockData.money}
							</Text>
							<Text>บาท </Text>
							<Text>ผู้อุปการะค่าใช้จ่าย {mockData.Mentor}</Text>
						</View>
						<Text>งานปัจจุบัน (หากมีงานทำ)</Text>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ลักษณะงาน</Text>
							<Text style={styles.space150px}>ตำแหน่ง</Text>
							<Text>พ.ศ. ที่ทำงาน</Text>
						</View>
						<View style={[styles.flexRow, { marginLeft: "20px" }]}>
							<Text style={styles.space350px}>สถานที่ทำงาน</Text>
							<Text style={styles.space100px}>
								รายได้ต่อเดือน {mockData.money}
							</Text>
							<Text>บาท</Text>
						</View>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ลักษณะงาน</Text>
							<Text>ตำแหน่ง</Text>
						</View>
						<View style={[styles.flexRow, { marginLeft: "20px" }]}>
							<Text style={styles.space350px}>สถานที่ทำงาน</Text>
							<Text style={styles.space100px}>
								รายได้ต่อเดือน {mockData.money}
							</Text>
							<Text>บาท</Text>
						</View>
						<Text>โรคประจำตัว</Text>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ชื่อโรค</Text>
							<Text>ปีที่ตรวจพบ</Text>
						</View>
						<View style={styles.flexRow}>
							<View style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</View>
							<Text style={styles.space200px}>ชื่อโรค</Text>
							<Text>ปีที่ตรวจพบ</Text>
						</View>
					</View>
					<View style={styles.hr} />
				</View>
			</View>
		</View>

		// </Page>
	);
};

export default PageThree;
