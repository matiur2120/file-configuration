import { makeStyles } from "@material-ui/core/styles";
import React from "react";
//import { data } from "../data";
import { useSelector } from "react-redux";
import Content from "./Content";
import Sidebar from "./Sidebar";
const useStyles = makeStyles({
	config_container: {
		margin: "auto",
		display: "flex",
	},
});

const Configuration = () => {
	const { updateData } = useSelector((state) => state.dataReducer);
	const classes = useStyles();
	return (
		<div className={classes.config_container}>
			<Sidebar dataFile={updateData} />
			<Content />
		</div>
	);
};

export default Configuration;
