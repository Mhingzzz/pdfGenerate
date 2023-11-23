import React from "react";
import { Document } from "@react-pdf/renderer";
import PageOne from "./pdf1";
// import PageTwo from "./pdf2";
// import PageThree from "./pdf3";
// import PageFour from "./pdf4";
// import PageFive from "./pdf5";
// import PageSix from "./pdf6";
// import styles from "./style";

const ExportALL: React.FC = () => {
	// A4 pageHeight
	return (
		<Document>
			{/* <Page size={"A4"}> */}
			<PageOne />
			{/* <PageTwo /> */}
			{/* <PageThree /> */}
			{/* <PageFour />
				<PageFive /> */}
			{/* <PageSix /> */}
			{/* </Page> */}
		</Document>
	);
};

export default ExportALL;
