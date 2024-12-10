import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";

import styles from "./style";
import mockData, { mockDataPage4 } from "./mockData";
// Register the Thai font need to change to Saraban when done

const PageFive: React.FC = () => {
	return (
		// <Page size={"A4"} style={styles.body}>
		<View style={styles.body}>
			<View style={{ marginTop: "20px" }}>
				<Text style={styles.bold}>ประวัติการศึกษา</Text>
				<View style={[styles.flexRow, { gap: "5px" }]}>
					<Text>14.</Text>
					<Text style={styles.space350px}>
						จบมัธยมศึกษาตอนปลายจากโรงเรียน{" "}
						{
							mockDataPage4.academic_history_table.high_school_record
								.high_school_name
						}
					</Text>
					<Text style={styles.space100px}>
						จังหวัด{" "}
						{
							mockDataPage4.academic_history_table.high_school_record
								.high_school_province
						}
					</Text>
					<Text style={styles.space50px}>
						GPA {mockDataPage4.academic_history_table.high_school_record.gpax}
					</Text>
				</View>
				<View style={[styles.flexRow, { gap: "5px" }]}>
					<Text>15.</Text>
					<Text style={styles.space350px}>ประวัติการศึกษาระดับอุดมศึกษา</Text>
				</View>
				{/* table 1 */}
				<View style={[styles.flexRow, { marginLeft: "15px" }]} wrap={false}>
					<View style={{ width: "15%" }}>
						<View style={[styles.tableLeft]}>
							<Text>ปีที่เข้าศึกษา</Text>
						</View>

						{mockDataPage4.other_college_enrollments.map((data) => {
							return (
								<View style={[styles.tableRowLeft]}>
									<Text>{data.entry_year}</Text>
								</View>
							);
						})}
					</View>
					<View style={{ width: "20%" }}>
						<View style={[styles.tableMiddle]}>
							<Text>มหาวิทยาลัย</Text>
						</View>
						{mockDataPage4.other_college_enrollments.map((data) => {
							return (
								<View style={[styles.tableRowMiddle]}>
									<Text>{data.college_name}</Text>
								</View>
							);
						})}
					</View>
					<View style={{ width: "20%" }}>
						<View style={[styles.tableRight]}>
							<Text>คณะ</Text>
						</View>
						{mockDataPage4.other_college_enrollments.map((data) => {
							return (
								<View style={[styles.tableRowRight]}>
									<Text>{data.faculty_name}</Text>
								</View>
							);
						})}
					</View>
					<View style={{ width: "20%" }}>
						<View style={[styles.tableRight]}>
							<Text>สาขาวิชา</Text>
						</View>
						{mockDataPage4.other_college_enrollments.map((data) => {
							return (
								<View style={[styles.tableRowRight]}>
									<Text>{data.major_name}</Text>
								</View>
							);
						})}
					</View>
					<View style={{ width: "15%" }}>
						<View style={[styles.tableRight]}>
							<Text>ระยะเวลาที่ศึกษา</Text>
						</View>
						{mockDataPage4.other_college_enrollments.map((data) => {
							return (
								<View style={[styles.tableRowRight]}>
									<Text>{data.enrollment_duration}</Text>
								</View>
							);
						})}
					</View>
					<View style={{ width: "10%" }}>
						<View style={[styles.tableRight]}>
							<Text>GPA</Text>
						</View>
						{mockDataPage4.other_college_enrollments.map((data) => {
							return (
								<View style={[styles.tableRowRight]}>
									<Text>{data.gpax}</Text>
								</View>
							);
						})}
					</View>
				</View>
				<View wrap={false} style={{ marginTop: "20px" }}>
					<View style={[styles.flexRow, { gap: "5px" }]}>
						<Text>16.</Text>
						<Text style={styles.space350px}>ผลการเรียนและการขอรับทุน</Text>
					</View>
					{/* table 2 */}
					<View style={[styles.flexRow, { marginLeft: "15px" }]}>
						<View style={{ width: "5%" }}>
							<View style={[styles.tableLeft, { height: "40px" }]}>
								<Text>ชั้นปี</Text>
							</View>
							{mockData.currentLevel.map((data) => {
								return (
									<View style={[styles.tableRowLeft]}>
										<Text>{data}</Text>
									</View>
								);
							})}
						</View>
						<View style={{ width: "25%" }}>
							<View style={[styles.tableMiddle]}>
								<Text>GPA</Text>
							</View>
							<View style={styles.flexRow}>
								<View style={[styles.tableRowLeft, { width: "35%" }]}>
									<Text>เทอม 1</Text>
								</View>
								<View style={[styles.tableRowMiddle, { width: "35%" }]}>
									<Text>เทอม 2</Text>
								</View>
								<View style={[styles.tableRowRight, { width: "35%" }]}>
									<Text>ฤดูร้อน</Text>
								</View>
							</View>
							{mockData.currentLevel.map((data) => {
								return (
									<View style={styles.flexRow}>
										<View style={[styles.tableRowLeft, { width: "35%" }]}>
											<Text>{mockData.grade}</Text>
										</View>
										<View style={[styles.tableRowMiddle, { width: "35%" }]}>
											<Text>{mockData.grade}</Text>
										</View>
										<View style={[styles.tableRowRight, { width: "35%" }]}>
											<Text>{mockData.grade}</Text>
										</View>
									</View>
								);
							})}
						</View>
						<View style={{ width: "20%" }}>
							<View style={[styles.tableRight]}>
								<Text>กยศ.</Text>
							</View>
							<View style={styles.flexRow}>
								<View style={[styles.tableRowRight, { width: "50%" }]}>
									<Text>รายเดือน</Text>
								</View>
								<View style={[styles.tableRowRight, { width: "50%" }]}>
									<Text>ค่าเล่าเรียน</Text>
								</View>
							</View>
							{mockData.currentLevel.map((data) => {
								return (
									<View style={styles.flexRow}>
										<View style={[styles.tableRowRight, { width: "50%" }]}>
											<Text>{mockData.money}</Text>
										</View>
										<View style={[styles.tableRowRight, { width: "50%" }]}>
											<Text>{mockData.money}</Text>
										</View>
									</View>
								);
							})}
						</View>
						<View style={{ width: "50%" }}>
							<View style={[styles.tableRight]}>
								<Text>ทุนคณะวิศวกรรมศาสตร์</Text>
							</View>
							<View style={styles.flexRow}>
								<View style={[styles.tableRowRight, { width: "35%" }]}>
									<Text>มูลค่าทุน</Text>
								</View>
								<View style={[styles.tableRowRight, { width: "35%" }]}>
									<Text>สถานที่ทำงานทุน</Text>
								</View>
								<View style={[styles.tableRowRight, { width: "35%" }]}>
									<Text>หมายเหตุ</Text>
								</View>
							</View>
							{mockData.currentLevel.map((data) => {
								return (
									<View style={styles.flexRow}>
										<View style={[styles.tableRowRight, { width: "35%" }]}>
											<Text>{mockData.money}</Text>
										</View>
										<View style={[styles.tableRowRight, { width: "35%" }]}>
											<Text>{mockData.scholarName}</Text>
										</View>
										<View style={[styles.tableRowRight, { width: "35%" }]}>
											<Text>{mockData.money}</Text>
										</View>
									</View>
								);
							})}
						</View>
					</View>
				</View>
				<View style={{ marginTop: "20px" }} wrap={false}>
					<Text style={[styles.bold, { marginTop: "15px" }]}>
						กิจกรรมที่เคยเข้าร่วม
					</Text>
					<Text>17.</Text>
				</View>
			</View>
		</View>
		// </Page>
	);
};
export default PageFive;
