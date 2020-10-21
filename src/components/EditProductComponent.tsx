import React, {useContext, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import ProductsStore from "../stores/products-store";
import {Button, TextField} from "@material-ui/core";

function EditProductComponent(props: any) {
	const productsStore = useContext(ProductsStore);
	const history = useHistory();
	let { id } = useParams();
	const product = productsStore.getProductById(id);
	const [name, setName] = useState(product.name);
	const [category, setCategory] = useState(product.category);
	const [image, setImage] = useState(product.image);
	const [price, setPrice] = useState(product.price.toString());
	const [description, setDescription] = useState(product.description);

	if(productsStore.logedIn.get()) {
		return (
			<div>
				<div>
					<TextField required id="standard-required" label="Name" defaultValue={product?.name}
					           onChange={evt => setName(evt.target.value)}/>
				</div>
				<div>
					<TextField required id="standard-required" label="Category" defaultValue={product?.category}
					           onChange={evt => setCategory(evt.target.value)}/>
				</div>
				<div>
					<TextField required id="standard-required" label="Image" defaultValue={product?.image}
					           onChange={evt => setImage(evt.target.value)}/>
				</div>
				<div>
					<TextField required id="standard-required" label="Price" defaultValue={product?.price}
					           onChange={evt => setPrice(evt.target.value)}/>
				</div>
				<div>
					<TextField required id="standard-required" label="Description" defaultValue={product?.description}
					           onChange={evt => setDescription(evt.target.value)}/>
				</div>
				<div>
					<Button variant="contained" color="primary" onClick={() => {
						productsStore.update(id, name, category, image, price, description);
						history.push('/login');
					}
					}>
						Update
					</Button>
				</div>
			</div>
		);
	} else {
		return <div>You are not logged in!</div>
	}

}

export default EditProductComponent;
