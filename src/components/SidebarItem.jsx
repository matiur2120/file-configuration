import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiplayData } from "../redux/actions/dataActions";
const useStyles = makeStyles({
	sidebar_title: {
		//width: "100%",
		minWidth: "170px",
		padding: "10px 30px",
		textAlign: "center",
		cursor: "pointer",
		marginBottom: "10px",
		// borderRight: "1px solid #F0F0EE",
		// background: "#E6F7FF",
		"&:hover": {
			color: "#32A350",
			backgroundColor: "#F5F5F5",
		},
		"& .active": {
			backgroundColor: "#E6F7FF",
			borderRight: "3px solid #0F9D58",
		},
	},
	sidebar_active_title: {
		minWidth: "170px",
		//width: "100%",
		padding: "10px 30px",
		textAlign: "center",
		cursor: "pointer",
		marginBottom: "10px",
		backgroundColor: "#F5F5F5",
		borderRight: "3px solid #0F9D58",
	},
});

const SidebarItem = ({ menuItem, content }) => {
	const { itemId } = useSelector((state) => state.dataReducer);
	const { updateData } = useSelector((state) => state.dataReducer);

	const classes = useStyles();
	const dispatch = useDispatch();
	return (
		<>
			<h4
				onClick={() => dispatch(getDiplayData(menuItem, updateData))}
				className={
					menuItem === itemId
						? classes.sidebar_active_title
						: classes.sidebar_title
				}
			>
				{/* {capitalizeFirstLetter(menu)} */}
				{menuItem}
			</h4>
		</>
	);
};

export default SidebarItem;
