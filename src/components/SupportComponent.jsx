import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Alert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUpdateData } from "../redux/actions/dataActions";

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
	},
	container_right: {
		flex: 0.4,
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
});

const SupportComponent = ({ itemData, itemId }) => {
	const [alert, setAlert] = useState(false);
	const mobile_view = useMediaQuery("(max-width:992px)");
	const dispatch = useDispatch();
	const classes = useStyles();
	const [status, setStatue] = useState(itemData.status);
	const [dryrun, setDryRun] = useState(itemData.dryrun);
	const [token, setToken] = useState(itemData.token);
	const [baseurl, setBaseUrl] = useState(itemData.baseurl);
	const [outdir, setOutDir] = useState(itemData.outdir);
	const updateItemData = {
		status,
		dryrun,
		token,
		baseurl,
		outdir,
	};
	const handleStatus = (e) => {
		setStatue(e.target.checked);
	};
	const handleDryRun = (e) => {
		setDryRun(e.target.checked);
	};

	const handleToken = (e) => {
		setToken(e.target.value);
	};
	const handleBaseUrl = (e) => {
		setBaseUrl(e.target.value);
	};
	const handleOutDir = (e) => {
		setOutDir(e.target.value);
	};
	const handleSave = () => {
		dispatch(saveUpdateData(itemId, updateItemData));
		setAlert(true);
	};

	const handleReload = () => {
		setStatue(itemData.status);
		setDryRun(itemData.dryrun);
		setToken(itemData.token);
		setBaseUrl(itemData.baseurl);
		setOutDir(itemData.outdir);
	};
	setTimeout(() => {
		setAlert(false);
	}, 5000);
	return (
		<div className={mobile_view ? classes.mobile_container : classes.container}>
			<div className={classes.container_left}>
				<div className={classes.left_content}>
					<div className={classes.switch_containr}>
						<p>status</p>
						<Tooltip
							title={status ? "enable" : "disable"}
							placement="top"
							arrow
						>
							<Switch
								onChange={handleStatus}
								color="primary"
								checked={status}
							/>
						</Tooltip>
					</div>
					<div className={classes.switch_containr}>
						<p>dryrun</p>
						<Tooltip
							title={dryrun ? "enable" : "disable"}
							placement="top"
							arrow
						>
							<Switch
								onChange={handleDryRun}
								color="primary"
								checked={dryrun}
							/>
						</Tooltip>
					</div>
					<div className={classes.item_container}>
						<p>token</p>
						<Input
							onChange={handleToken}
							margin="dense"
							value={token}
							fullWidth={true}
							placeholder="Token"
						/>
					</div>
					<div className={classes.item_container}>
						<p>baseurl</p>
						<Input
							onChange={handleBaseUrl}
							margin="dense"
							value={baseurl}
							fullWidth={true}
							placeholder="Base url"
						/>
					</div>
					<div className={classes.item_container}>
						<p>outdir</p>
						<Input
							onChange={handleOutDir}
							color="primary"
							type="url"
							fullWidth={true}
							value={outdir}
							placeholder="Outdir"
						/>
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

export default SupportComponent;
