import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";

//import styles
import styles from "./style";
//import mockData
import mockData from "./mockData";
// Register the Thai font need to change to Saraban when done

const PageFour: React.FC = () => {
	return (
		// <Page size={'A4'} style={styles.body}>
		<View style={styles.body}>
			<Text style={styles.bold}>พี่น้องที่ยังมีชีวิตอยู่</Text>

			<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
				<Text>13.</Text>
				<div>
					{/* section 1 */}
					<View wrap={false}>
						<View style={[styles.flexRow]}>
							<Text style={[styles.bold, styles.space75px]}>
								ผู้อุปการะคนที่ 1
							</Text>
							<Text style={styles.space100px}>ชื่อ {mockData.firstName}</Text>
							<Text style={styles.space150px}>สกุล {mockData.lastName}</Text>
							<Text style={styles.space75px}>ปีเกิด {mockData.birthYear}</Text>
							<Text style={styles.space50px}>อายุ {mockData.age}</Text>
							<Text style={styles.space50px}>ปี</Text>
						</View>
						<View style={styles.flexRow}>
							<Text style={styles.space300px}>ความสัมพันธ์กับผู้สมัคร</Text>
							<Text style={styles.space150px}>
								ให้การอุปการะนักศึกษาเดือนละ {mockData.money}
							</Text>
							<Text>บาท</Text>
						</View>
						<View style={styles.flexRow}>
							<Text style={styles.space150px}>วุฒิการศึกษา</Text>
							<Text style={styles.space175px}>หมายเลขโทรศัพท์</Text>
							<Text style={styles.space50px}>ปีที่เสียชีวิต</Text>
						</View>
						<View style={styles.flexRow}>
							<Text style={styles.space300px}>
								ลักษณะที่อยู่ปัจจุบัน [บ้านของตัวเอง/บ้านเช่า/…]{" "}
							</Text>
							<Text style={styles.space100px}>
								ค่าเช่าที่พัก {mockData.money}
							</Text>
							<Text>บาท/เดือน</Text>
						</View>
					</View>
					<View wrap={false}>
						<Text>ยานพาหนะปัจจุบัน</Text>
						<View style={styles.flexRow}>
							<div style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</div>
							<Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
							<Text>ยี่ห้อยานพาหนะ</Text>
						</View>
						<View style={styles.flexRow}>
							<div style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</div>
							<Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
							<Text>ยี่ห้อยานพาหนะ</Text>
						</View>
					</View>

					<Text>งานปัจจุบัน</Text>
					<View style={styles.flexRow}>
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
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
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
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
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
						<Text style={styles.space200px}>ชื่อโรค</Text>
						<Text>ปีที่ตรวจพบ</Text>
					</View>
					<View style={styles.flexRow}>
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
						<Text style={styles.space200px}>ชื่อโรค</Text>
						<Text>ปีที่ตรวจพบ</Text>
					</View>
					<Text>ภาระหนี้สิน</Text>
					<View style={styles.flexRow}>
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
						<Text style={styles.space300px}>รายละเอียดหนี้สิน</Text>
						<Text style={styles.space125px}>
							มูลค่าหนี้สินปัจจุบัน {mockData.money}
						</Text>
						<Text>บาท</Text>
					</View>
					<View style={styles.flexRow}>
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
						<Text style={styles.space300px}>รายละเอียดหนี้สิน</Text>
						<Text style={styles.space125px}>
							มูลค่าหนี้สินปัจจุบัน {mockData.money}
						</Text>
						<Text>บาท</Text>
					</View>
					<View style={styles.flexRow}>
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
						<Text style={styles.space300px}>รายละเอียดหนี้สิน</Text>
						<Text style={styles.space125px}>
							มูลค่าหนี้สินปัจจุบัน {mockData.money}
						</Text>
						<Text>บาท</Text>
					</View>
					<View>
						<Text style={styles.italic}>
							ญาติที่ผู้อุปการะคนที่ 1 ต้องรับภาระในการดูแล
						</Text>
						<View style={{ marginLeft: "20px" }}>
							<View style={[styles.flexRow]}>
								<Text style={[styles.bold, styles.space50px]}>คนที่ 1</Text>
								<Text style={styles.space100px}>ชื่อ {mockData.firstName}</Text>
								<Text style={styles.space150px}>สกุล {mockData.lastName}</Text>
								<Text style={styles.space75px}>
									ปีเกิด {mockData.birthYear}
								</Text>
								<Text style={styles.space50px}>อายุ {mockData.age}</Text>
								<Text style={styles.space50px}>ปี</Text>
							</View>
							<View style={styles.flexRow}>
								<Text style={styles.space150px}>ความสัมพันธ์กับผู้สมัคร</Text>
								<Text style={styles.space150px}>
									วุฒิการศึกษา {"ปริญญาตรี"}
								</Text>
								<Text style={styles.space150px}>
									หมายเลขโทรศัพท์ {mockData.phone}
								</Text>
							</View>
							<Text>โรคประจำตัว</Text>
							<View style={styles.flexRow}>
								<div style={styles.flexJustCenter}>
									<View style={styles.bullet}></View>
								</div>
								<Text style={styles.space200px}>ชื่อโรค</Text>
								<Text>ปีที่ตรวจพบ</Text>
							</View>
							<View style={styles.flexRow}>
								<div style={styles.flexJustCenter}>
									<View style={styles.bullet}></View>
								</div>
								<Text style={styles.space200px}>ชื่อโรค</Text>
								<Text>ปีที่ตรวจพบ</Text>
							</View>
						</View>
						<View style={{ marginLeft: "20px" }}>
							<View style={[styles.flexRow]}>
								<Text style={[styles.bold, styles.space50px]}>คนที่ 2</Text>
								<Text style={styles.space100px}>ชื่อ {mockData.firstName}</Text>
								<Text style={styles.space150px}>สกุล {mockData.lastName}</Text>
								<Text style={styles.space75px}>
									ปีเกิด {mockData.birthYear}
								</Text>
								<Text style={styles.space50px}>อายุ {mockData.age}</Text>
								<Text style={styles.space50px}>ปี</Text>
							</View>
							<View style={styles.flexRow}>
								<Text style={styles.space150px}>ความสัมพันธ์กับผู้สมัคร</Text>
								<Text style={styles.space150px}>
									วุฒิการศึกษา {"ปริญญาตรี"}
								</Text>
								<Text style={styles.space150px}>
									หมายเลขโทรศัพท์ {mockData.phone}
								</Text>
							</View>
							<Text>โรคประจำตัว</Text>
							<View style={styles.flexRow}>
								<div style={styles.flexJustCenter}>
									<View style={styles.bullet}></View>
								</div>
								<Text style={styles.space200px}>ชื่อโรค</Text>
								<Text>ปีที่ตรวจพบ</Text>
							</View>
							<View style={styles.flexRow}>
								<div style={styles.flexJustCenter}>
									<View style={styles.bullet}></View>
								</div>
								<Text style={styles.space200px}>ชื่อโรค</Text>
								<Text>ปีที่ตรวจพบ</Text>
							</View>
						</View>
					</View>
					{/* section 2 */}
					<View style={[styles.flexRow]}>
						<Text style={[styles.bold, styles.space75px]}>
							ผู้อุปการะคนที่ 2
						</Text>
						<Text style={styles.space100px}>ชื่อ {mockData.firstName}</Text>
						<Text style={styles.space150px}>สกุล {mockData.lastName}</Text>
						<Text style={styles.space75px}>ปีเกิด {mockData.birthYear}</Text>
						<Text style={styles.space50px}>อายุ {mockData.age}</Text>
						<Text style={styles.space50px}>ปี</Text>
					</View>
					<View style={styles.flexRow}>
						<Text style={styles.space300px}>ความสัมพันธ์กับผู้สมัคร</Text>
						<Text style={styles.space150px}>
							ให้การอุปการะนักศึกษาเดือนละ {mockData.money}
						</Text>
						<Text>บาท</Text>
					</View>
					<View style={styles.flexRow}>
						<Text style={styles.space150px}>วุฒิการศึกษา</Text>
						<Text style={styles.space175px}>หมายเลขโทรศัพท์</Text>
						<Text style={styles.space50px}>ปีที่เสียชีวิต</Text>
					</View>
					<View style={styles.flexRow}>
						<Text style={styles.space300px}>
							ลักษณะที่อยู่ปัจจุบัน [บ้านของตัวเอง/บ้านเช่า/…]{" "}
						</Text>
						<Text style={styles.space100px}>
							ค่าเช่าที่พัก {mockData.money}
						</Text>
						<Text>บาท/เดือน</Text>
					</View>
					<Text>ยานพาหนะปัจจุบัน</Text>
					<View style={styles.flexRow}>
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
						<Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
						<Text>ยี่ห้อยานพาหนะ</Text>
					</View>
					<View style={styles.flexRow}>
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
						<Text style={styles.space200px}>ชนิดยานพาหนะ</Text>
						<Text>ยี่ห้อยานพาหนะ</Text>
					</View>

					<Text>งานปัจจุบัน</Text>
					<View style={styles.flexRow}>
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
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
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
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
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
						<Text style={styles.space200px}>ชื่อโรค</Text>
						<Text>ปีที่ตรวจพบ</Text>
					</View>
					<View style={styles.flexRow}>
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
						<Text style={styles.space200px}>ชื่อโรค</Text>
						<Text>ปีที่ตรวจพบ</Text>
					</View>
					<Text>ภาระหนี้สิน</Text>
					<View style={styles.flexRow}>
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
						<Text style={styles.space300px}>รายละเอียดหนี้สิน</Text>
						<Text style={styles.space125px}>
							มูลค่าหนี้สินปัจจุบัน {mockData.money}
						</Text>
						<Text>บาท</Text>
					</View>
					<View style={styles.flexRow}>
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
						<Text style={styles.space300px}>รายละเอียดหนี้สิน</Text>
						<Text style={styles.space125px}>
							มูลค่าหนี้สินปัจจุบัน {mockData.money}
						</Text>
						<Text>บาท</Text>
					</View>
					<View style={styles.flexRow}>
						<div style={styles.flexJustCenter}>
							<View style={styles.bullet}></View>
						</div>
						<Text style={styles.space300px}>รายละเอียดหนี้สิน</Text>
						<Text style={styles.space125px}>
							มูลค่าหนี้สินปัจจุบัน {mockData.money}
						</Text>
						<Text>บาท</Text>
					</View>
					<View>
						<Text style={styles.italic}>
							ญาติที่ผู้อุปการะคนที่ 1 ต้องรับภาระในการดูแล
						</Text>
						<View style={{ marginLeft: "20px" }}>
							<View style={[styles.flexRow]}>
								<Text style={[styles.bold, styles.space50px]}>คนที่ 1</Text>
								<Text style={styles.space100px}>ชื่อ {mockData.firstName}</Text>
								<Text style={styles.space150px}>สกุล {mockData.lastName}</Text>
								<Text style={styles.space75px}>
									ปีเกิด {mockData.birthYear}
								</Text>
								<Text style={styles.space50px}>อายุ {mockData.age}</Text>
								<Text style={styles.space50px}>ปี</Text>
							</View>
							<View style={styles.flexRow}>
								<Text style={styles.space150px}>ความสัมพันธ์กับผู้สมัคร</Text>
								<Text style={styles.space150px}>
									วุฒิการศึกษา {"ปริญญาตรี"}
								</Text>
								<Text style={styles.space150px}>
									หมายเลขโทรศัพท์ {mockData.phone}
								</Text>
							</View>
							<Text>โรคประจำตัว</Text>
							<View style={styles.flexRow}>
								<div style={styles.flexJustCenter}>
									<View style={styles.bullet}></View>
								</div>
								<Text style={styles.space200px}>ชื่อโรค</Text>
								<Text>ปีที่ตรวจพบ</Text>
							</View>
							<View style={styles.flexRow}>
								<div style={styles.flexJustCenter}>
									<View style={styles.bullet}></View>
								</div>
								<Text style={styles.space200px}>ชื่อโรค</Text>
								<Text>ปีที่ตรวจพบ</Text>
							</View>
						</View>
						<View style={{ marginLeft: "20px" }}>
							<View style={[styles.flexRow]}>
								<Text style={[styles.bold, styles.space50px]}>คนที่ 2</Text>
								<Text style={styles.space100px}>ชื่อ {mockData.firstName}</Text>
								<Text style={styles.space150px}>สกุล {mockData.lastName}</Text>
								<Text style={styles.space75px}>
									ปีเกิด {mockData.birthYear}
								</Text>
								<Text style={styles.space50px}>อายุ {mockData.age}</Text>
								<Text style={styles.space50px}>ปี</Text>
							</View>
							<View style={styles.flexRow}>
								<Text style={styles.space150px}>ความสัมพันธ์กับผู้สมัคร</Text>
								<Text style={styles.space150px}>
									วุฒิการศึกษา {"ปริญญาตรี"}
								</Text>
								<Text style={styles.space150px}>
									หมายเลขโทรศัพท์ {mockData.phone}
								</Text>
							</View>
							<Text>โรคประจำตัว</Text>
						</View>
					</View>
				</div>
			</View>
		</View>

		// </Page>
	);
};

export default PageFour;
