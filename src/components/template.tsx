import { View, Text } from "@react-pdf/renderer";
import { convertADtoBC } from "./calculateAge";
import { calculateAgeFromBirthYear } from "./calculateAge";
import { formatNumberWithCommas } from "./formatNumberWithComma";
import { Parent } from "../../../../../services/repositories/register/FamilyInfo/dto";
import styles from "../style";
import {
	Job,
	Medical,
	Vehicle,
} from "../../../../../services/repositories/register/common/dto";
import { formatPhoneNum } from "./formatPhoneNum";
import { Address } from "../../../../../services/repositories/register/ApplicantInfo/dto";

interface BioInfoProps {
	data: Parent | null;
	title: string;
}

interface VehicleInfoProps {
	vehicles: Vehicle[];
}

interface JobInfoProps {
	jobs: Job[];
}

interface MedicalInfoProps {
	medicals: Medical[];
}

interface AddressSectionProps {
	title: string;
	address: Address | null | undefined;
	sectionNumber: string;
}

export const AddressSection: React.FC<AddressSectionProps> = ({
	title,
	address,
	sectionNumber,
}) => {
	if (!address) {
		return null;
	}

	return (
		<View>
			<Text style={styles.bold}>{title} </Text>
			<View style={[styles.flexRow, { gap: "5px" }]}>
				<Text>{sectionNumber} </Text>
				<View>
					<View style={styles.flexRowWithGap}>
						<Text style={styles.subtitle}>บ้านเลขที่ </Text>
						<Text style={styles.space125px}>{address.house_no} </Text>
						<Text style={styles.subtitle}>หมู่ที่ </Text>
						<Text style={styles.space100px}>{address.village_no} </Text>
						<Text style={styles.subtitle}>หมู่บ้าน </Text>
						<Text>{address.village_name} </Text>
					</View>

					<View style={styles.flexRowWithGap}>
						<Text style={styles.subtitle}>ซอย</Text>
						<Text style={{ width: "148px" }}>{address.alley} </Text>
						<Text style={styles.subtitle}>ถนน </Text>
						<Text style={styles.space200px}>{address.street} </Text>
					</View>

					<View style={styles.flexRowWithGap}>
						<Text style={styles.subtitle}>ตำบล </Text>
						<Text style={{ width: "172px" }}>{address.subdistrict} </Text>
						<Text style={styles.subtitle}>อำเภอ </Text>
						<Text style={styles.space150px}>{address.district} </Text>
						<Text style={styles.subtitle}>จังหวัด </Text>
						<Text style={styles.space150px}>{address.province} </Text>
					</View>

					<View style={styles.flexRowWithGap}>
						<Text style={styles.subtitle}>รหัสไปรษณีย์ </Text>
						<Text style={{ width: "110px" }}>{address.postal_code} </Text>
						<Text style={styles.subtitle}>หมายโทรศัพท์บ้าน </Text>
						<Text>{formatPhoneNum(address.phone_no)} </Text>
					</View>
				</View>
			</View>
		</View>
	);
};
export const MedicalInfo: React.FC<MedicalInfoProps> = ({ medicals }) => (
	<>
		<Text style={styles.subtitle}>โรคประจำตัว </Text>
		{medicals.length > 0 && medicals[0].disease !== "NULL" ? (
			<View>
				{medicals.map((medical, index) => (
					<View key={index} style={styles.flexRowWithGap}>
						<View style={styles.flexRow}>
							<View style={styles.bullet}></View>
							<Text style={styles.subtitle}>ชื่อโรค </Text>
						</View>
						<Text style={styles.space200px}>{medical.disease} </Text>
						<Text style={styles.subtitle}>ปีที่ตรวจพบ </Text>
						<Text>{convertADtoBC(medical.disease_onset_year)} </Text>
					</View>
				))}
			</View>
		) : (
			<View key="no-disease" style={styles.flexRow}>
				<View style={styles.bullet}></View>
				<Text>ไม่มีโรคประจำตัว </Text>
			</View>
		)}
	</>
);
export const JobInfo: React.FC<JobInfoProps> = ({ jobs }) => (
	<>
		<Text style={styles.subtitle}>งานปัจจุบัน </Text>
		{jobs.length === 0 ? (
			<View style={styles.flexRow}>
				<View style={styles.bullet}></View>
				<Text>ปัจจุบันว่างงาน </Text>
			</View>
		) : (
			jobs.map((job, index) => (
				<View key={index}>
					<View style={styles.flexRow}>
						<View style={styles.bullet} />
						<Text style={styles.subtitle}>ลักษณะงาน </Text>
						<Text>{job.occupation} </Text>
					</View>

					<View style={[styles.flexRowWithGap, { marginLeft: "30" }]}>
						<Text style={styles.subtitle}>ตำแหน่ง </Text>
						<Text style={{ width: "198px" }}>{job.job_title} </Text>
						<Text style={styles.subtitle}>พ.ศ. ที่ทำงาน </Text>
						<Text>{convertADtoBC(job.job_start_year)} </Text>
					</View>
					<View style={[styles.flexRowWithGap, { marginLeft: "30px" }]}>
						<Text style={styles.subtitle}>สถานที่ทำงาน </Text>
						<Text style={styles.space175px}>{job.employer} </Text>
						<Text style={styles.subtitle}>เดือนละ </Text>
						<Text>{formatNumberWithCommas(job.monthly_earning)} </Text>

						<Text style={styles.subtitle}>บาท </Text>
					</View>
				</View>
			))
		)}
	</>
);
export const VehicleInfo: React.FC<VehicleInfoProps> = ({ vehicles }) => (
	<>
		<Text style={styles.subtitle}>ยานพาหนะปัจจุบัน </Text>
		{vehicles.length === 0 ? (
			<View style={styles.flexRow}>
				<View style={styles.bullet}></View>
				<Text>ไม่มียานพาหนะ </Text>
			</View>
		) : (
			vehicles.map((data, index) => (
				<View key={index} style={styles.flexRowWithGap}>
					<View style={styles.flexRow}>
						<View style={styles.bullet}></View>
						<Text style={styles.subtitle}>ชนิดยานพาหนะ </Text>
					</View>
					<Text style={styles.space200px}>{data.vehicle_type} </Text>
					<Text style={styles.subtitle}>ยี่ห้อยานพาหนะ </Text>
					<Text> {data.vehicle_make} </Text>
				</View>
			))
		)}
	</>
);

const BioInfo: React.FC<BioInfoProps> = ({ data, title }) => (
	<View wrap={false} key={title}>
		{data === null ? null : (
			<View wrap={false} key={title}>
				<Text style={[styles.bold, styles.space100px]}>{title} </Text>
				<View style={{ marginLeft: "15px" }}>
					<View style={[styles.flexRowWithGap]}>
						<Text style={styles.subtitle}>ชื่อ </Text>
						<Text style={styles.space100px}>
							{data.parent_profile.firstname}{" "}
						</Text>
						<Text style={styles.subtitle}>สกุล </Text>
						<Text style={styles.space150px}>
							{data.parent_profile.lastname}{" "}
						</Text>
						<Text style={styles.subtitle}>ปีเกิด </Text>
						<Text style={styles.space75px}>
							{convertADtoBC(data.parent_profile.birth_year)}{" "}
						</Text>
						<Text style={styles.subtitle}>อายุ </Text>
						<Text style={[styles.space50px, { textAlign: "center" }]}>
							{calculateAgeFromBirthYear(data.parent_profile.birth_year)}{" "}
						</Text>
						<Text style={styles.subtitle}>ปี </Text>
					</View>
					<View style={styles.flexRowWithGap}>
						<Text style={styles.subtitle}>วุฒิการศึกษา </Text>
						<Text style={styles.space150px}>
							{data.parent_profile.highest_edu_level}{" "}
						</Text>
						<Text style={styles.subtitle}>หมายเลขโทรศัพท์ </Text>
						<Text style={styles.space175px}>
							{formatPhoneNum(data.parent_profile.phone_no)}{" "}
						</Text>
						{convertADtoBC(data.parent_profile.death_year) === null ? null : (
							<View style={styles.flexRowWithGap}>
								<Text style={styles.subtitle}>ปีที่เสียชีวิต </Text>
								<Text style={styles.space100px}>
									{convertADtoBC(data.parent_profile.death_year)}{" "}
								</Text>
							</View>
						)}
					</View>

					<VehicleInfo vehicles={data.vehicles} />

					<JobInfo jobs={data.jobs} />
					<MedicalInfo medicals={data.medicals} />
				</View>
			</View>
		)}
	</View>
);

export default BioInfo;
