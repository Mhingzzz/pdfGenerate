import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";

//import styles
import styles from "./style";
//import mockData
import { mockDataPage2 } from "./mockData";
import calcutionAge from "./calcutionAge";
// Register the Thai font need to change to Saraban when done

const PageThree: React.FC = () => {
	return (
		<Page size={"A4"}>
			<View style={[styles.body, { marginTop: "20px" }]}>
				<Text style={styles.bold}>พี่น้องที่ยังมีชีวิตอยู่</Text>

				<View style={[styles.flexRow, styles.normal, { gap: "5px" }]}>
					<View></View>
					<Text>12.</Text>
					<View>
						{/* section 1 */}
						{mockDataPage2.siblings.map((sibling, index) => {
							return (
								<View wrap={false}>
									<View style={[styles.flexRow]}>
										<Text style={[styles.bold, styles.space75px]}>
											บุตรลำดับที่ {index + 1}
										</Text>
										<Text style={styles.space100px}>
											ชื่อ {sibling.sibling_profile.firstname}
										</Text>
										<Text style={styles.space150px}>
											สกุล {sibling.sibling_profile.lastname}
										</Text>
										<Text style={styles.space75px}>
											ปีเกิด {sibling.sibling_profile.birth_year}
										</Text>
										<Text style={styles.space50px}>
											อายุ {calcutionAge(sibling.sibling_profile.birth_year)}
										</Text>
										<Text style={styles.space50px}>ปี</Text>
									</View>
									<View style={styles.flexRow}>
										<Text style={styles.space150px}>
											วุฒิการศึกษา {sibling.sibling_profile.highest_edu_level}
										</Text>
										<Text style={styles.space175px}>
											หมายเลขโทรศัพท์ {sibling.sibling_profile.phone_no}
										</Text>
										<Text style={styles.space100px}>
											สถานภาพ {sibling.marital_status_id}
										</Text>
										<Text style={styles.space75px}>
											จำนวนบุตร {sibling.num_children}
										</Text>
										<Text>คน</Text>
									</View>

									<Text>ยานพาหนะปัจจุบัน</Text>
									{sibling.vehicles.map((vehicle) => {
										return (
											<View style={styles.flexRow}>
												<View style={styles.flexJustCenter}>
													<View style={styles.bullet}></View>
												</View>
												<Text style={styles.space200px}>
													ชนิดยานพาหนะ {vehicle.vehicle_type}
												</Text>
												<Text>ยี่ห้อยานพาหนะ {vehicle.vehicle_make}</Text>
											</View>
										);
									})}

									<Text>การศึกษาปัจจุบัน (หากยังศึกษาอยู่)</Text>
									<View style={styles.flexRow}>
										<View style={styles.flexJustCenter}>
											<View style={styles.bullet}></View>
										</View>
										<Text style={styles.space200px}>
											ระดับการศึกษา {sibling.education.current_edu_level}
										</Text>
										<Text style={styles.space150px}>
											สถานศึกษา {sibling.education.current_edu_location}
										</Text>
										<Text>จังหวัด {sibling.education.province}</Text>
									</View>
									<View style={[styles.flexRow, { marginLeft: "20px" }]}>
										<Text style={styles.space125px}>
											ค่าใช้จ่ายรายเดือน {sibling.education.monthly_expense}
										</Text>
										<Text>บาท </Text>
										<Text>
											ผู้อุปการะค่าใช้จ่าย {sibling.education.expense_sponsor}
										</Text>
									</View>
									<Text>งานปัจจุบัน (หากมีงานทำ)</Text>
									{sibling.jobs.map((job) => {
										return (
											<View>
												<View style={styles.flexRow}>
													<View style={styles.flexJustCenter}>
														<View style={styles.bullet}></View>
													</View>
													<Text style={styles.space200px}>
														ลักษณะงาน {job.occupation}
													</Text>
													<Text style={styles.space150px}>
														ตำแหน่ง {job.job_title}
													</Text>
													<Text>พ.ศ. ที่ทำงาน {job.job_start_year}</Text>
												</View>
												<View style={[styles.flexRow, { marginLeft: "20px" }]}>
													<Text style={styles.space350px}>
														สถานที่ทำงาน {job.employer}
													</Text>
													<Text style={styles.space100px}>
														รายได้ต่อเดือน {job.monthly_earning}
													</Text>
													<Text>บาท</Text>
												</View>
											</View>
										);
									})}

									<Text>โรคประจำตัว</Text>
									{sibling.medicals.map((medical) => {
										return (
											<View style={styles.flexRow}>
												<View style={styles.flexJustCenter}>
													<View style={styles.bullet}></View>
												</View>
												<Text style={styles.space200px}>
													ชื่อโรค {medical.disease}
												</Text>
												<Text>ปีที่ตรวจพบ {medical.disease_onset_year}</Text>
											</View>
										);
									})}
								</View>
							);
						})}
						{/* section 2 */}
						{/* <View wrap={false} style={{ marginTop: "20px" }}>
							<View style={[styles.flexRow]}>
								<Text style={[styles.bold, styles.space75px]}>
									บุตรลำดับที่ {mockData.age}
								</Text>
								<Text style={styles.space100px}>ชื่อ {mockData.firstName}</Text>
								<Text style={styles.space150px}>สกุล {mockData.lastName}</Text>
								<Text style={styles.space75px}>
									ปีเกิด {mockData.birthYear}
								</Text>
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
						</View> */}
						{/* section 3 */}
						{/* <View style={{ marginTop: "20px" }} wrap={false}>
							<View style={[styles.flexRow]}>
								<Text style={[styles.bold, styles.space75px]}>
									บุตรลำดับที่ {mockData.age}
								</Text>
								<Text style={styles.space100px}>ชื่อ {mockData.firstName}</Text>
								<Text style={styles.space150px}>สกุล {mockData.lastName}</Text>
								<Text style={styles.space75px}>
									ปีเกิด {mockData.birthYear}
								</Text>
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
						</View> */}
						{/* <View style={styles.hr} /> */}
					</View>
				</View>
			</View>
		</Page>
	);
};

export default PageThree;
