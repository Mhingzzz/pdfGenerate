import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import CMULogo from "../../public/logo1.png";
import { formatNumberWithCommas } from "../components/formatNumberWithComma";
import { convertADtoBC } from "../components/calculateAge";
import SarabunFontRegular from "../font/Sarabun-Regular-normal";
import THSarabunNew from "../font/THSarabunNew-normal";
import NiramitIT9 from "../font/NiramitIT9-normal";
import NiramitITBold from "../font/NiramitITBold";

interface ApplicantData {
	page0?: {
		mugshotPath?: string;
	};
	page1?: {
		first_name?: string;
		last_name?: string;
		birth_date?: string;
		student_id?: string;
		dorm?: {
			dorm_name?: string;
			dorm_room_no?: string;
		};
		amount?: { type_expense: number; amount: number }[];
	};
	page2?: {
		app_id?: string;
	};
}

const calcAge = (birthDate: string): number => {
	const birth = new Date(birthDate);
	const now = new Date();
	return (
		now.getFullYear() -
		birth.getFullYear() -
		(now < new Date(now.getFullYear(), birth.getMonth(), birth.getDate())
			? 1
			: 0)
	);
};

const getExpenseCategoryName = (type: number): string => {
	const categories: Record<number, string> = {
		1: "ค่าอาหาร",
		2: "ค่าเดินทาง",
		3: "ค่าของใช้ส่วนตัว",
		4: "ค่าเช่าหอพัก",
		5: "อื่นๆ",
	};
	return categories[type] || "ไม่ระบุ";
};

const generatePDF = (
	data: ApplicantData,
	preview: boolean,
	oldApplicant: number
): void => {
	const doc = new jsPDF();
	doc.addFileToVFS("TH NiramitIT9-normal.ttf", NiramitIT9);
	doc.addFileToVFS("NiramitIT Bold-normal.ttf", NiramitITBold);
	doc.addFont("NiramitIT Bold-normal.ttf", "NiramitIT Bold", "normal");
	doc.addFont("TH NiramitIT9-normal.ttf", "TH NiramitIT9", "normal");

	doc.setFont("TH NiramitIT9", "normal");
	const pageWidth = doc.internal.pageSize.getWidth();

	// Helper function to add centered text
	const addCenteredText = (text: string, y: number, options = {}): void => {
		const textWidth = doc.getTextWidth(text);
		doc.text(text, (pageWidth - textWidth) / 2, y, options);
	};

	// Header Section
	if (data?.page0?.mugshotPath) {
		doc.addImage(data.page0.mugshotPath, "JPEG", 10, 10, 40, 60);
	} else {
		doc.rect(10, 10, 40, 60); // Placeholder
		doc.text("รูปถ่าย", 20, 40);
	}

	if (!preview) {
		doc.addImage(CMULogo, "PNG", 60, 10, 40, 40);
	}

	addCenteredText("แบบขอรับทุนการศึกษา ปีการศึกษา 2567", 55);
	addCenteredText("คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่", 63);

	// Right Header Section
	doc.setFontSize(10);
	doc.setFont("NiramitIT Bold", "normal");
	doc.text(`เลขที่สมัคร: ${data?.page2?.app_id || ""}`, 140, 20);
	doc.text(`สถานะ: ${oldApplicant === -1 ? "รายใหม่" : "รายเก่า"}`, 140, 26);
	doc.setFont("TH NiramitIT9", "normal");

	// Main Content
	let y = 80;
	doc.setFontSize(12);

	// Section 1: Basic Info
	doc.text("ข้อมูลพื้นฐาน", 10, y);
	y += 6;

	doc.text(
		`1. ชื่อ: ${data?.page1?.first_name || ""} ${data?.page1?.last_name || ""}`,
		10,
		y
	);
	y += 6;

	const birthDate = data?.page1?.birth_date || "";
	doc.text(
		`วันเดือนปีเกิด: ${birthDate ? convertADtoBC(birthDate) : ""}`,
		10,
		y
	);
	doc.text(`อายุ: ${birthDate ? calcAge(birthDate) : "ไม่ระบุ"} ปี`, 100, y);
	y += 6;

	doc.text(`รหัสนักศึกษา: ${data?.page1?.student_id || ""}`, 10, y);
	y += 6;

	// Section 2: Accommodation
	const dorm = data?.page1?.dorm;
	doc.text("ที่พักขณะกำลังศึกษา", 10, y);
	y += 6;
	doc.text(
		`ชื่อที่พัก: ${dorm?.dorm_name || "ไม่ระบุ"}, หมายเลขห้อง: ${
			dorm?.dorm_room_no || "ไม่ระบุ"
		}`,
		10,
		y
	);
	y += 6;

	// Section 3: Expense Details
	doc.text("ค่าใช้จ่ายรายเดือน", 10, y);
	y += 6;

	const expenses = data?.page1?.amount || [];
	if (expenses.length) {
		autoTable(doc, {
			head: [["ประเภทค่าใช้จ่าย", "จำนวน (บาท)"]],
			body: expenses.map((item) => [
				getExpenseCategoryName(item.type_expense),
				formatNumberWithCommas(item.amount),
			]),
			styles: {
				font: "TH NiramitIT9",
				fontSize: 10,
				halign: "center",
				valign: "middle",
				lineColor: [0, 0, 0],
				lineWidth: 0.2,
			},
			headStyles: {
				fillColor: [255, 255, 255],
				textColor: [0, 0, 0],
			},
			startY: y,
		});
		// Use the final Y coordinate after the table
		// y = (doc as any).lastAutoTable.finalY + 10;
	}

	if (preview) {
		// Generate the PDF as a blob
		const pdfBlob = doc.output("blob");

		// Open the PDF in a new window
		const pdfUrl = URL.createObjectURL(pdfBlob);
		window.open(pdfUrl, "_blank");
	} else {
		// Save the PDF if not in preview mode
		console.log("Saving PDF...");

		doc.save("Scholarship_Application.pdf");
	}
	// Save PDF
};

export default generatePDF;
