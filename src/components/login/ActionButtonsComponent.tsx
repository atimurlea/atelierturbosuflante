import React, {useContext} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import ProductsStore from "../../stores/products-store";

function ActionButtonsComponent(props: any) {
	const productsStore = useContext(ProductsStore);
	const history = useHistory();
	const [open, setOpen] = React.useState(false);
	const agreeDelete = () => {
		setOpen(false);
		productsStore.delete(props.id);
	};
	const cancelDelete = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="contained" color="primary" onClick={() => {
				setOpen(true);
			}
			}>
				Delete
			</Button>
			<Button variant="contained" color="primary" onClick={() => {
				console.log("click pe update");
				history.push('/edit/' + props.id);
			}
			}>
				Update
			</Button>
			<Dialog
				open={open}
				onClose={()=> setOpen(false)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this item?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						If you click AGREE, this item wil be permanently deleted from the database. Click DISAGREE for cancel.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={cancelDelete} color="primary">
						Disagree
					</Button>
					<Button onClick={agreeDelete } color="primary" autoFocus>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default ActionButtonsComponent;
