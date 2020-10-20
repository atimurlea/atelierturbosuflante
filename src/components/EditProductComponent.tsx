import React, {useContext, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import ProductsStore from "../stores/products-store";
import {Button, TextField} from "@material-ui/core";

function EditProductComponent(props: any) {
	const productsStore = useContext(ProductsStore);
	const history = useHistory();
	let { id } = useParams();
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [image, setImage] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");

	if(productsStore.logedIn.get()) {
		return (
			<div>
				<div>
					<TextField required id="standard-required" label="id" defaultValue={productsStore.getProductById(id)?.id}
					           onChange={evt => setName(evt.target.value)}/>
				</div>
				<div>
					<TextField required id="standard-required" label="Name" defaultValue={productsStore.getProductById(id)?.name}
					           onChange={evt => setName(evt.target.value)}/>
				</div>
				<div>
					<TextField required id="standard-required" label="Category" defaultValue={productsStore.getProductById(id)?.category}
					           onChange={evt => setCategory(evt.target.value)}/>
				</div>
				<div>
					<TextField required id="standard-required" label="Image" defaultValue={productsStore.getProductById(id)?.image}
					           onChange={evt => setImage(evt.target.value)}/>
				</div>
				<div>
					<TextField required id="standard-required" label="Price" defaultValue={productsStore.getProductById(id)?.price}
					           onChange={evt => setPrice(evt.target.value)}/>
				</div>
				<div>
					<TextField required id="standard-required" label="Description" defaultValue={productsStore.getProductById(id)?.description}
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
