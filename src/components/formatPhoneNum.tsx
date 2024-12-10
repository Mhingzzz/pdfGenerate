export function formatPhoneNum(phoneNum: string | undefined | null) {
	if (phoneNum === null || phoneNum === "" || phoneNum === undefined) {
		return null;
	}

	// Remove any non-digit characters (just in case)
	const cleaned = phoneNum.replace(/\D/g, "");

	// Ensure the cleaned phone number has exactly 10 digits
	if (cleaned.length !== 10) {
		return null;
	}

	// Format the phone number
	const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

	return formatted;
}
