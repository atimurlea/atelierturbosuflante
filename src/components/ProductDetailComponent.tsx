import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailComponent(props: any) {
	let { id } = useParams();
	return (
		<div>{id}</div>
	);
}

export default ProductDetailComponent;
