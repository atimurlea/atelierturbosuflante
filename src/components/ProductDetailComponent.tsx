import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import ProductsStore from "../stores/products-store"

function ProductDetailComponent(props: any) {
	const productsStore = useContext(ProductsStore);
	let { id } = useParams();
	return (
		<div>
			<div>{productsStore.getProductById(id)?.name}</div>
			<div>{productsStore.getProductById(id)?.description}</div>
			<div>{productsStore.getProductById(id)?.price}</div>
		</div>
	);
}

export default ProductDetailComponent;
