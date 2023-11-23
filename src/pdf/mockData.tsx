export const mockDataPage1 = {
	page1: {
		prefix: "",
		first_name: "",
		last_name: "",
		nickname: "",
		birth_date: "",
		student_id: "",
		major_name: "",
		advisor_name: "",
		cmu_account: "",
		phone_no_student: "",
		dorm_name: "",
		dorm_room_no: "",
		dorm_phone: "",
		dorm_num_occupants: 0,
		dorm_monthly_rate: 0,
		personal_vehicle: [
			{
				vehicle_type: "string",
				vehicle_make: "string",
			},
		],
		current_house_no: "",
		current_village_no: "",
		current_village_name: "",
		current_alley: "",
		current_street: "",
		current_subdistrict: "",
		current_district: "",
		current_province: "",
		current_postal_code: "",
		current_phone_no_address: "",
		current_latitude: 0,
		current_longitude: 0,
		permanent_house_no: "",
		permanent_village_no: "",
		permanent_village_name: "",
		permanent_alley: "",
		permanent_street: "",
		permanent_subdistrict: "",
		permanent_district: "",
		permanent_province: "",
		permanent_postal_code: "",
		permanent_phone_no_address: "",
		permanent_latitude: 0,
		permanent_longitude: 0,
		first_uni: null, //0 no 1 yes
		amount: [
			{
				type_expense: 0,
				amount: 0,
			},
		],
		requested_spec_id: 0,
	},
	check: {
		in_DB: false,
	},
};

export const mockDataPage2 = {
	app_id: 1,
	birth_order: 1,
	parent_status: null,
	bio_dad: {
		parent_profile: {
			firstname: "สยาม",
			lastname: "ญาณะ",
			gender: "ชาย",
			birth_year: "",
			highest_edu_level: "ปวส.",
			phone_no: "0979957745",
			death_year: "",
			sort_order: 1,
		},
		vehicles: [
			{
				vehicle_type: "ไม่มี",
				vehicle_make: "NULL",
			},
		],
		medicals: [
			{
				disease: "NULL",
				disease_onset_year: "NULL",
			},
		],
		jobs: [
			{
				occupation: "พนักงานบริษัท",
				job_title: "พนักงานขับรถ ตำแหน่ง เอกทวีทรัพย์",
				employer: "",
				job_start_year: "",
				job_end_year: "",
				monthly_earning: "9000.00",
			},
		],
	},
	bio_mom: {
		parent_profile: {
			firstname: "สายสมอน",
			lastname: "ญาณะ",
			gender: "หญิง",
			birth_year: "",
			highest_edu_level: "ม.6",
			phone_no: "0933231574",
			death_year: "",
			sort_order: 2,
		},
		vehicles: [
			{
				vehicle_type: "รถกระบะ",
				vehicle_make: "อีซูสุ",
			},
		],
		medicals: [
			{
				disease: "NULL",
				disease_onset_year: "NULL",
			},
		],
		jobs: [
			{
				occupation: "พนักงานบริษัท",
				job_title: "พนักงานขาย ตำแหน่ง ธุรีฟ้า",
				employer: "",
				job_start_year: "",
				job_end_year: "",
				monthly_earning: "11000.00",
			},
		],
	},
	cur_dad: null,
	cur_mom: null,
	siblings: [],
	sibling_count: 0,
};
export const mockDataPage3 = {
	app_id: 1,
	sponsors: [
		{
			relation: "แม่",
			monthly_allowance: "0.00",
			sponsor_profile: {
				parent_profile: {
					firstname: "สายสมอน",
					lastname: "ญาณะ",
					gender: "หญิง",
					birth_year: "",
					highest_edu_level: "ม.6",
					phone_no: "0933231574",
					death_year: "",
				},
				vehicles: [
					{
						vehicle_type: "รถกระบะ",
						vehicle_make: "อีซูสุ",
					},
				],
				medicals: [
					{
						disease: "NULL",
						disease_onset_year: "NULL",
					},
				],
				jobs: [
					{
						occupation: "พนักงานบริษัท",
						job_title: "พนักงานขาย ตำแหน่ง ธุรีฟ้า",
						employer: "",
						job_start_year: "",
						job_end_year: "",
						monthly_earning: "11000.00",
					},
				],
			},
			debts: [
				{
					spon_debt_id: 1078,
					profile_sponsor_id: 2,
					debt_description: "ไม่สามารถระบุได้",
					debt_amount: "0.00",
				},
			],
			dependents: [],
		},
		{
			relation: "พ่อ",
			monthly_allowance: "0.00",
			sponsor_profile: {
				parent_profile: {
					firstname: "สยาม",
					lastname: "ญาณะ",
					gender: "ชาย",
					birth_year: "",
					highest_edu_level: "ปวส.",
					phone_no: "0979957745",
					death_year: "",
				},
				vehicles: [
					{
						vehicle_type: "ไม่มี",
						vehicle_make: "NULL",
					},
				],
				medicals: [
					{
						disease: "NULL",
						disease_onset_year: "NULL",
					},
				],
				jobs: [
					{
						occupation: "พนักงานบริษัท",
						job_title: "พนักงานขับรถ ตำแหน่ง เอกทวีทรัพย์",
						employer: "",
						job_start_year: "",
						job_end_year: "",
						monthly_earning: "9000.00",
					},
				],
			},
			debts: [],
			dependents: [],
		},
	],
};
export const mockDataPage4 = {
	academic_history_table: {
		high_school_record: {
			high_school_name: "ดาราวิทยาลัย",
			high_school_province: "เชียงใหม่",
			gpax: "3.28",
			gpa_6_1: "0.00",
			gpa_6_2: "0.00",
		},
		tableDatas: [
			{
				year: "2561",
				semester1: 0,
				semester2: 0,
				semester3: 0,
				grant_monthly_allowance: true,
				grant_tuition: true,
				scholarship_sum: 0,
				work_location: "",
			},
			{
				year: "2562",
				semester1: 0,
				semester2: 0,
				semester3: 0,
				grant_monthly_allowance: true,
				grant_tuition: true,
				scholarship_sum: 0,
				work_location: "",
			},
			{
				year: "2563",
				semester1: 0,
				semester2: 0,
				semester3: 0,
				grant_monthly_allowance: true,
				grant_tuition: true,
				scholarship_sum: 15000,
				work_location: "ภาควิชาวิศวกรรมเครื่องกล",
			},
			{
				year: "2564",
				semester1: 0,
				semester2: 0,
				semester3: 0,
				grant_monthly_allowance: true,
				grant_tuition: true,
				scholarship_sum: 0,
				work_location: "",
			},
		],
	},
	other_college_enrollments: [],
	other_scholarships: [
		{
			year: "",
			scholarship_name: "",
			annual_amount: "0.00",
		},
	],
	job_histories: [
		// optional
		{
			occupation: "string",
			job_priority: "string",
			job_title: "string",
			employer: "string",
			job_start_year: "string",
			job_end_year: "string",
			monthly_earning: 0,
		},
	],
	activity_list: "จิตอาสา ปลูกป่า",
};

export const mockDataPage6 = {
	Step6: {
		rationale:
			"พ่อเเม่มีภาระค่าใช้จ่ายในครอบครัวค่อนข้างสูง มีน้องที่กำลังศึกษาอยู่ในระดับมัธยมต้น แม่มีภาระหนี้ที่ต้องผ่อนชำระ ค่าเรียนในภาคอินเตอร์ค่อยข้างสูง แม่มีค่าใช้จ่ายในการรักษาโรคประจำตัวของยาย",
		work_preference: "ลักษณะใดก็ได้ ตอนเย็นหลังเรียนเสร็จ หรือเวลาว่าง",
		payment_info: {
			acct_name: "จิตตินันท์ ญาณะ",
			acct_number: "5665501572",
		},
	},
};
