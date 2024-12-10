import "./App.css";
import generatePDF from "./jsPDF/FirstPage";
import applicantData from "../xample.json";
// import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
// import ExportALL from "./react_pdf_renderer/ExportALL";

function App() {
	const handleGeneratePDF = () => {
		const preview = true; // Set to true for preview mode
		const oldApplicant = -1; // Example: -1 for a new applicant
		generatePDF(applicantData, preview, oldApplicant);
	};

	return (
		<div>
			<h1>Scholarship Application</h1>
			<button onClick={handleGeneratePDF}>Generate PDF</button>
		</div>
	);
	// return (

	// 	<div>
	// 		<PDFDownloadLink document={<PageOne/ >} fileName='pageone.pdf'>
	//   {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
	//   </PDFDownloadLink>
	// 		<PDFViewer style={{ width: "100%", height: "297mm" }}>
	// 			<ExportALL />
	// 			<PageOne/>
	// 			<TableExample/>
	// 		</PDFViewer>
	// 	</div>
	// );
}
// ReactDOM.render(<App />, document.getElementById('root'));
export default App;
