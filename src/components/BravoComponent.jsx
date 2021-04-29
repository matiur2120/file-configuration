import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
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
		alignItems: "center",

		marginTop: "30px",
		"&>p": {
			minWidth: "150px",
			marginRight: "30px",
		},
	},
});

const BravoComponent = ({ itemData, itemId }) => {
	const dispatch = useDispatch();
	const mobile_view = useMediaQuery("(max-width:992px)");
	const [host, setHost] = useState(itemData.host);
	const [ssl_port, setSSLPort] = useState(itemData.ssl_port);
	const [ssl_verify, setSSLVarify] = useState(itemData.ssl_verify);
	const [username, setUserName] = useState(itemData.username);
	const [password, setPassword] = useState(itemData.password);
	const [max_active, setMaxActive] = useState(itemData.max_active);
	const [showPass, setShowPass] = useState(false);
	const [max_active_thing1, setMaxActiveThing1] = useState(
		itemData.max_active_thing1
	);
	const [max_active_thing2, setMaxActiveThing2] = useState(
		itemData.max_active_thing2
	);
	const [max_active_thing3, setMaxActiveThing3] = useState(
		itemData.max_active_thing3
	);
	const [max_active_thing4, setMaxActiveThing4] = useState(
		itemData.max_active_thing4
	);
	const [max_active_all, setMaxActiveAll] = useState(itemData.max_active_all);
	const [flags, setFlag] = useState(itemData.flags);
	const [alert, setAlert] = useState(false);

	const classes = useStyles();
	const updateItemData = {
		host,
		ssl_port,
		ssl_verify,
		username,
		password,
		max_active,
		max_active_thing1,
		max_active_thing2,
		max_active_thing3,
		max_active_thing4,
		max_active_all,
		flags,
	};
	const err = {};
	const handleSave = () => {
		dispatch(saveUpdateData(itemId, updateItemData));
		setAlert(true);
	};

	const handleFlag = (event) => {
		setFlag(event.target.value);
	};
	const handleHost = (event) => {
		setHost(event.target.value);
	};
	const handlePort = (e) => {
		setSSLPort(e.target.value);
	};
	const handleSSLVarify = (e) => {
		setSSLVarify(e.target.checked);
	};
	const handleUserName = (e) => {
		setUserName(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};
	const handleMaxActive = (e) => {
		setMaxActive(e.target.value);
	};
	const handleMaxActiveThing1 = (e) => {
		setMaxActiveThing1(e.target.value);
	};
	const handleMaxActiveThing2 = (e) => {
		setMaxActiveThing2(e.target.value);
	};
	const handleMaxActiveThing3 = (e) => {
		setMaxActiveThing3(e.target.value);
	};
	const handleMaxActiveThing4 = (e) => {
		setMaxActiveThing4(e.target.value);
	};
	const handleMaxActiveAll = (e) => {
		setMaxActiveAll(e.target.value);
	};
	const handleClickShowPassword = () => {
		setShowPass(!showPass);
	};
	const handleReload = () => {
		setFlag(itemData.flags);
		setHost(itemData.host);
		setSSLPort(itemData.ssl_port);
		setSSLVarify(itemData.ssl_verify);
		setUserName(itemData.username);
		setPassword(itemData.password);
		setMaxActive(itemData.max_active);
		setMaxActiveThing1(itemData.max_active_thing1);
		setMaxActiveThing2(itemData.max_active_thing2);
		setMaxActiveThing3(itemData.max_active_thing3);
		setMaxActiveThing4(itemData.max_active_thing4);
		setMaxActiveAll(itemData.max_active_all);
		setValue("male");
	};
	setTimeout(() => {
		setAlert(false);
	}, 5000);

	const [value, setValue] = React.useState("female");

	const handleChange = (event) => {
		setValue(event.target.value);
	};
	return (
		<div className={mobile_view ? classes.mobile_container : classes.container}>
			<div className={classes.container_left}>
				<div className={classes.left_content}>
					<div className={classes.item_container}>
						<p>host</p>
						<Input
							onChange={handleHost}
							margin="dense"
							value={host}
							fullWidth={true}
							placeholder="host"
						/>
					</div>
					<div className={classes.item_container}>
						<p>ssl_port</p>
						<Input
							onChange={handlePort}
							margin="dense"
							value={ssl_port}
							fullWidth={true}
							placeholder="ssl port"
						/>
					</div>
					<div className={classes.switch_containr}>
						<p>ssl_verify</p>
						<Tooltip
							title={ssl_verify ? "enable" : "disable"}
							placement="top"
							arrow
						>
							<Switch
								onChange={handleSSLVarify}
								color="primary"
								checked={ssl_verify}
							/>
						</Tooltip>
					</div>
					<div className={classes.item_container}>
						<p>username</p>
						<Input
							onChange={handleUserName}
							margin="dense"
							value={username}
							fullWidth={true}
							placeholder="user name"
						/>
					</div>
					<div className={classes.item_container}>
						<p>password</p>
						<Input
							onChange={handlePassword}
							margin="dense"
							type={showPass ? "text" : "password"}
							value={password}
							fullWidth={true}
							placeholder="********"
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										// onMouseDown={handleMouseDownPassword}
									>
										{showPass ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							}
						/>
					</div>
					<div className={classes.item_container}>
						<p>max_active</p>
						<Input
							onChange={handleMaxActive}
							inputProps={{
								min: 0,
							}}
							type="number"
							margin="dense"
							value={max_active}
							fullWidth={true}
						/>
					</div>
					<div className={classes.item_container}>
						<p>max_active_thing1</p>
						<Input
							onChange={handleMaxActiveThing1}
							inputProps={{
								min: 0,
							}}
							type="number"
							margin="dense"
							value={max_active_thing1}
							fullWidth={true}
						/>
					</div>
					<div className={classes.item_container}>
						<p>max_active_thing2</p>
						<Input
							onChange={handleMaxActiveThing2}
							inputProps={{
								min: 0,
							}}
							type="number"
							margin="dense"
							value={max_active_thing2}
							fullWidth={true}
						/>
					</div>
					<div className={classes.item_container}>
						<p>max_active_thing3</p>
						<Input
							onChange={handleMaxActiveThing3}
							inputProps={{
								min: 0,
							}}
							type="number"
							margin="dense"
							value={max_active_thing3}
							fullWidth={true}
						/>
					</div>
					<div className={classes.item_container}>
						<p>max_active_thing4</p>
						<Input
							onChange={handleMaxActiveThing4}
							type="number"
							inputProps={{
								min: 0,
							}}
							margin="dense"
							value={max_active_thing4}
							fullWidth={true}
						/>
					</div>
					<div className={classes.item_container}>
						<p>max_active_all</p>
						<Input
							onChange={handleMaxActiveAll}
							type="number"
							inputProps={{
								min: 0,
							}}
							min="0"
							max="34"
							margin="dense"
							value={max_active_all}
							fullWidth={true}
						/>
					</div>
					<div className={classes.redio_container}>
						<p>flags</p>
						<FormControl component="fieldset">
							<RadioGroup
								aria-label="flags"
								name="flags"
								value={flags}
								onChange={handleFlag}
							>
								<div style={{ display: "flex" }}>
									<FormControlLabel
										value="flag1"
										control={<Radio />}
										label="Flag1"
									/>
									<FormControlLabel
										value="flag2"
										control={<Radio />}
										label="Flag2"
									/>
								</div>
							</RadioGroup>
						</FormControl>
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

export default BravoComponent;
