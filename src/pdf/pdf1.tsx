import React from "react";
import { Page, Text, Font, View, Image } from "@react-pdf/renderer";
import THSarabunNew from "../font/THSarabunNew.ttf";
import THSarabunNewBold from "../font/THSarabunNew Bold.ttf";
import THSarabunNewItalic from "../font/THSarabunNew Italic.ttf";
//import styles
import styles from "./style";
//import mockData
import mockData from "./mockData";
// Register the Thai font need to change to Saraban when done
Font.register({
	family: "THSarabunNew",
	fonts: [
		{ src: THSarabunNew },
		{ src: THSarabunNewBold },
		{ src: THSarabunNewItalic, fontStyle: "italic" },
	],
});

const PageOne: React.FC = () => {
	return (
		// <Document>
		<Page size="A4" style={styles.body} wrap>
			{/* Header */}
			<View style={styles.tableHeader}>
				<View
					style={{
						border: "1px solid black",
						height: "4.5cm",
						width: "4cm",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text>รูปถ่าย</Text>
				</View>

				<View
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div style={{ width: "100px", height: "100px" }}>
						<Image src="/camt_cmu_logo_th.JPG" style={{ objectFit: "cover" }} />
					</div>
					<div style={styles.bold}>
						<Text>แบบขอรับทุนการศึกษา ปีการศึกษา 2566</Text>
						<Text>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</Text>
					</div>
				</View>

				<View
					style={[
						styles.normal,
						{ textAlign: "right", height: "5.23cm", width: "4cm" },
					]}
				>
					<Text style={styles.bold}>เลขที่สมัคร {mockData.regisNum}</Text>
					<div />
					<Text style={styles.bold}>รายใหม่</Text>
					<br />
					<Text>{mockData.studentID}</Text>
					<br />
					<Text>พิมพ์วันที่ {mockData.date}</Text>
				</View>
			</View>

			{/* content1 */}
			<View>
				<Text style={styles.bold}>ข้อมูลพื้นฐาน</Text>
				<View style={[styles.flexRow, { gap: "5px" }]}>
					<Text>1.</Text>
					<div>
						<View style={[styles.flexRow, { gap: "5px" }]}>
							<Text style={styles.space150px}>ชื่อ {mockData.firstName}</Text>

							<Text style={styles.space150px}>สกุล {mockData.lastName}</Text>

							<Text style={styles.space150px}>
								ชื่อเล่น {mockData.nickName}
							</Text>
						</View>
						<View style={[styles.flexRow]}>
							<Text style={styles.space150px}>
								วันเดือนปีเกิด {mockData.birthDate}
							</Text>
							<Text style={styles.space100px}>อายุ {mockData.age} ปี</Text>
							<Text> รหัสประจำตัวนักศึกษา {mockData.studentID}</Text>
						</View>
						<View style={[styles.flexRow]}>
							<Text style={{ width: "275px" }}>สาขาวิชา {mockData.Major}</Text>
							<Text>อาจารย์ที่ปรึกษา {mockData.Mentor}</Text>
						</View>
						<View style={[styles.flexRow]}>
							<Text style={styles.space200px}>อีเมล {mockData.email}</Text>
							<Text>หมายเลขโทรศัพท์ที่ติดต่อได้สะดวก {mockData.phone}</Text>
						</View>
						<View style={[styles.flexRow]}>
							<Text style={styles.space150px}>
								จำนวนเงินทุนที่ขอรับ {mockData.money}
							</Text>
							<Text style={styles.space75px}>บาท/ปีการศึกษา</Text>
							<Text style={styles.italic}>
								ผู้สมัครเป็นคนแรกในครอบครัวที่ได้ศึกษาในระดับอุดมศึกษา
							</Text>
						</View>
					</div>
				</View>
			</View>
			{/* content2 */}
			<View>
				<Text style={styles.bold}>ที่พักขณะกำลังศึกษา</Text>

				<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
					<Text>2.</Text>
					<div>
						<View style={[styles.flexRow]}>
							<Text style={styles.space150px}>ชื่อที่พัก {mockData.Major}</Text>
							<Text style={styles.space100px}>หมายเลขห้อง {mockData.age}</Text>
							<Text style={styles.space100px}>หมายเลขโทรศัพท์ที่พัก</Text>
						</View>
						<View style={[styles.flexRow]}>
							<Text style={styles.space150px}>
								จำนวนผู้พักอาศัยในห้อง {mockData.age} คน
							</Text>
							<Text>ค่าเช่าที่พัก {mockData.money} บาท/คน/เดือน</Text>
						</View>
					</div>
				</View>
			</View>
			{/* content3 */}
			<View>
				<View>
					<Text style={styles.bold}>ยานพาหนะที่ใช้ในมหาวิทยาลัยเชียงใหม่</Text>
				</View>

				<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
					<Text>3.</Text>
					<div>
						<View style={[styles.flexRow]}>
							<Text style={styles.space300px}>
								ชนิดยานพาหนะ {mockData.birthDate}
							</Text>
							<Text>ยี่ห้อยานพาหนะ {mockData.vehicle}</Text>
						</View>
						<View style={[styles.flexRow]}>
							<Text style={styles.space300px}>
								ชนิดยานพาหนะ {mockData.vehicle}
							</Text>
							<Text>ยี่ห้อยานพาหนะ {mockData.Major}</Text>
						</View>
					</div>
				</View>
			</View>
			{/* content4 */}
			<View>
				<Text style={styles.bold}>ภูมิลำเนา (ตามทะเบียนบ้าน)</Text>

				<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
					<Text>4.</Text>
					<div>
						<View style={styles.flexRow}>
							<Text style={styles.space100px}>
								บ้านเลขที่ {mockData.houseNo}
							</Text>
							<Text style={styles.space100px}>หมู่ที่ {mockData.vilNum}</Text>
							<Text>หมู่บ้าน {mockData.village}</Text>
						</View>
						<View style={styles.flexRow}>
							<Text style={styles.space200px}>ซอย {mockData.alley}</Text>
							<Text style={styles.space200px}>ถนน {mockData.road}</Text>
						</View>
						<View style={styles.flexRow}>
							<Text style={styles.space150px}>ตำบล {mockData.district}</Text>
							<Text style={styles.space150px}>อำเภอ {mockData.district}</Text>
							<Text style={styles.space150px}>จังหวัด {mockData.county}</Text>
							<Text style={styles.space150px}>
								รหัสไปรษณีย์ {mockData.passCode}
							</Text>
						</View>
						<view>
							<Text>หมายโทรศัพท์บ้าน {mockData.phone}</Text>
						</view>
					</div>
				</View>
			</View>
			{/* content5-6 */}
			<View>
				<View>
					<Text style={styles.bold}>ค่าใช้จ่ายรายเดือน</Text>
				</View>

				<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
					<Text>5.</Text>
					<div>
						//width: 83 17
						<View style={[styles.flexRowBetween]}>
							<Text style={[styles.rowStyle83]}>
								ค่าเช่าที่พัก (รวมค่าน้ำ ค่าไฟ และค่าอินเทอร์เน็ต)
							</Text>
							<View style={[styles.rowStyle17]}>
								<Text>{mockData.money}</Text>
								<Text>บาท</Text>
							</View>
						</View>
						<View style={[styles.flexRowBetween]}>
							<Text style={[styles.rowStyle83]}>ค่าอาหาร</Text>
							<View style={[styles.rowStyle17]}>
								<Text>{mockData.money}</Text>
								<Text>บาท</Text>
							</View>
						</View>
						<View style={[styles.flexRowBetween]}>
							<Text style={[styles.rowStyle83]}>
								ค่าเดินทางและบำรุงรักษายานพาหนะ
							</Text>
							<View style={[styles.rowStyle17]}>
								<Text>{mockData.money}</Text>
								<Text>บาท</Text>
							</View>
						</View>
						<View style={[styles.flexRowBetween]}>
							<Text style={[styles.rowStyle83]}>ค่าอุปกรณ์การศึกษา</Text>
							<View style={[styles.rowStyle17]}>
								<Text>{mockData.money}</Text>
								<Text>บาท</Text>
							</View>
						</View>
						<View style={[styles.flexRowBetween]}>
							<Text style={[styles.rowStyle83]}>ค่าใช้จ่ายส่วนตัวอื่นๆ</Text>
							<View style={[styles.rowStyle17]}>
								<Text>{mockData.money}</Text>
								<Text>บาท</Text>
							</View>
						</View>
						//width: 70 30
						<View style={styles.flexRowBetween}>
							<Text style={styles.rowStyle70}>รวมค่าใช้จ่ายรายเดือนบาท</Text>
							<View style={[styles.rowStyle30]}>
								<Text>เดือนละ</Text>
								<Text>{mockData.money}</Text>
								<Text>บาท</Text>
							</View>
						</View>
					</div>
				</View>
				<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
					<Text>6.</Text>
					<div>
						<View style={styles.flexRowBetween}>
							<Text style={styles.rowStyle70}>ผู้อุปการะค่าใช้จ่าย</Text>
							<View style={[styles.rowStyle30]}>
								<Text>เดือนละ</Text>
								<Text>{mockData.money}</Text>
								<Text>บาท</Text>
							</View>
						</View>
						<View style={styles.flexRowBetween}>
							<Text style={styles.rowStyle70}>ผู้อุปการะค่าใช้จ่าย</Text>
							<View style={[styles.rowStyle30]}>
								<Text>เดือนละ</Text>
								<Text>{mockData.money}</Text>
								<Text>บาท</Text>
							</View>
						</View>
						<View style={styles.flexRowBetween}>
							<Text style={styles.rowStyle70}>
								ผู้อุปการะค่าใช้จ่าย {mockData.Mentor}
							</Text>
							<View style={[styles.rowStyle30]}>
								<Text>เดือนละ</Text>
								<Text>{mockData.money}</Text>
								<Text>บาท</Text>
							</View>
						</View>
					</div>
				</View>
			</View>
			{/* content7 */}
			<View>
				<Text style={styles.bold}>รายได้และทุนอื่นๆ ที่เคยได้รับ</Text>
				<View style={[styles.flexRow, styles.normal]}>
					<Text style={{ marginRight: "5px" }}>7.</Text>
					<div>
						<Text>ทุนอื่นๆ ที่เคยได้รับตั้งแต่ชั้น ม.6</Text>
						//table 20 60 20
						<View style={[styles.flexRow]}>
							//column 1
							<View style={{ width: "20%" }}>
								<View style={[styles.tableLeft, { height: "auto" }]}>
									<Text>ปีที่ได้รับ</Text>
								</View>
								<div>
									{mockData.scholarName.map((data, index) => {
										return (
											<View style={[styles.tableRowLeft]}>
												<Text>{data}</Text>
											</View>
										);
									})}
								</div>
							</View>
							{/* //column 2 */}
							<View style={{ width: "60%" }}>
								<View style={[styles.tableMiddle, { height: "auto" }]}>
									<Text>ชื่อทุน</Text>
								</View>
								<>
									{mockData.scholarName.map((data, index) => {
										return (
											<View style={[styles.tableRowMiddle]}>
												<Text>{data}</Text>
											</View>
										);
									})}
								</>
							</View>
							//column 3
							<View style={{ width: "20%" }}>
								<View style={[styles.tableRight, { height: "auto" }]}>
									<Text>มูลค่าทุน (บาท)</Text>
								</View>
								<>
									{mockData.scholarName.map((data, index) => {
										return (
											<View style={[styles.tableRowRight]}>
												<Text>มูลค่าทุน (บาท)</Text>
											</View>
										);
									})}
								</>
							</View>
						</View>
					</div>
				</View>
			</View>
			{/* content8 */}
			<View>
				<View style={[styles.flexRow, styles.normal]}>
					<Text style={{ marginRight: "5px" }}>8.</Text>
					<div>
						<Text>ประวัติการทำงานหารายได้ระหว่างศึกษา</Text>
						<View style={[styles.flexRow]}>
							<div style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</div>
							<Text style={styles.space200px}>ลักษณะงาน</Text>
							<Text style={styles.space150px}>ตำแหน่ง</Text>
							<Text>พ.ศ. ที่ทำงาน</Text>
						</View>
						<View style={styles.flexRowBetween}>
							<View style={{ marginRight: "20px" }}></View>
							<Text style={styles.rowStyle70}>สถานที่ทำงาน</Text>
							<View style={[styles.rowStyle30]}>
								<Text>เดือนละ</Text>
								<Text>{mockData.money}</Text>
								<Text>บาท</Text>
							</View>
						</View>
						<View style={[styles.flexRow]}>
							<div style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</div>
							<Text style={styles.space200px}>ลักษณะงาน</Text>
							<Text style={styles.space150px}>ตำแหน่ง</Text>
							<Text>พ.ศ. ที่ทำงาน</Text>
						</View>
						<View style={styles.flexRowBetween}>
							<View style={{ marginRight: "20px" }}></View>
							<Text style={styles.rowStyle70}>สถานที่ทำงาน</Text>
							<View style={[styles.rowStyle30]}>
								<Text>เดือนละ</Text>
								<Text>{mockData.money}</Text>
								<Text>บาท</Text>
							</View>
						</View>
						<View style={[styles.flexRow]}>
							<div style={styles.flexJustCenter}>
								<View style={styles.bullet}></View>
							</div>
							<Text style={styles.space200px}>ลักษณะงาน</Text>
							<Text style={styles.space150px}>ตำแหน่ง</Text>
							<Text>พ.ศ. ที่ทำงาน</Text>
						</View>
						<View style={styles.flexRowBetween}>
							<View style={{ marginRight: "20px" }}></View>
							<Text style={styles.rowStyle70}>สถานที่ทำงาน</Text>
							<View style={[styles.rowStyle30]}>
								<Text>เดือนละ</Text>
								<Text>{mockData.money}</Text>
								<Text>บาท</Text>
							</View>
						</View>
					</div>
				</View>
			</View>
		</Page>
		// </Document>
	);
};

export default PageOne;
