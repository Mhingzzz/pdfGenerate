import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	normal: {
		fontFamily: "THSarabunNew",
		fontSize: "12px",
	},
	bullet: {
		width: 5, // Adjust the size of the circle
		height: 5, // Adjust the size of the circle
		backgroundColor: "white", // Inside color
		borderRadius: 5, // Half of width/height to make it a circle
		borderWidth: 0.75, // Border width
		borderColor: "black", // Border color
		marginRight: 15, // Adjust spacing between bullet and text
	},
	bold: {
		fontFamily: "THSarabunNew",
		fontWeight: "bold",
		fontSize: "12px",
	},
	italic: {
		fontFamily: "THSarabunNew",
		fontSize: "12px",
		fontStyle: "italic",
	},
	body: {
		fontFamily: "THSarabunNew",
		fontSize: "12px",
		display: "flex",
		marginHorizontal: "30px",
		// marginVertical: "20px",
		// marginTop: "20px",
		maxWidth: "210mm",
		// maxHeight: "297mm",
		// height: "297mm",
		// padding: "40px",
		flexDirection: "column",
		marginBottom: "20px",
	},
	tableHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	flexRow: {
		display: "flex",
		flexDirection: "row",
	},
	flexRowBetween: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	rowStyle83: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "85%",
	},
	rowStyle17: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "16.75%",
	},
	rowStyle70: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "70%",
	},
	rowStyle30: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "30%",
	},
	tableLeft: {
		borderBottom: "1px",
		borderTop: "1px",
		borderLeft: "1px",
		borderRight: "0px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		// height: "auto",
		height: "20px",
	},
	tableRowLeft: {
		borderBottom: "1px",
		borderTop: "0px",
		borderLeft: "1px",
		borderRight: "0px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "20px",
	},
	tableRight: {
		borderBottom: "1px",
		borderTop: "1px",
		borderLeft: "0px",
		borderRight: "1px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "20px",
		// height: "auto",
	},
	tableRowRight: {
		borderBottom: "1px",
		borderTop: "0px",
		borderLeft: "0px",
		borderRight: "1px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "20px",
	},
	tableMiddle: {
		borderBottom: "1px",
		borderTop: "1px",
		borderLeft: "1px",
		borderRight: "1px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		// height: "auto",
		height: "20px",
	},
	tableRowMiddle: {
		borderBottom: "1px",
		borderTop: "0px",
		borderLeft: "1px",
		borderRight: "1px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "20px",
	},
	flexJustCenter: {
		display: "flex",
		justifyContent: "center",
	},
	space350px: {
		width: "350px",
	},
	space300px: {
		width: "300px",
	},
	space200px: {
		width: "200px",
	},
	space175px: {
		width: "175px",
	},
	space150px: {
		width: "150px",
	},
	space125px: {
		width: "125px",
	},
	space100px: {
		width: "100px",
	},
	space75px: {
		width: "75px",
	},
	space50px: {
		width: "50px",
	},
});

export default styles;
