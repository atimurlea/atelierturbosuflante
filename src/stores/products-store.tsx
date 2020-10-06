import {action, observable} from "mobx";
import productsJson from "../resources/products.json";
import {createContext} from "react";
import * as _ from "lodash";
import {IProduct} from "./IProduct";

class ProductsStore{
	private LOGIN_API_URL = "http://atelierturbosuflante.ro/api/login.php";
	@observable public products: IProduct[];
	@observable public logedIn = observable.box(false);
	@observable public user = observable.box('');
	constructor() {
		this.products = Object.values(productsJson) as IProduct[];
		console.log("Products store created. Products: " + this.products.length);
	}

	public getProductById(id: number): IProduct | undefined{
		let prod = _.find(this.products, (p: IProduct)=>{
			return p.id == id;
		});
		return prod;
	}

	@action
	public login(user: string, password: string): boolean{
		let requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ user: user, pass: password })
		};
		fetch(this.LOGIN_API_URL, requestOptions)
		.then(response => response.json())
		.then((data) => {
			this.logedIn.set(data.length > 0);
			if(this.logedIn.get()){
				this.user.set(data[0].user);
			}
			console.log(data);
		});
		return this.logedIn.get();
	}
}

export default createContext(new ProductsStore());
