import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Alert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUpdateData } from "../redux/actions/dataActions";
import Border from "./common/Border";

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
	item_container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",

		marginTop: "25px",
		"&>.MuiOutlinedInput-root": {
			minWidth: "200px",
		},
		"&>p": {
			marginRight: "30px",
			minWidth: "150px",
		},
	},
	left_content: {
		// width: "100%",
		marginLeft: "30px",
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
	bravo_input: {
		minWidth: "100px",
	},
	switch_containr: {
		display: "flex",
		alignItems: "center",
		marginTop: "30px",
		"&>p": {
			minWidth: "100px",
			marginRight: "30px",
		},
	},
	default_content_container: {
		display: "flex",
		// alignItems: "center",

		marginTop: "30px",
		"&>p": {
			minWidth: "100px",
		},
	},
	log_list_container: {
		//width: "100%",
	},
	log_list: {
		display: "flex",
		justifyContent: "space-between",
		marginTop: "10px",
		border: "1px solid #A8A8A8",
		padding: "5px 10px",
		borderRadius: "5px",
		"&>input": {
			flex: 1,
			border: "none",
			outline: "none",
			background: "lightgray",
			padding: "10px 0",
			borderRadius: "2px",
		},
		"&>p": {
			flex: 1,
		},
	},

	log_icon: {
		display: "flex",
		"&>.MuiSvgIcon-root": {
			fontSize: "1.2rem",
			marginLeft: "10px",
			cursor: "pointer",
		},
	},
	delete_icon: {
		color: "primary",
		fontSize: "1.2rem",
		padding: "0 5px",
	},
	add_list: {
		marginBottom: "20px",
	},
});

const AlphaComponent = ({ itemData, itemId }) => {
	const mobile_view = useMediaQuery("(max-width:992px)");
	const dispatch = useDispatch();
	const classes = useStyles();
	const [alert, setAlert] = useState(false);
	const [log_dir, setLogDir] = useState(itemData.log_dir);
	const [script_log_dir, setScriptLogDir] = useState(itemData.script_log_dir);
	const [logconsole, setLogConsole] = useState(itemData.logconsole);
	const [apilogfilter, setApilogFilter] = useState(itemData.apilogfilter);
	const [logFilter, setLogFilter] = useState("");
	const [showEdit, setShowEdit] = useState(false);
	const [editLogIndex, setEditLogIndex] = useState("");
	const [editLogText, setEditLogText] = useState("");
	const [open, setOpen] = useState(false);

	const updateItemData = {
		log_dir,
		script_log_dir,
		logconsole,
		apilogfilter,
	};
	const handleLogDir = (e) => {
		setLogDir(e.target.value);
	};
	const handleScriptLogDir = (e) => {
		setScriptLogDir(e.target.value);
	};
	const handleLogConsole = (e) => {
		setLogConsole(e.target.value);
	};
	const handleReload = () => {
		setLogDir(itemData.log_dir);
		setScriptLogDir(itemData.script_log_dir);
		setLogConsole(itemData.logconsole);
		setApilogFilter(itemData.apilogfilter);
	};

	const deleteLogListItem = (ind) => {
		const list = [...apilogfilter];
		list.splice(ind, 1);
		setApilogFilter(list);
	};
	const handleAPILogFilter = (event) => {
		setLogFilter(event.target.value);
	};
	const addLogFilterList = () => {
		if (logFilter) {
			setApilogFilter([...apilogfilter, logFilter]);
			setLogFilter("");
		}
	};
	const handleEdit = (e) => {
		setEditLogText(e.target.value);
	};
	const handleClickOpen = (ind, apilog) => {
		setOpen(true);
		setEditLogIndex(ind);
		setEditLogText(apilog);
	};
	const handleSave = () => {
		dispatch(saveUpdateData(itemId, updateItemData));
		setAlert(true);
	};

	const handleClose = () => {
		const list = [...apilogfilter];
		if (editLogText) {
			list.splice(editLogIndex, 1, editLogText);
			setApilogFilter(list);
		}
		setOpen(false);
	};

	setTimeout(() => {
		setAlert(false);
	}, 5000);
	return (
		<div className={mobile_view ? classes.mobile_container : classes.container}>
			<div className={classes.container_left}>
				<div className={classes.left_content}>
					<div className={classes.item_container}>
						<p>log_dir</p>
						<Input
							onChange={handleLogDir}
							margin="dense"
							value={log_dir}
							type="url"
							fullWidth={true}
							placeholder="log dir"
						/>
					</div>
					<div className={classes.item_container}>
						<p>script_log_dir</p>
						<Input
							onChange={handleScriptLogDir}
							margin="dense"
							value={script_log_dir}
							type="text"
							fullWidth={true}
							placeholder="script log dir"
						/>
					</div>
					<div className={classes.item_container}>
						<p>logconsole</p>
						<Input
							onChange={handleLogConsole}
							margin="dense"
							value={logconsole}
							type="number"
							placeholder="log console"
							fullWidth={true}
							inputProps={{
								min: "0",
							}}
						/>
					</div>
					<Border />
					<div className={classes.default_content_container}>
						<p>apilogfilter</p>
						<div className={classes.log_list_container}>
							<div className={classes.add_list}>
								<Input
									margin="dense"
									onChange={handleAPILogFilter}
									type="text"
									fullWidth={true}
									value={logFilter}
									placeholder="Add apilogfilter"
									endAdornment={
										<InputAdornment position="end">
											<IconButton>
												<AddCircleOutlineIcon
													htmlColor="green"
													onClick={addLogFilterList}
												/>
											</IconButton>
										</InputAdornment>
									}
								/>
							</div>
							{apilogfilter.map((apilog, ind) => (
								<div className={classes.log_list}>
									<p>{apilog}</p>
									<div className={classes.log_icon}>
										<EditIcon
											className={classes.edit_icon}
											htmlColor="#741db3"
											onClick={() => handleClickOpen(ind, apilog)}
										/>
										<HighlightOffIcon
											className={classes.delete_icon}
											htmlColor="#b3221d"
											onClick={() => deleteLogListItem(ind)}
										/>
									</div>
								</div>
							))}
						</div>
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

			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					<input
						style={{ width: "400px", height: "30px" }}
						type="text"
						value={editLogText}
						onChange={handleEdit}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Update
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default AlphaComponent;
