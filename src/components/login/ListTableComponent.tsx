import React, {useContext} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ProductsStore from "../../stores/products-store";
import ActionButtonsComponent from "./ActionButtonsComponent";
import {observer} from "mobx-react";

function ListTableComponent() {
	const useStyles = makeStyles({
		                             table: {
			                             minWidth: 650,
		                             },
	                             });
	const classes = useStyles();
	const productsStore = useContext(ProductsStore);

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>id</TableCell>
						<TableCell align="right">Name</TableCell>
						<TableCell align="right">Category</TableCell>
						<TableCell align="right">Price</TableCell>
						<TableCell align="right">Description</TableCell>
						<TableCell align="right">Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{productsStore.products.slice().map((row) => (
						<TableRow key={row.id}>
							<TableCell component="th" scope="row">
								{row.id}
							</TableCell>
							<TableCell align="right">{row.name}</TableCell>
							<TableCell align="right">{row.category}</TableCell>
							<TableCell align="right">{row.price}</TableCell>
							<TableCell align="right">{row.description}</TableCell>
							<TableCell align="right">
								<ActionButtonsComponent id={row.id}></ActionButtonsComponent>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default observer(ListTableComponent);
