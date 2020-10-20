import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import ProductsStore from "../stores/products-store"
import {TextField} from "@material-ui/core";

function ProductDetailComponent(props: any) {
	const productsStore = useContext(ProductsStore);
	let { id } = useParams();

	function DescriptionComponent() {
		return (
			<div>
				<div>
					<TextField disabled id="standard-disabled" label={productsStore.getProductById(id)?.id}/>
				</div>
				<div>
					<TextField disabled id="standard-disabled" label={productsStore.getProductById(id)?.name}/>
				</div>
				<div>
					<TextField disabled id="sstandard-disabled" label={productsStore.getProductById(id)?.category}/>
				</div>
				<div>
					<TextField disabled id="standard-disabled" label={productsStore.getProductById(id)?.image}/>
				</div>
				<div>
					<TextField disabled id="standard-disabled" label={productsStore.getProductById(id)?.price}/>
				</div>
				<div>
					<TextField disabled id="standard-disabled" label={productsStore.getProductById(id)?.description}/>
				</div>
			</div>
		);
	}

	return <DescriptionComponent/>

}

export default ProductDetailComponent;
