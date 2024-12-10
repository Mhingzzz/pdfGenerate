import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";

//import styles
import styles from "./style";
//import mockData
import { mockDataPage1, mockDataPage6 } from "./mockData";
// Register the Thai font need to change to Saraban when done

const PageSix: React.FC = () => {
	return (
		<Page size={"A4"}>
			<View style={[styles.body, { marginLeft: "30px", marginTop: "20px" }]}>
				{/* section 1 */}
				<View>
					<Text style={styles.bold}>เหตุผลในการขอรับทุน</Text>
					<View style={styles.flexRow} wrap={false}>
						<Text>18.</Text>
						<Text>
							เหตุผลและความจำเป็นในการสมัครขอรับทุนการศึกษา (ระบุให้ชัดเจน)
						</Text>
					</View>
					<View style={{ height: "150px" }}>
						<Text>{mockDataPage6.rationale}</Text>
					</View>
					{/* section 2 */}
					<View style={{ marginTop: "20px" }} wrap={false}>
						<View style={styles.flexRow}>
							<Text>19.</Text>
							<Text>
								นักศึกษาสนใจทำงานลักษณะใด และช่วงเวลาใดที่สะดวกที่จะทำงาน
								(ระบุให้ชัดเจน)
							</Text>
						</View>
						<View style={{ height: "100px" }}>
							<Text>{mockDataPage6.work_preference}</Text>
						</View>
					</View>
				</View>
				{/* content 4 to sign */}
				<View wrap={false} style={{ marginTop: "20px" }}>
					{/* content 3 */}
					<View>
						<Text style={styles.bold}>รายละเอียดบัญชีธนาคาร</Text>
						<View style={[styles.flexRow, { gap: "5px" }]}>
							<Text>20.</Text>
							{/* <Text style={styles.space200px}>ธนาคาร</Text>
							<Text>สาขา</Text> */}
							<Text style={styles.space200px}>
								ชื่อบัญชี {mockDataPage6.payment_info.acct_name}
							</Text>
							<Text>เลขที่บัญชี {mockDataPage6.payment_info.acct_number}</Text>
						</View>
						<View style={[styles.flexRow, { marginLeft: "15px" }]}></View>
					</View>
					{/* content 4 */}
					<View>
						<Text style={styles.bold}>ความเห็นของอาจารย์ที่ปรึกษา</Text>
						<Text>21.</Text>
						<View style={{ height: "200px", border: "1px" }}></View>
					</View>
					{/* idea use  the different size of box and use align item to adjust the content to be the same line */}
					<View
						style={[
							styles.flexRow,
							{ marginTop: "20px", justifyContent: "space-around" },
						]}
					>
						{/* sign first box */}
						<View style={[styles.space200px]}>
							<View style={styles.flexRow}>
								<Text>ลงชื่อ</Text>
								<View
									style={[
										styles.space150px,
										{ borderBottom: "1px solid black" },
									]}
								></View>
							</View>
							<View
								style={[
									styles.space175px,
									{ display: "flex", alignItems: "center" },
								]}
							>
								<Text>(ชินวัตร อิศราดิสัยกุล)</Text>
								<Text>อาจารย์ที่ปรึกษา</Text>
								<View style={styles.flexRow}>
									<Text>วันที่</Text>
									<View
										style={[
											styles.space125px,
											{ borderBottom: "1px solid black" },
										]}
									></View>
								</View>
							</View>
						</View>
						{/* sign second box */}
						<View style={[styles.space200px]}>
							<View style={styles.flexRow}>
								<Text>ลงชื่อ</Text>
								<View
									style={[
										styles.space150px,
										{ borderBottom: "1px solid black" },
									]}
								></View>
							</View>
							<View
								style={[
									styles.space175px,
									{ display: "flex", alignItems: "center" },
								]}
							>
								<Text>
									{"("}
									{mockDataPage1.first_name} {mockDataPage1.last_name}
									{")"}
								</Text>
								<Text>ผู้สมัคร</Text>
								<View style={styles.flexRow}>
									<Text>วันที่</Text>
									<View
										style={[
											styles.space125px,
											{ borderBottom: "1px solid black" },
										]}
									></View>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		</Page>
	);
};
export default PageSix;
