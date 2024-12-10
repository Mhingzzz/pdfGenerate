import React from "react";
import generatePDF from "../jsPDF/FirstPage"; // Adjust path as necessary
import xamp from "../../xample.json"; // Adjust path as necessary
const DownloadButton: React.FC = () => {
	const handleDownload = () => {
		const oldApplicant = -1; // -1 for new, 0 or 1 for old applicants
		generatePDF(xamp, true, oldApplicant);
	};

	return <button onClick={handleDownload}>Download PDF</button>;
};

export default DownloadButton;
