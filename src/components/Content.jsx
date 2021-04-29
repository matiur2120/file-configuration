import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useSelector } from "react-redux";
import AlphaComponent from "./AlphaComponent";
import BravoComponent from "./BravoComponent";
import CharlieComponent from "./CharlieComponent";
import SupportComponent from "./SupportComponent";
import TemplateComponet from "./TemplateComponent";
import ThingComponent from "./ThingComponent";
import ThingDB from "./ThingDB";
const useStyles = makeStyles({
	content_container: {
		flex: 0.8,
		padding: "30px",
	},
});

const Content = () => {
	const { itemId, itemData } = useSelector((state) => state.dataReducer);

	const defaultItem = useSelector(
		(state) => state.dataReducer.updateData["alpha"]
	);
	// const defaultItem = data["alpha"];

	const classes = useStyles();
	switch (itemId) {
		case "bravo":
			return (
				<div className={classes.content_container}>
					<BravoComponent itemData={itemData} itemId={itemId} />
				</div>
			);
		case "charlie":
			return (
				<div className={classes.content_container}>
					<CharlieComponent itemData={itemData} itemId={itemId} />
				</div>
			);
		case "template":
			return (
				<div className={classes.content_container}>
					<TemplateComponet itemData={itemData} itemId={itemId} />
				</div>
			);
		case "thing1":
			return (
				<div className={classes.content_container}>
					<ThingComponent itemData={itemData} itemId={itemId} />
				</div>
			);
		case "thing2":
			return (
				<div className={classes.content_container}>
					<ThingComponent itemData={itemData} itemId={itemId} />
				</div>
			);
		case "thing3":
			return (
				<div className={classes.content_container}>
					<ThingComponent itemData={itemData} itemId={itemId} />
				</div>
			);
		case "thing4":
			return (
				<div className={classes.content_container}>
					<ThingComponent itemData={itemData} itemId={itemId} />
				</div>
			);
		case "thing1db":
			return (
				<div className={classes.content_container}>
					<ThingDB itemData={itemData} itemId={itemId} />
				</div>
			);
		case "thing2db":
			return (
				<div className={classes.content_container}>
					<ThingDB itemData={itemData} itemId={itemId} />
				</div>
			);
		case "thing3db":
			return (
				<div className={classes.content_container}>
					<ThingDB itemData={itemData} itemId={itemId} />
				</div>
			);
		case "thing4db":
			return (
				<div className={classes.content_container}>
					<ThingDB itemData={itemData} itemId={itemId} />
				</div>
			);
		case "support":
			return (
				<div className={classes.content_container}>
					<SupportComponent itemData={itemData} itemId={itemId} />
				</div>
			);
		default:
			return (
				<div className={classes.content_container}>
					<AlphaComponent itemData={defaultItem} itemId="alpha" />
				</div>
			);
	}
};

export default Content;
