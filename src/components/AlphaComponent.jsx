import { Slider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../data";
import { saveUpdateData } from "../redux/actions/dataActions";
import { hideMenuItem, showMenuItem } from "../redux/actions/menuAction";
const useStyles = makeStyles({
	container: {
		display: "flex",
		justifyContent: "center",
	},
	mobile_container: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
	},
	container_left: {
		"& $p": {
			// marginRight: "20px",
			minWidth: "150px",
		},
		flex: 0.6,
		// paddingLeft: "50px",
	},
	container_right: {
		flex: 0.4,
	},
	slider_container: {
		display: "flex",
		justifyContent: "space-between",
		"&>p": {
			marginRight: "20px",
		},
	},
	input_number: {
		marginLeft: "20px",
		width: "40px",
		textAlign: "center",
	},
	switch_container: {
		display: "flex",
		alignItems: "center",
		marginTop: "25px",
	},
	left_content: {
		margin: "30px",
	},
	right_content: {
		width: "100%",
		textAlign: "right",
	},
	mobile_right_content: {
		width: "100%",
		textAlign: "right",
		marginTop: "50px",
	},
	alpha_button: {
		marginLeft: "30px",
		textTransform: "none",
		minWidth: "120px",
		marginBottom: "30px",
	},
	slider: {
		minWidth: "150px",
	},
});
function ValueLabelComponent(props) {
	const { children, open, value } = props;
	return (
		<Tooltip
			open={open}
			enterTouchDelay={0}
			placement="top"
			title={value}
			arrow
		>
			{children}
		</Tooltip>
	);
}

const AlphaComponent = ({ itemData, itemId }) => {
	const reload_data = data[itemId];
	//const { isSaved } = useSelector((state) => state.dataReducer);
	const mobile_view = useMediaQuery("(max-width:992px)");
	const dispatch = useDispatch();
	const [isSaved, setIsSaved] = useState(
		useSelector((state) => state.dataReducer.isSaved)
	);
	const [alert, setAlert] = useState(false);
	const [interval, setSlider] = useState(itemData.interval);
	const [thing1, setThing1] = useState(itemData.thing1);
	const [thing2, setThing2] = useState(itemData.thing2);
	const [thing3, setThing3] = useState(itemData.thing3);
	const [thing4, setThing4] = useState(itemData.thing4);
	const [run_once_only, setRunOnceOnly] = useState(itemData.run_once_only);

	const classes = useStyles();
	const updateItemData = {
		interval,
		thing1,
		thing2,
		thing3,
		thing4,
		run_once_only,
	};
	const handleInterval = (event, data) => {
		setSlider(data);
		setIsSaved(false);
	};
	const handleInput = (event) => {
		setSlider(event.target.value);
		setIsSaved(false);
	};
	const handleThing1 = (event) => {
		setThing1(event.target.checked);
		setIsSaved(false);
	};
	const handleThing2 = (event) => {
		setThing2(event.target.checked);
		setIsSaved(false);
	};
	const handleThing3 = (event) => {
		setThing3(event.target.checked);
		setIsSaved(false);
	};
	const handleThing4 = (event) => {
		setThing4(event.target.checked);
		setIsSaved(false);
	};
	const handleRunRaceOnly = (event) => {
		setRunOnceOnly(event.target.checked);
		setIsSaved(false);
	};

	const handleReload = () => {
		setSlider(reload_data.interval);
		setThing1(reload_data.thing1);
		setThing2(reload_data.thing2);
		setThing3(reload_data.thing3);
		setThing4(reload_data.thing4);
		setRunOnceOnly(reload_data.run_once_only);
		setIsSaved(true);
	};
	const handleSave = () => {
		dispatch(saveUpdateData(itemId, updateItemData));
		setAlert(true);
		console.log(isSaved);
	};
	setTimeout(() => {
		setAlert(false);
	}, 5000);
	let showMenu = [];

	useEffect(() => {
		if (!isSaved) {
			if (!thing1) {
				dispatch(hideMenuItem(["thing1", "thing1db"]));
			} else {
				dispatch(showMenuItem(["thing1", "thing1db"]));
			}
		}
	}, [thing1]);
	useEffect(() => {
		if (!isSaved) {
			if (!thing2) {
				dispatch(hideMenuItem(["thing2", "thing2db"]));
			} else {
				dispatch(showMenuItem(["thing2", "thing2db"]));
			}
		}
	}, [thing2]);
	useEffect(() => {
		if (!isSaved) {
			if (!thing3) {
				dispatch(hideMenuItem(["thing3", "thing3db"]));
			} else {
				dispatch(showMenuItem(["thing3", "thing3db"]));
			}
		}
	}, [thing3]);
	useEffect(() => {
		if (!isSaved) {
			if (!thing4) {
				dispatch(hideMenuItem(["thing4", "thing4db"]));
			} else {
				dispatch(showMenuItem(["thing4", "thing4db"]));
			}
		}
	}, [thing4]);

	return (
		<div className={mobile_view ? classes.mobile_container : classes.container}>
			<div className={classes.container_left}>
				<div className={classes.left_content}>
					<div className={classes.slider_container}>
						<p>interval</p>
						<Slider
							className={classes.slider}
							value={interval}
							max={100}
							min={0}
							onChange={handleInterval}
							ValueLabelComponent={ValueLabelComponent}
						/>
						<input
							onChange={handleInput}
							className={classes.input_number}
							type="number"
							value={interval}
						/>
					</div>
					<div className={classes.switch_container}>
						<p>thing1</p>
						<Tooltip title={thing1 ? "show" : "hide"} placement="top" arrow>
							<Switch
								color="primary"
								checked={thing1}
								onChange={handleThing1}
							/>
						</Tooltip>
					</div>
					<div className={classes.switch_container}>
						<p>thing2</p>
						<Tooltip title={thing2 ? "show" : "hide"} placement="top" arrow>
							<Switch
								color="primary"
								checked={thing2}
								onChange={handleThing2}
							/>
						</Tooltip>
					</div>
					<div className={classes.switch_container}>
						<p>thing3</p>
						<Tooltip title={thing3 ? "show" : "hide"} placement="top" arrow>
							<Switch
								color="primary"
								checked={thing3}
								onChange={handleThing3}
							/>
						</Tooltip>
					</div>
					<div className={classes.switch_container}>
						<p>thing4</p>
						<Tooltip title={thing3 ? "show" : "hide"} placement="top" arrow>
							<Switch
								color="primary"
								checked={thing4}
								onChange={handleThing4}
							/>
						</Tooltip>
					</div>
					<div className={classes.switch_container}>
						<p>run_once_only</p>
						<Tooltip title={run_once_only ? "on" : "off"} placement="top" arrow>
							<Switch
								color="primary"
								checked={run_once_only}
								onChange={handleRunRaceOnly}
							/>
						</Tooltip>
					</div>
				</div>
			</div>
			<div className={classes.container_right}>
				<div
					className={
						mobile_view ? classes.mobile_right_content : classes.right_content
					}
				>
					<Button
						onClick={handleSave}
						className={classes.alpha_button}
						variant="outlined"
						color="primary"
					>
						Save
					</Button>
					<Button
						onClick={handleReload}
						className={classes.alpha_button}
						variant="outlined"
						color="secondary"
					>
						Reload File
					</Button>
				</div>
			</div>
			{alert && (
				<div style={{ position: "absolute", bottom: "0px", right: "0px" }}>
					<Alert severity="success" color="success">
						<p style={{ color: "green" }}>Save Successfully</p>
					</Alert>
				</div>
			)}
		</div>
	);
};

export default AlphaComponent;
