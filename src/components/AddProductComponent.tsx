import React, {useContext, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import ProductsStore from "../stores/products-store";
import {useHistory} from "react-router-dom";

function AddProductComponent() {
	const productsStore = useContext(ProductsStore);
	const history = useHistory();
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [image, setImage] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");

	return(
		<div>
			<div>
				<TextField required id="standard-required" label="Name" defaultValue="name"
				           onChange={evt => setName(evt.target.value)}/>
			</div>
			<div>
				<TextField required id="standard-required" label="Category" defaultValue="category"
				           onChange={evt => setCategory(evt.target.value)}/>
			</div>
			<div>
				<TextField required id="standard-required" label="Image" defaultValue="image"
				           onChange={evt => setImage(evt.target.value)}/>
			</div>
			<div>
				<TextField required id="standard-required" label="Price" defaultValue="price"
				           onChange={evt => setPrice(evt.target.value)}/>
			</div>
			<div>
				<TextField required id="standard-required" label="Description" defaultValue="description"
				           onChange={evt => setDescription(evt.target.value)}/>
			</div>
			<div>
				<Button variant="contained" color="primary" onClick={() => {
					productsStore.add(name, category, image, price, description);
					history.push('/login');
				}
				}>
					AddProduct
				</Button>
			</div>
		</div>
	);
}

export default AddProductComponent;
