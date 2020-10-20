import React, {FunctionComponent, useContext, useState} from "react";
import {
	Button,
	TextField
} from "@material-ui/core";
import ProductsStore from "../../stores/products-store"
import {observer} from "mobx-react";
import ListTableComponent from "./ListTableComponent";
import {useHistory} from "react-router-dom";

export const LoginComponent: FunctionComponent = observer(() => {
	const productsStore = useContext(ProductsStore);
	const history = useHistory();
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");


	if(productsStore.logedIn.get()) {
		return <div>
			<div>
				Hello, {productsStore.user.get()}!
			</div>
			<div>
				<Button variant="contained" color="primary" onClick={() => {
					history.push('/add');
				}
				}>
					Add
				</Button>
			</div>
			<ListTableComponent></ListTableComponent>
		</div>;
	} else {
		return <div>
			<TextField required id="standard-required" label="Required" defaultValue="type user"
			           onChange={evt => setUser(evt.target.value)}/>
			<TextField
				id="standard-password-input"
				label="Password"
				type="password"
				autoComplete="current-password"
				onChange={evt => setPassword(evt.target.value)}
			/>
			<Button variant="contained" color="primary" onClick={()=>{
				productsStore.login(user, password);
			}
			}>
				Login
			</Button>
		</div>;
	}
});

export default LoginComponent;
