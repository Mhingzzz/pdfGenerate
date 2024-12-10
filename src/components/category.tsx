// import { specDTO } from "../../../../../services/repositories/dropdown/dto";
import { ExpenseCategory, MaritalStatus } from "../interface/index";

const expenseCategories: ExpenseCategory[] = [
	{
		exp_cat_id: 1,
		exp_cat_name: "ค่าอาหาร ",
	},
	{
		exp_cat_id: 2,
		exp_cat_name: "ค่าใช้จ่ายส่วนตัวอื่นๆ ",
	},
	{
		exp_cat_id: 3,
		exp_cat_name: "ค่าเช่าที่พัก (รวมค่าน้ำ ค่าไฟ และค่าอินเทอร์เน็ต) ",
	},
	{
		exp_cat_id: 4,
		exp_cat_name: "ค่าอุปกรณ์การศึกษา ",
	},
	{
		exp_cat_id: 5,
		exp_cat_name: "ค่ายานพาหนะเดินทาง ",
	},
];

export function getExpenseCategoryName(
	exp_cat_id: number
): string | null | undefined {
	if (exp_cat_id === 0) return null;
	const category = expenseCategories.find(
		(cat) => cat.exp_cat_id === exp_cat_id
	);
	return category?.exp_cat_name;
}

interface DwellingCategory {
	dwelling_cat_id: number;
	dwelling_cat_name: string;
}

const dwellingCategories: DwellingCategory[] = [
	{
		dwelling_cat_id: 1,
		dwelling_cat_name: "บ้านของตนเอง",
	},
	{
		dwelling_cat_id: 2,
		dwelling_cat_name: "บ้านของญาติ",
	},
	{
		dwelling_cat_id: 3,
		dwelling_cat_name: "บ้านพักของหน่วยงาน",
	},
	{
		dwelling_cat_id: 4,
		dwelling_cat_name: "บ้านเช่า",
	},
	{
		dwelling_cat_id: 5,
		dwelling_cat_name: "อื่นๆ",
	},
];

export function getDwellingCategoryName(
	dwelling_cat_id: number
): string | undefined {
	const category = dwellingCategories.find(
		(cat) => cat.dwelling_cat_id === dwelling_cat_id
	);
	return category?.dwelling_cat_name;
}

const maritalStatuses: MaritalStatus[] = [
	{
		marital_status_id: 1,
		marital_status: "สมรส",
	},
	{
		marital_status_id: 2,
		marital_status: "แยกกันอยู่",
	},
	{
		marital_status_id: 3,
		marital_status: "หย่า",
	},
	{
		marital_status_id: 4,
		marital_status: "หม้าย",
	},
	{
		marital_status_id: 5,
		marital_status: "ปกติ อยู่ด้วยกัน",
	},
	{
		marital_status_id: 6,
		marital_status: "ปกติ ไม่ได้อยู่ด้วยกัน",
	},
	{
		marital_status_id: 7,
		marital_status: "หย่าร้าง",
	},
	{
		marital_status_id: 8,
		marital_status: "หย่าร้าง บิดามีภรรยาใหม่",
	},
	{
		marital_status_id: 9,
		marital_status: "หย่าร้าง มารดามีสามีใหม่",
	},
	{
		marital_status_id: 10,
		marital_status: "หย่าร้าง บิดามีภรรยาใหม่ มารดามีสามีใหม่",
	},
	{
		marital_status_id: 11,
		marital_status: "แยกทางกัน",
	},
	{
		marital_status_id: 12,
		marital_status: "แยกทางกัน บิดามีภรรยาใหม่",
	},
	{
		marital_status_id: 13,
		marital_status: "แยกทางกัน มารดามีสามีใหม่",
	},
	{
		marital_status_id: 14,
		marital_status: "แยกทางกัน บิดามีภรรยาใหม่ มารดามีสามีใหม่",
	},
	{
		marital_status_id: 15,
		marital_status: "โสด",
	},
];
export function getMaritalStatusName(
	marital_status_id: number
): string | null | undefined {
	if (marital_status_id === 0) return null;
	const status = maritalStatuses.find(
		(s) => s.marital_status_id === marital_status_id
	);
	return status?.marital_status;
}
