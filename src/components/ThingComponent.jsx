import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
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
	switch_containr: {
		display: "flex",
		alignItems: "center",
		marginTop: "30px",
		"&>p": {
			minWidth: "150px",
			marginRight: "30px",
		},
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
		"&>.MuiInput-root": {
			minWidth: "200px",
		},
		"&>p": {
			marginRight: "30px",
			minWidth: "150px",
		},
	},
	left_content: {
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
		minWidth: "200px",
	},
	switch_containr: {
		display: "flex",
		alignItems: "center",
		marginTop: "30px",
		"&>p": {
			minWidth: "150px",
			marginRight: "30px",
		},
	},
	redio_container: {
		display: "flex",
		marginTop: "30px",
		"&>p": {
			minWidth: "150px",
			marginRight: "30px",
		},
	},
	item_sub_container: {
		marginLeft: "60px",
	},
});

const ThingComponent = ({ itemData, itemId }) => {
	console.log(itemData);
	console.log(itemId);
	useEffect(() => {
		setTimeOut(itemData.timeout);
		setUpgrade(itemData.firmware.upgrade);
		setFile(itemData.firmware.file);
		setConsoleMsg(itemData.firmware.console_msg);
		setBuild(itemData.firmware.build);
		setUpgradeTaskUpdates(itemData.firmware.upgrade_task_updates);
		setSkipRetrive(itemData.skip_retrieve);
		setScriptDelete(itemData.script_delete);
		setOkToFail(itemData.ok_to_fail);
		setPromote(itemData.promote.pre_script);
		setPromoteRollback(itemData.promote_rollback.pre_script);
		setRename(itemData.rename.pre_script);
	}, [itemId]);
	const mobile_view = useMediaQuery("(max-width:992px)");
	const dispatch = useDispatch();

	const [timeout, setTimeOut] = useState(itemData.timeout);
	const [upgrade, setUpgrade] = useState(itemData.firmware.upgrade);
	const [file, setFile] = useState(itemData.firmware.file);
	const [console_msg, setConsoleMsg] = useState(itemData.firmware.console_msg);
	const [method, setMethod] = useState(itemData.firmware.method);
	const [firmware, setFirmware] = useState(itemData.firmware.firmware);
	const [build, setBuild] = useState(itemData.firmware.build);
	const [upgrade_task_updates, setUpgradeTaskUpdates] = useState(
		itemData.firmware.upgrade_task_updates
	);

	const [skip_retrieve, setSkipRetrive] = useState(itemData.skip_retrieve);
	const [script_delete, setScriptDelete] = useState(itemData.script_delete);
	const [ok_to_fail, setOkToFail] = useState(itemData.ok_to_fail);
	const [promote, setPromote] = useState(itemData.promote.pre_script);
	const [promote_rollback, setPromoteRollback] = useState(
		itemData.promote_rollback.pre_script
	);
	const [rename, setRename] = useState(itemData.rename.pre_script);

	const classes = useStyles();
	const [alert, setAlert] = useState(false);
	const updateitemData = {
		timeout,
		firmware: {
			upgrade,
			file,
			console_msg,
			method,
			firmware,
			build,
			upgrade_task_updates,
		},
		skip_retrieve,
		script_delete,
		ok_to_fail: [ok_to_fail],
		promote: {
			pre_script: promote,
		},
		promote_rollback: {
			pre_script: promote_rollback,
		},
		rename: {
			pre_script: rename,
		},
	};
	const handleSave = () => {
		dispatch(saveUpdateData(itemId, updateitemData));
		setAlert(true);
	};

	const handleTimeOut = (event) => {
		setTimeOut(event.target.value);
	};
	const handleUpgrade = (event) => {
		setUpgrade(event.target.value);
	};
	const handleFile = (e) => {
		setFile(e.target.value);
	};
	const handleConsoleMsg = (e) => {
		setConsoleMsg(e.target.value);
	};
	const handelMethod = (e) => {
		setMethod(e.target.value);
	};
	const handleFirmware = (e) => {
		setFirmware(e.target.value);
	};
	const handleBuild = (e) => {
		setBuild(e.target.value);
	};
	const handleUpgradeTaskUpdates = (e) => {
		setUpgradeTaskUpdates(e.target.value);
	};
	const handleSkipRetrive = (e) => {
		setSkipRetrive(e.target.value);
	};
	const handleScriptDelete = (e) => {
		setScriptDelete(e.target.value);
	};
	const handleOkToFail = (e) => {
		setOkToFail(e.target.value);
	};
	const handlePromote = (e) => {
		setPromote(e.target.value);
	};
	const handlePromoteRollBack = (e) => {
		setPromoteRollback(e.target.value);
	};
	const handleRename = (e) => {
		setRename(e.target.value);
	};
	const handleReload = () => {
		setTimeOut(itemData.timeout);
		setUpgrade(itemData.firmware.upgrade);
		setFile(itemData.firmware.file);
		setConsoleMsg(itemData.firmware.console_msg);
		setMethod(itemData.firmware.method);
		setFirmware(itemData.firmware.firmware);
		setBuild(itemData.firmware.build);
		setUpgradeTaskUpdates(itemData.firmware.upgrade_task_updates);
		setSkipRetrive(itemData.skip_retrieve);
		setScriptDelete(itemData.script_delete);
		setOkToFail(itemData.ok_to_fail);
		setPromote(itemData.promote.pre_script);
		setPromoteRollback(itemData.promote_rollback.pre_script);
		setRename(itemData.rename.pre_script);
	};
	setTimeout(() => {
		setAlert(false);
	}, 5000);
	return (
		<div className={mobile_view ? classes.mobile_container : classes.container}>
			<div className={classes.container_left}>
				<div className={classes.left_content}>
					<div className={classes.item_container}>
						<p>timeout</p>

						<Input
							onChange={handleTimeOut}
							margin="dense"
							value={timeout}
							fullWidth={true}
						/>
					</div>
					<Border />
					<p>firmware</p>
					<div className={classes.item_sub_container}>
						<div className={classes.redio_container}>
							<p>upgrade</p>
							<FormControl component="fieldset">
								<RadioGroup value={upgrade} onChange={handleUpgrade}>
									<div style={{ display: "flex" }}>
										<FormControlLabel
											value="enable"
											control={<Radio />}
											label="enable"
										/>
										<FormControlLabel
											value="disable"
											control={<Radio />}
											label="disable"
										/>
									</div>
								</RadioGroup>
							</FormControl>
						</div>
						<div className={classes.item_container}>
							<p>file</p>
							<Input
								onChange={handleFile}
								margin="dense"
								value={file}
								fullWidth={true}
								placeholder="filename.csv"
							/>
						</div>
						<div className={classes.item_container}>
							<p>console_msg</p>
							<Input
								onChange={handleConsoleMsg}
								margin="dense"
								value={console_msg}
								fullWidth={true}
								placeholder="console mesg"
							/>
						</div>
						<div className={classes.item_container}>
							<p>method</p>
							<Input
								onChange={handelMethod}
								margin="dense"
								value={method}
								fullWidth={true}
								placeholder="method"
							/>
						</div>
						<div className={classes.item_container}>
							<p>firmware</p>
							<Input
								onChange={handleFirmware}
								margin="dense"
								value={firmware}
								fullWidth={true}
								placeholder="firmware"
							/>
						</div>
						<div className={classes.item_container}>
							<p>build</p>
							<Input
								onChange={handleBuild}
								margin="dense"
								value={build}
								fullWidth={true}
								placeholder="build"
							/>
						</div>

						<div className={classes.redio_container}>
							<p>upgrade_task_updates</p>
							<FormControl component="fieldset">
								<RadioGroup
									value={upgrade_task_updates}
									onChange={handleUpgradeTaskUpdates}
								>
									<div style={{ display: "flex" }}>
										<FormControlLabel
											value="enable"
											control={<Radio />}
											label="enable"
										/>
										<FormControlLabel
											value="disable"
											control={<Radio />}
											label="disable"
										/>
									</div>
								</RadioGroup>
							</FormControl>
						</div>
					</div>
					<Border />

					<div className={classes.redio_container}>
						<p>skip_retrieve</p>
						<FormControl component="fieldset">
							<RadioGroup value={skip_retrieve} onChange={handleSkipRetrive}>
								<div style={{ display: "flex" }}>
									<FormControlLabel
										value="enable"
										control={<Radio />}
										label="enable"
									/>
									<FormControlLabel
										value="disable"
										control={<Radio />}
										label="disable"
									/>
								</div>
							</RadioGroup>
						</FormControl>
					</div>

					<div className={classes.redio_container}>
						<p>script_delete</p>
						<FormControl component="fieldset">
							<RadioGroup
								aria-label="script_delete"
								name="script_delete"
								value={script_delete}
								onChange={handleScriptDelete}
							>
								<FormControlLabel
									value="always"
									control={<Radio />}
									label="always"
								/>
								<FormControlLabel
									value="never"
									control={<Radio />}
									label="never"
								/>
								<FormControlLabel
									value="success"
									control={<Radio />}
									label="success"
								/>
							</RadioGroup>
						</FormControl>
					</div>

					<Border />
					<p>ok_to_fail</p>
					<div className={classes.item_sub_container}>
						<div className={classes.item_container}>
							<Input
								onChange={handleOkToFail}
								margin="dense"
								value={ok_to_fail}
								fullWidth={true}
								placeholder="ok to fail"
							/>
						</div>
					</div>
					<Border />
					<p>promote</p>
					<div className={classes.item_sub_container}>
						<div className={classes.item_container}>
							<p>pre_script</p>
							<Input
								onChange={handlePromote}
								margin="dense"
								value={promote}
								fullWidth={true}
								placeholder="prescript"
							/>
						</div>
					</div>
					<Border />
					<p>promote_rollback</p>
					<div className={classes.item_sub_container}>
						<div className={classes.item_container}>
							<p>pre_script</p>
							<Input
								onChange={handlePromoteRollBack}
								margin="dense"
								value={promote_rollback}
								fullWidth={true}
								placeholder="prescript"
							/>
						</div>
					</div>
					<Border />
					<p>rename</p>
					<div className={classes.item_sub_container}>
						<div className={classes.item_container}>
							<p>pre_script</p>
							<Input
								onChange={handleRename}
								margin="dense"
								value={rename}
								fullWidth={true}
								placeholder="prescript"
							/>
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
		</div>
	);
};

export default ThingComponent;
