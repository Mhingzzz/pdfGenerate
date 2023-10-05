import "./App.css";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ExportALL from "./pdf/ExportALL";

function App() {
	return (
		<div>
			{/* <PDFDownloadLink document={<PageOne/ >} fileName='pageone.pdf'>
      {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink> */}
			<PDFViewer style={{ width: "100%", height: "297mm" }}>
				<ExportALL />
				{/* <PageOne/> */}
				{/* <TableExample/> */}
			</PDFViewer>
		</div>
	);
}
// ReactDOM.render(<App />, document.getElementById('root'));
export default App;
