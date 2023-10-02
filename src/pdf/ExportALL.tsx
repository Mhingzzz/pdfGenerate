import React from "react";
import { Document } from "@react-pdf/renderer";
import PageOne from "./pdf1";

import PageThree from "./pdf3";
import PageFour from "./pdf4";
import PageFive from "./pdf5";
import PageTwo from "./pdf2";
import PageSix from "./pdf6";

const ExportALL: React.FC = () => {
	return (
		<Document>
			<PageOne />
			<PageTwo />
			<PageThree />
			<PageFour />
			<PageFive />
			<PageSix />
		</Document>
	);
};

export default ExportALL;
