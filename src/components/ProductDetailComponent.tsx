import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import ProductsStore from "../stores/products-store"
import {List, ListItem, ListItemText} from "@material-ui/core";
import {makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		position: 'absolute',
		left: '50%',
		top: '400px',
		transform: 'translate(-50%, -50%)'
	},
}));

function ProductDetailComponent(props: any) {
	const classes = useStyles();
	const productsStore = useContext(ProductsStore);
	let { id } = useParams();

	function DescriptionComponent() {
		let product = productsStore.getProductById(id);
		return (
			<div className={classes.root}>
				<List component="nav" aria-label="test">
					<ListItem button>
						<img src={product?.image} alt="img"/>
					</ListItem>
					<ListItem button>
						<ListItemText primary={'Name: '+product?.name} />
					</ListItem>
					<ListItem button>
						<ListItemText primary={'Category: '+product?.category} />
					</ListItem>
					<ListItem button>
						<ListItemText primary={'Price: '+product?.price} />
					</ListItem>
					<ListItem button>
						<ListItemText primary={'Description: '+product?.description} />
					</ListItem>
				</List>
			</div>
		);
	}

	return <DescriptionComponent/>

}

export default ProductDetailComponent;
