import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";

//import styles
import styles from "./style";
import { mockDataPage2 } from "./mockData";
import calcutionAge from "./calcutionAge";
// Register the Thai font need to change to Saraban when done

const PageTwo: React.FC = () => {
	return (
		<Page size={"A4"}>
			<View style={styles.body}>
				<View wrap={false} style={{ marginTop: "20px" }}>
					<Text style={[styles.bold]}>ประวัติครอบครัว</Text>

					<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
						<Text>9.</Text>
						<div>
							<View style={[styles.flexRow]}>
								<Text style={styles.space125px}>
									ผู้สมัครเป็นบุตรลำดับที่ {mockDataPage2.birth_order}
								</Text>
								<Text style={styles.space75px}>
									จากทั้งสิ้น {mockDataPage2.sibling_count}
								</Text>
								<Text style={styles.space100px}>คน</Text>
							</View>
						</div>
					</View>
					<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
						<Text>10.</Text>
						<div>
							<View style={[styles.flexRow]}>
								<Text style={styles.space125px}>ความสัมพันธ์ในครอบครัว</Text>
							</View>
						</div>
					</View>
				</View>
				<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
					<Text>11.</Text>
					<View>
						{/* section 1 */}
						<View wrap={false}>
							<View style={[styles.flexRow]}>
								<Text style={[styles.bold, styles.space75px]}>
									บิดาโดยกำเนิด
								</Text>
								<Text style={styles.space100px}>
									ชื่อ {mockDataPage2.bio_dad.parent_profile.firstname}
								</Text>
								<Text style={styles.space150px}>
									สกุล {mockDataPage2.bio_dad.parent_profile.lastname}
								</Text>
								<Text style={styles.space75px}>
									ปีเกิด {mockDataPage2.bio_dad.parent_profile.birth_year}
								</Text>
								<Text style={styles.space50px}>
									อายุ{" "}
									{calcutionAge(
										mockDataPage2.bio_dad.parent_profile.birth_year
									)}
								</Text>
								<Text style={styles.space50px}>ปี</Text>
							</View>
							<View style={styles.flexRow}>
								<Text style={styles.space150px}>
									วุฒิการศึกษา{" "}
									{mockDataPage2.bio_dad.parent_profile.highest_edu_level}
								</Text>
								<Text style={styles.space175px}>
									หมายเลขโทรศัพท์{" "}
									{mockDataPage2.bio_dad.parent_profile.phone_no}
								</Text>
								<Text style={styles.space50px}>
									ปีที่เสียชีวิต{" "}
									{mockDataPage2.bio_dad.parent_profile.death_year}
								</Text>
							</View>

							<Text>ยานพาหนะปัจจุบัน</Text>
							{mockDataPage2.bio_dad.vehicles.map((data) => {
								return (
									<View style={styles.flexRow}>
										<div style={styles.flexJustCenter}>
											<View style={styles.bullet}></View>
										</div>
										<Text style={styles.space200px}>
											ชนิดยานพาหนะ {data.vehicle_type}
										</Text>
										<Text>ยี่ห้อยานพาหนะ {data.vehicle_make}</Text>
									</View>
								);
							})}

							<Text>งานปัจจุบัน</Text>
							{mockDataPage2.bio_dad.jobs.map((data) => {
								return (
									<View>
										<View style={styles.flexRow}>
											<div style={styles.flexJustCenter}>
												<View style={styles.bullet}></View>
											</div>
											<Text style={styles.space200px}>
												ลักษณะงาน {data.occupation}
											</Text>
											<Text style={styles.space150px}>
												ตำแหน่ง {data.job_title}
											</Text>
											<Text>พ.ศ. ที่ทำงาน {data.job_start_year}</Text>
										</View>
										<View style={[styles.flexRow, { marginLeft: "20px" }]}>
											<Text style={styles.space350px}>
												สถานที่ทำงาน {data.employer}
											</Text>
											<Text style={styles.space100px}>
												รายได้ต่อเดือน {data.monthly_earning}
											</Text>
											<Text>บาท</Text>
										</View>
									</View>
								);
							})}

							<Text>โรคประจำตัว</Text>
							{mockDataPage2.bio_dad.medicals.map((data) => {
								return (
									<View style={styles.flexRow}>
										<div style={styles.flexJustCenter}>
											<View style={styles.bullet}></View>
										</div>
										<Text style={styles.space200px}>
											ชื่อโรค {data.disease}
										</Text>
										<Text>ปีที่ตรวจพบ {data.disease_onset_year}</Text>
									</View>
								);
							})}
						</View>
						{/* section 2 */}
						<View wrap={false} style={{ marginTop: "20px" }}>
							<View style={[styles.flexRow]}>
								<Text style={[styles.bold, styles.space75px]}>
									มารดาโดยกำเนิด
								</Text>
								<Text style={styles.space100px}>
									ชื่อ {mockDataPage2.bio_mom.parent_profile.firstname}
								</Text>
								<Text style={styles.space150px}>
									สกุล {mockDataPage2.bio_mom.parent_profile.lastname}
								</Text>
								<Text style={styles.space75px}>
									ปีเกิด {mockDataPage2.bio_mom.parent_profile.birth_year}
								</Text>
								<Text style={styles.space50px}>
									อายุ{" "}
									{calcutionAge(
										mockDataPage2.bio_mom.parent_profile.birth_year
									)}
								</Text>
								<Text style={styles.space50px}> ปี</Text>
							</View>
							<View style={styles.flexRow}>
								<Text style={styles.space150px}>
									วุฒิการศึกษา{" "}
									{mockDataPage2.bio_mom.parent_profile.highest_edu_level}
								</Text>
								<Text style={styles.space175px}>
									หมายเลขโทรศัพท์{mockDataPage2.bio_mom.parent_profile.phone_no}
								</Text>
								<Text style={styles.space50px}>
									ปีที่เสียชีวิต{" "}
									{mockDataPage2.bio_mom.parent_profile.death_year}
								</Text>
							</View>

							<Text>ยานพาหนะปัจจุบัน</Text>
							{mockDataPage2.bio_mom.vehicles.map((data) => {
								return (
									<View style={styles.flexRow}>
										<div style={styles.flexJustCenter}>
											<View style={styles.bullet}></View>
										</div>
										<Text style={styles.space200px}>
											ชนิดยานพาหนะ {data.vehicle_type}
										</Text>
										<Text>ยี่ห้อยานพาหนะ {data.vehicle_make}</Text>
									</View>
								);
							})}

							<Text>งานปัจจุบัน</Text>
							{mockDataPage2.bio_mom.jobs.map((data) => {
								return (
									<View>
										<View style={styles.flexRow}>
											<div style={styles.flexJustCenter}>
												<View style={styles.bullet}></View>
											</div>
											<Text style={styles.space200px}>
												ลักษณะงาน {data.occupation}
											</Text>
											<Text style={styles.space150px}>
												ตำแหน่ง {data.job_title}
											</Text>
											<Text>พ.ศ. ที่ทำงาน {data.job_start_year}</Text>
										</View>
										<View style={[styles.flexRow, { marginLeft: "20px" }]}>
											<Text style={styles.space350px}>
												สถานที่ทำงาน {data.employer}
											</Text>
											<Text style={styles.space100px}>
												รายได้ต่อเดือน {data.monthly_earning}
											</Text>
											<Text>บาท</Text>
										</View>
									</View>
								);
							})}
							<Text>โรคประจำตัว</Text>
							{mockDataPage2.bio_dad.medicals.map((data) => {
								return (
									<View style={styles.flexRow}>
										<div style={styles.flexJustCenter}>
											<View style={styles.bullet}></View>
										</div>
										<Text style={styles.space200px}>
											ชื่อโรค {data.disease}
										</Text>
										<Text>ปีที่ตรวจพบ {data.disease_onset_year}</Text>
									</View>
								);
							})}
						</View>
						{/* section 3 */}
						<View wrap={false} style={{ marginTop: "20px" }}>
							<View style={[styles.flexRow]}>
								<Text style={[styles.bold, styles.space75px]}>
									บิดาปัจจุบัน
								</Text>
								<Text style={styles.space100px}>
									ชื่อ {mockDataPage2.cur_dad.parent_profile.firstname}
								</Text>
								<Text style={styles.space150px}>
									สกุล {mockDataPage2.cur_dad.parent_profile.lastname}
								</Text>
								<Text style={styles.space75px}>
									ปีเกิด {mockDataPage2.cur_dad.parent_profile.birth_year}
								</Text>
								<Text style={styles.space50px}>
									อายุ{" "}
									{calcutionAge(
										mockDataPage2.cur_dad.parent_profile.birth_year
									)}
								</Text>
								<Text style={styles.space50px}>ปี</Text>
							</View>
							<View style={styles.flexRow}>
								<Text style={styles.space150px}>
									วุฒิการศึกษา{"  "}
									{mockDataPage2.cur_dad.parent_profile.highest_edu_level}
								</Text>
								<Text style={styles.space175px}>
									หมายเลขโทรศัพท์{" "}
									{mockDataPage2.cur_dad.parent_profile.phone_no}
								</Text>
								<Text style={styles.space50px}>
									ปีที่เสียชีวิต{" "}
									{mockDataPage2.cur_dad.parent_profile.death_year}
								</Text>
							</View>

							<Text>ยานพาหนะปัจจุบัน</Text>
							{mockDataPage2.cur_dad.vehicles.map((data) => {
								return (
									<View style={styles.flexRow}>
										<div style={styles.flexJustCenter}>
											<View style={styles.bullet}></View>
										</div>
										<Text style={styles.space200px}>
											ชนิดยานพาหนะ {data.vehicle_type}
										</Text>
										<Text>ยี่ห้อยานพาหนะ {data.vehicle_make}</Text>
									</View>
								);
							})}

							<Text>งานปัจจุบัน</Text>
							{mockDataPage2.cur_dad.jobs.map((data) => {
								return (
									<View>
										<View style={styles.flexRow}>
											<div style={styles.flexJustCenter}>
												<View style={styles.bullet}></View>
											</div>
											<Text style={styles.space200px}>
												ลักษณะงาน {data.occupation}
											</Text>
											<Text style={styles.space150px}>
												ตำแหน่ง {data.job_title}
											</Text>
											<Text>พ.ศ. ที่ทำงาน {data.job_start_year}</Text>
										</View>
										<View style={[styles.flexRow, { marginLeft: "20px" }]}>
											<Text style={styles.space350px}>
												สถานที่ทำงาน {data.employer}
											</Text>
											<Text style={styles.space100px}>
												รายได้ต่อเดือน {data.monthly_earning}
											</Text>
											<Text>บาท</Text>
										</View>
									</View>
								);
							})}

							<Text>โรคประจำตัว</Text>
							{mockDataPage2.cur_dad.medicals.map((data) => {
								return (
									<View style={styles.flexRow}>
										<div style={styles.flexJustCenter}>
											<View style={styles.bullet}></View>
										</div>
										<Text style={styles.space200px}>
											ชื่อโรค {data.disease}
										</Text>
										<Text>ปีที่ตรวจพบ {data.disease_onset_year}</Text>
									</View>
								);
							})}
						</View>
						{/* section 4 */}
						<View wrap={false} style={{ marginTop: "20px" }}>
							<View style={[styles.flexRow]}>
								<Text style={[styles.bold, styles.space75px]}>
									มารดาปัจจุบัน
								</Text>
								<Text style={styles.space100px}>
									ชื่อ {mockDataPage2.cur_mom.parent_profile.firstname}
								</Text>
								<Text style={styles.space150px}>
									สกุล {mockDataPage2.cur_mom.parent_profile.lastname}
								</Text>
								<Text style={styles.space75px}>
									ปีเกิด {mockDataPage2.cur_mom.parent_profile.birth_year}
								</Text>
								<Text style={styles.space50px}>
									อายุ{" "}
									{calcutionAge(
										mockDataPage2.cur_mom.parent_profile.birth_year
									)}
								</Text>
								<Text style={styles.space50px}>ปี</Text>
							</View>
							<View style={styles.flexRow}>
								<Text style={styles.space150px}>
									วุฒิการศึกษา{" "}
									{mockDataPage2.cur_mom.parent_profile.highest_edu_level}
								</Text>
								<Text style={styles.space175px}>
									หมายเลขโทรศัพท์{" "}
									{mockDataPage2.cur_mom.parent_profile.phone_no}
								</Text>
								<Text style={styles.space50px}>
									ปีที่เสียชีวิต{" "}
									{mockDataPage2.cur_mom.parent_profile.death_year}
								</Text>
							</View>

							<Text>ยานพาหนะปัจจุบัน</Text>
							{mockDataPage2.cur_mom.vehicles.map((data) => {
								return (
									<View style={styles.flexRow}>
										<div style={styles.flexJustCenter}>
											<View style={styles.bullet}></View>
										</div>
										<Text style={styles.space200px}>
											ชนิดยานพาหนะ {data.vehicle_type}
										</Text>
										<Text>ยี่ห้อยานพาหนะ {data.vehicle_make}</Text>
									</View>
								);
							})}

							<Text>งานปัจจุบัน</Text>
							{mockDataPage2.cur_mom.jobs.map((data) => {
								return (
									<View>
										<View style={styles.flexRow}>
											<div style={styles.flexJustCenter}>
												<View style={styles.bullet}></View>
											</div>
											<Text style={styles.space200px}>
												ลักษณะงาน {data.occupation}
											</Text>
											<Text style={styles.space150px}>
												ตำแหน่ง {data.job_title}
											</Text>
											<Text>พ.ศ. ที่ทำงาน {data.job_start_year}</Text>
										</View>
										<View style={[styles.flexRow, { marginLeft: "20px" }]}>
											<Text style={styles.space350px}>
												สถานที่ทำงาน {data.employer}
											</Text>
											<Text style={styles.space100px}>
												รายได้ต่อเดือน {data.monthly_earning}
											</Text>
											<Text>บาท</Text>
										</View>
									</View>
								);
							})}

							<Text>โรคประจำตัว</Text>
							{mockDataPage2.cur_mom.medicals.map((data) => {
								return (
									<View style={styles.flexRow}>
										<div style={styles.flexJustCenter}>
											<View style={styles.bullet}></View>
										</div>
										<Text style={styles.space200px}>
											ชื่อโรค {data.disease}
										</Text>
										<Text>ปีที่ตรวจพบ {data.disease_onset_year}</Text>
									</View>
								);
							})}

							<View style={styles.hr} />
						</View>
					</View>
				</View>
			</View>
		</Page>
	);
};

export default PageTwo;
