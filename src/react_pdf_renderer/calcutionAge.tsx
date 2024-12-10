import React from "react";

export default function calcutionAge(birthdate: any) {
	// Assuming the birthdate is in the format "YYYY-MM-DD"
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
	const currentYear = new Date().getFullYear();
	const age = currentYear - birthYear;
	return age;
}
