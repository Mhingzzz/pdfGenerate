export function getTodayFormatted() {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1; // Months are zero-based
	const year = date.getFullYear() + 543; // Years are 543 years ahead of AD

	// Ensure single-digit day and month are formatted with leading zeros
	const formattedDay = day < 10 ? "0" + day : day;
	const formattedMonth = month < 10 ? "0" + month : month;

	return formattedDay + "/" + formattedMonth + "/" + year;
}
