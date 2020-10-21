import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import ProductsStore from "../stores/products-store"
import {List, ListItem, ListItemText} from "@material-ui/core";

function ProductDetailComponent(props: any) {
	const productsStore = useContext(ProductsStore);
	let { id } = useParams();

	function DescriptionComponent() {
		let product = productsStore.getProductById(id);
		return (
			<div>
				<List component="nav" aria-label="test">
					<ListItem button>
						<ListItemText primary={product?.id} />
					</ListItem>
					<ListItem button>
						<ListItemText primary={product?.name} />
					</ListItem>
					<ListItem button>
						<ListItemText primary={product?.category} />
					</ListItem>
					<ListItem button>
						<ListItemText primary={product?.image} />
					</ListItem>
					<ListItem button>
						<ListItemText primary={product?.price} />
					</ListItem>
					<ListItem button>
						<ListItemText primary={product?.description} />
					</ListItem>
				</List>
			</div>
		);
	}

	return <DescriptionComponent/>

}

export default ProductDetailComponent;
