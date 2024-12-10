import React from "react";
import { Page, Text, Font, View, Image } from "@react-pdf/renderer";
import THSarabunNew from "../font/THSarabunNew.ttf";
import THSarabunNewBold from "../font/THSarabunNew Bold.ttf";
import THSarabunNewItalic from "../font/THSarabunNew Italic.ttf";
//import styles
import styles from "./style";
import {
	mockDataPage1,
	mockDataPage2,
	mockDataPage3,
	mockDataPage4,
} from "./mockData";
import calcutionAge from "./calcutionAge";

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
		<Page size={"A4"}>
			<View style={[styles.body]}>
				{/* Header */}

				<View style={[styles.tableHeader, { marginTop: "20px" }]}>
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
						<View style={{ width: "100px", height: "100px" }}>
							<Image
								src="/public/RibbinENG1.png"
								style={{ objectFit: "cover" }}
							/>
						</View>
						<View style={styles.bold}>
							<Text>แบบขอรับทุนการศึกษา ปีการศึกษา 2566</Text>
							<Text>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</Text>
						</View>
					</View>

					<View
						style={[
							styles.normal,
							{ textAlign: "right", height: "5.23cm", width: "4cm" },
						]}
					>
						<Text style={styles.bold}>เลขที่สมัคร {mockDataPage2.app_id}</Text>
						<View />
						<Text style={styles.bold}>รายใหม่</Text>
						<br />
						<Text>{mockDataPage1.page1.student_id}</Text>
						<br />
						<Text>พิมพ์วันที่ {mockDataPage1.page1.birth_date}</Text>
					</View>
				</View>

				{/* content1 */}
				<View>
					<Text style={styles.bold}>ข้อมูลพื้นฐาน</Text>
					<View style={[styles.flexRow, { gap: "5px" }]}>
						<Text>1.</Text>
						<View>
							<View style={[styles.flexRow, { gap: "5px" }]}>
								<Text style={styles.space150px}>
									ชื่อ {mockDataPage1.page1.first_name}
								</Text>

								<Text style={styles.space150px}>
									สกุล {mockDataPage1.page1.last_name}
								</Text>

								<Text style={styles.space150px}>
									ชื่อเล่น {mockDataPage1.page1.nickname}
								</Text>
							</View>
							<View style={[styles.flexRow]}>
								<Text style={styles.space150px}>
									วันเดือนปีเกิด {mockDataPage1.page1.birth_date}
								</Text>
								<Text style={styles.space100px}>
									อายุ {calcutionAge(mockDataPage1.page1.birth_date)} ปี
								</Text>
								<Text>
									{" "}
									รหัสประจำตัวนักศึกษา {mockDataPage1.page1.student_id}
								</Text>
							</View>
							<View style={[styles.flexRow]}>
								<Text style={{ width: "275px" }}>
									สาขาวิชา {mockDataPage1.page1.major_name}
								</Text>
								<Text>อาจารย์ที่ปรึกษา {mockDataPage1.page1.advisor_name}</Text>
							</View>
							<View style={[styles.flexRow]}>
								<Text style={styles.space200px}>
									อีเมล {mockDataPage1.page1.cmu_account}
								</Text>
								<Text>
									หมายเลขโทรศัพท์ที่ติดต่อได้สะดวก{" "}
									{mockDataPage1.page1.phone_no_student}
								</Text>
							</View>
							<View style={[styles.flexRow]}>
								<Text style={styles.space150px}>
									จำนวนเงินทุนที่ขอรับ {mockDataPage1.page1.amount[0].amount}
								</Text>
								<Text style={styles.space75px}>บาท/ปีการศึกษา</Text>
								<Text style={styles.italic}>
									ผู้สมัครเป็นคนแรกในครอบครัวที่ได้ศึกษาในระดับอุดมศึกษา
								</Text>
							</View>
						</View>
					</View>
				</View>

				{/* content2 */}
				<View>
					<Text style={styles.bold}>ที่พักขณะกำลังศึกษา</Text>

					<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
						<Text>2.</Text>
						<View>
							<View style={[styles.flexRow]}>
								<Text style={styles.space150px}>
									ชื่อที่พัก {mockDataPage1.page1.dorm_name}
								</Text>
								<Text style={styles.space100px}>
									หมายเลขห้อง {mockDataPage1.page1.dorm_room_no}
								</Text>
								<Text style={styles.space150px}>
									หมายเลขโทรศัพท์ที่พัก {mockDataPage1.page1.dorm_phone}
								</Text>
							</View>
							<View style={[styles.flexRow]}>
								<Text style={styles.space150px}>
									จำนวนผู้พักอาศัยในห้อง{" "}
									{mockDataPage1.page1.dorm_num_occupants} คน
								</Text>
								<Text>
									ค่าเช่าที่พัก {mockDataPage1.page1.dorm_monthly_rate}{" "}
									บาท/คน/เดือน
								</Text>
							</View>
						</View>
					</View>
				</View>
				{/* content3 */}
				<View>
					<View>
						<Text style={styles.bold}>
							ยานพาหนะที่ใช้ในมหาวิทยาลัยเชียงใหม่
						</Text>
					</View>

					<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
						<Text>3.</Text>
						<View>
							{mockDataPage1.page1.personal_vehicle.map((data) => {
								return (
									<View style={[styles.flexRow]}>
										<Text style={styles.space300px}>
											ชนิดยานพาหนะ {data.vehicle_type}
										</Text>
										<Text>ยี่ห้อยานพาหนะ {data.vehicle_make}</Text>
									</View>
								);
							})}
						</View>
					</View>
				</View>
				{/* content4 */}
				<View>
					<Text style={styles.bold}>ภูมิลำเนา (ตามทะเบียนบ้าน)</Text>

					<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
						<Text>4.</Text>
						<View>
							<View style={styles.flexRow}>
								<Text style={styles.space100px}>
									บ้านเลขที่ {mockDataPage1.page1.permanent_house_no}
								</Text>
								<Text style={styles.space100px}>
									หมู่ที่ {mockDataPage1.page1.permanent_village_no}
								</Text>
								<Text>
									หมู่บ้าน {mockDataPage1.page1.permanent_village_name}
								</Text>
							</View>
							<View style={styles.flexRow}>
								<Text style={styles.space200px}>
									ซอย {mockDataPage1.page1.permanent_alley}
								</Text>
								<Text style={styles.space200px}>
									ถนน {mockDataPage1.page1.permanent_street}
								</Text>
							</View>
							<View style={styles.flexRow}>
								<Text style={styles.space150px}>
									ตำบล {mockDataPage1.page1.permanent_subdistrict}
								</Text>
								<Text style={styles.space150px}>
									อำเภอ {mockDataPage1.page1.permanent_district}
								</Text>
								<Text style={styles.space150px}>
									จังหวัด {mockDataPage1.page1.permanent_province}
								</Text>
								<Text style={styles.space150px}>
									รหัสไปรษณีย์ {mockDataPage1.page1.permanent_postal_code}
								</Text>
							</View>
							<view>
								<Text>
									หมายโทรศัพท์บ้าน{" "}
									{mockDataPage1.page1.permanent_phone_no_address}
								</Text>
							</view>
						</View>
					</View>
				</View>
				{/* content5-6 */}
				<View>
					<View>
						<Text style={styles.bold}>ค่าใช้จ่ายรายเดือน</Text>
					</View>

					<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
						<Text>5.</Text>
						<View>
							//width: 83 17
							<View style={[styles.flexRowBetween]}>
								<Text style={[styles.rowStyle83]}>
									ค่าเช่าที่พัก (รวมค่าน้ำ ค่าไฟ และค่าอินเทอร์เน็ต)
								</Text>
								<View style={[styles.rowStyle17]}>
									<Text>{mockDataPage1.page1.amount[3].amount}</Text>
									<Text>บาท</Text>
								</View>
							</View>
							<View style={[styles.flexRowBetween]}>
								<Text style={[styles.rowStyle83]}>ค่าอาหาร</Text>
								<View style={[styles.rowStyle17]}>
									<Text>{mockDataPage1.page1.amount[1].amount}</Text>
									<Text>บาท</Text>
								</View>
							</View>
							<View style={[styles.flexRowBetween]}>
								<Text style={[styles.rowStyle83]}>
									ค่าเดินทางและบำรุงรักษายานพาหนะ
								</Text>
								<View style={[styles.rowStyle17]}>
									<Text>{mockDataPage1.page1.amount[4].amount}</Text>
									<Text>บาท</Text>
								</View>
							</View>
							<View style={[styles.flexRowBetween]}>
								<Text style={[styles.rowStyle83]}>ค่าอุปกรณ์การศึกษา</Text>
								<View style={[styles.rowStyle17]}>
									<Text>{mockDataPage1.page1.amount[5].amount}</Text>
									<Text>บาท</Text>
								</View>
							</View>
							<View style={[styles.flexRowBetween]}>
								<Text style={[styles.rowStyle83]}>ค่าใช้จ่ายส่วนตัวอื่นๆ</Text>
								<View style={[styles.rowStyle17]}>
									<Text>{mockDataPage1.page1.amount[2].amount}</Text>
									<Text>บาท</Text>
								</View>
							</View>
							//width: 70 30
							<View style={styles.flexRowBetween}>
								<Text style={styles.rowStyle70}>รวมค่าใช้จ่ายรายเดือนบาท</Text>
								<View style={[styles.rowStyle30]}>
									<Text>เดือนละ</Text>
									<Text>
										{mockDataPage1.page1.amount.reduce((a, b) => {
											return a + b.amount;
										}, 0)}
									</Text>

									<Text>บาท</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
						<Text>6.</Text>
						<View>
							{mockDataPage3.sponsors.map((data) => {
								return (
									<View style={styles.flexRowBetween}>
										<Text style={styles.rowStyle70}>ผู้อุปการะค่าใช้จ่าย</Text>
										<View style={[styles.rowStyle30]}>
											<Text>เดือนละ</Text>
											<Text>{data.monthly_allowance}</Text>
											<Text>บาท</Text>
										</View>
									</View>
								);
							})}
						</View>
					</View>
				</View>
				{/* content7 */}
				<View wrap={false}>
					<Text style={styles.bold}>รายได้และทุนอื่นๆ ที่เคยได้รับ</Text>
					<View style={[styles.flexRow, styles.normal]}>
						<Text style={{ marginRight: "5px" }}>7.</Text>
						<View>
							<Text>ทุนอื่นๆ ที่เคยได้รับตั้งแต่ชั้น ม.6</Text>
							//table 20 60 20
							<View style={[styles.flexRow]}>
								//column 1
								<View style={{ width: "20%" }}>
									<View style={[styles.tableLeft, { height: "auto" }]}>
										<Text>ปีที่ได้รับ</Text>
									</View>
									<View>
										{mockDataPage4.other_scholarships.map((data) => {
											return (
												<View style={[styles.tableRowLeft]}>
													<Text>{data.year}</Text>
												</View>
											);
										})}
									</View>
								</View>
								{/* //column 2 */}
								<View style={{ width: "60%" }}>
									<View style={[styles.tableMiddle, { height: "auto" }]}>
										<Text>ชื่อทุน</Text>
									</View>
									<>
										{mockDataPage4.other_scholarships.map((data) => {
											return (
												<View style={[styles.tableRowMiddle]}>
													<Text>{data.scholarship_name}</Text>
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
										{mockDataPage4.other_scholarships.map((data) => {
											return (
												<View style={[styles.tableRowRight]}>
													<Text>{data.annual_amount}</Text>
												</View>
											);
										})}
									</>
								</View>
							</View>
						</View>
					</View>
				</View>
				{/* content8 */}
				<View wrap={false} style={{ marginTop: "20px" }}>
					<View style={[styles.flexRow, styles.normal]}>
						<Text style={{ marginRight: "5px" }}>8.</Text>
						<View>
							<Text>ประวัติการทำงานหารายได้ระหว่างศึกษา</Text>
							{mockDataPage4.job_histories.map((data) => {
								return (
									<View>
										<View style={[styles.flexRow]}>
											<View style={styles.flexJustCenter}>
												<View style={styles.bullet}></View>
											</View>
											<Text style={styles.space200px}>
												ลักษณะงาน {data.occupation}
											</Text>
											<Text style={styles.space150px}>
												ตำแหน่ง {data.job_title}
											</Text>
											<Text>พ.ศ. ที่ทำงาน {data.job_start_year}</Text>
										</View>
										<View style={styles.flexRowBetween}>
											<View style={{ marginRight: "20px" }}></View>
											<Text style={styles.rowStyle70}>
												สถานที่ทำงาน {data.employer}
											</Text>
											<View style={[styles.rowStyle30]}>
												<Text>เดือนละ</Text>
												<Text>{data.monthly_earning}</Text>
												<Text>บาท</Text>
											</View>
										</View>
									</View>
								);
							})}
						</View>
					</View>
					{/* <View style={styles.hr} /> */}
				</View>
			</View>
		</Page>
	);
};

export default PageOne;
