import React from "react";
import turbina from '../images/turbina.jpg';
import {makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		position: 'absolute',
		left: '50%',
		top: '200px',
		transform: 'translate(-50%, -50%)'
	},
}));

function HomeComponent() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div>
				<img src={turbina} alt="img"/>
			</div>
			<div>
				Bine ati venit la Atelier Turbosuflante! By Razvan :)
			</div>
		</div>

	);
}

export default HomeComponent;
