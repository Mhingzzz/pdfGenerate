export function formatNumberWithCommas(number: any) {
	if (number === null || number === "" || number === undefined) {
		return null;
	}
	if (parseFloat(number) === 0) {
		return 0; // or return 0 if you prefer
	}

	const double = parseFloat(number);
	const result = double.toLocaleString("en-US");

	return result;
}
