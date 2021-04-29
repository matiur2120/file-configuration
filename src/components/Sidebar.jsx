import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { useSelector } from "react-redux";
import SidebarItem from "./SidebarItem";
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="right" ref={ref} {...props} />;
});
const useStyles = makeStyles({
	sidebar_full_container: {
		minWidth: "200px",
		position: "relative",
		zIndex: 1,
		flex: 0.2,
	},
	sidebar_full_container_mobile: {
		minWidth: "200px",
		position: "fixed",
		left: 0,
		top: "80px",
		zIndex: 1,
		flex: 0.2,
	},

	sidebar_container: {
		minWidth: "200px",
		position: "fixed",
		background: "#fff",
		paddingTop: "20px",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		marginLeft: "-24px",
		overflowY: "scroll",
		height: "86vh",
		"&:hover": {},
	},
	scrollbar: {
		overflowY: "scroll",
	},
	sidebar_container_mobile: {
		minWidth: "200px",
		position: "fixed",
		background: "#fff",
		paddingTop: "20px",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		marginLeft: "-24px",
		overflowY: "scroll",
		height: "88vh",
		"&:hover": {},
	},
	scrollbar: {
		overflowY: "scroll",
	},
	menu_icon: {
		cursor: "pointer",
		position: "fixed",
		top: "95px",
		left: "5px",
	},
});

const Sidebar = ({ dataFile }) => {
	const mobile_menu = useMediaQuery("(max-width:768px)");
	const { showMenuItem } = useSelector((state) => state.menuReducer);

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const classes = useStyles();
	return (
		<>
			{mobile_menu && (
				<MenuIcon onClick={handleClickOpen} className={classes.menu_icon} />
			)}
			{mobile_menu ? (
				<div>
					<Dialog
						open={open}
						TransitionComponent={Transition}
						keepMounted
						onClose={handleClose}
						aria-labelledby="alert-dialog-slide-title"
						aria-describedby="alert-dialog-slide-description"
					>
						<div className={classes.sidebar_full_container_mobile}>
							<div className={classes.sidebar_container_mobile}>
								{Object.entries(dataFile).map(
									([menuItem, content], index) =>
										showMenuItem.includes(menuItem) && (
											<SidebarItem
												key={index}
												menuItem={menuItem}
												content={content}
											/>
										)
								)}
							</div>
						</div>
					</Dialog>
				</div>
			) : (
				<div className={classes.sidebar_full_container}>
					<div className={classes.sidebar_container}>
						{Object.entries(dataFile).map(
							([menuItem, content], index) =>
								showMenuItem.includes(menuItem) && (
									<SidebarItem
										key={index}
										menuItem={menuItem}
										content={content}
									/>
								)
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default Sidebar;
