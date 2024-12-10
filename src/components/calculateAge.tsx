export default function calcutionAge(birthdate: any) {
	// Assuming the birthdate is in the format "YYYY-MM-DD"
	if (birthdate === null || birthdate === "" || birthdate === undefined) {
		return null;
	}
	const birthDateParts = birthdate.split("-");
	const birthDate = new Date(
		birthDateParts[0],
		birthDateParts[1] - 1,
		birthDateParts[2]
	);

	const currentDate = new Date();

	let age = currentDate.getFullYear() - birthDate.getFullYear();

	// Adjust age if birthday hasn't occurred yet this year
	if (
		currentDate.getMonth() < birthDate.getMonth() ||
		(currentDate.getMonth() === birthDate.getMonth() &&
			currentDate.getDate() < birthDate.getDate())
	) {
		age--;
	}

	return age;
}

export function calculateAgeFromBirthYear(birthYear: any) {
	if (birthYear === null || birthYear === "" || birthYear === undefined) {
		return null;
	}
	const currentYear = new Date().getFullYear();
	const age = currentYear - birthYear;
	if (age < 0 || isNaN(age)) {
		return null;
	}
	return age;
}

export const convertADtoBC = (AD: string | undefined | null) => {
	if (AD === undefined || AD === null) return null;

	// Check if the input is in "YYYY" format or "YYYY-MM-DD" format
	const isFullYearFormat = /^\d{4}$/.test(AD);
	const isFullDateFormat = /^\d{4}-\d{2}-\d{2}$/.test(AD);

	if (isFullYearFormat) {
		const ADYear = parseInt(AD, 10);
		const BCYear = ADYear + 543;
		return BCYear.toString();
	} else if (isFullDateFormat) {
		const [year, month, day] = AD.split("-").map((part) => parseInt(part, 10));
		const BCYear = year + 543;
		return `${BCYear}-${month.toString().padStart(2, "0")}-${day
			.toString()
			.padStart(2, "0")}`;
	} else {
		// Return null for invalid input
		return null;
	}
};
