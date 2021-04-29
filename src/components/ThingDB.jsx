import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
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
		minWidth: "200px",
	},
});

const ThingDB = ({ itemData, itemId }) => {
	useEffect(() => {
		setSrc(itemData.src);
		setKey(itemData.key);
	}, [itemId]);
	const mobile_view = useMediaQuery("(max-width:768px)");
	const dispatch = useDispatch();
	const [src, setSrc] = useState(itemData.src);
	const [key, setKey] = useState(itemData.key);
	const [alert, setAlert] = useState(false);

	const classes = useStyles();

	setTimeout(() => {
		setAlert(false);
	}, 5000);
	const updateItemData = {
		src,
		key,
	};
	const handleSave = () => {
		dispatch(saveUpdateData(itemId, updateItemData));
		setAlert(true);
	};
	const handleReload = () => {
		setSrc(itemData.src);
		setKey(itemData.key);
	};
	const handleSrc = (e) => {
		setSrc(e.target.value);
	};
	const handleKey = (e) => {
		setKey(e.target.value);
	};
	return (
		<div className={mobile_view ? classes.mobile_container : classes.container}>
			<div className={classes.container_left}>
				<div className={classes.left_content}>
					<div className={classes.item_container}>
						<p>src</p>
						<Input
							onChange={handleSrc}
							type="url"
							margin="dense"
							value={src}
							fullWidth={true}
							placeholder="Enter src url"
						/>
					</div>
					<div className={classes.item_container}>
						<p>key</p>
						<Input
							onChange={handleKey}
							type="text"
							margin="dense"
							value={key}
							fullWidth={true}
							placeholder="key"
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

export default ThingDB;
