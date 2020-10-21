import {action, observable} from "mobx";
import {createContext} from "react";
import * as _ from "lodash";
import {IProduct} from "./IProduct";

class ProductsStore{
	private LOGIN_API_URL = "http://atelierturbosuflante.ro/api/login.php";
	private PRODUCTS_API_URL = "http://atelierturbosuflante.ro/api/products.php";
	private ADD_API_URL = "http://atelierturbosuflante.ro/api/add.php";
	private UPDATE_API_URL = "http://atelierturbosuflante.ro/api/update.php";
	private DELETE_API_URL = "http://atelierturbosuflante.ro/api/delete.php";
	@observable public products = observable.array<IProduct>([]);
	@observable public logedIn = observable.box(false);
	@observable public user = observable.box('');

	constructor() {
		this.getProductsFromApi();
	}

	@action
	 private getProductsFromApi():void{
		let requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({})
		};
		fetch(this.PRODUCTS_API_URL, requestOptions)
		.then(response => response.json())
		.then((data) => {
			this.products.replace(data);
		});
	}

	public getProductById(id: number): IProduct{
		let prod = _.find(this.products, (p: IProduct)=>{
			return p.id == id;
		});
		return prod!;
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
		});
		return this.logedIn.get();
	}

	public delete(id: number) : void{
		let requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: id})
		};
		fetch(this.DELETE_API_URL, requestOptions)
		.then(response => response.json())
		.then((data) => {
			this.getProductsFromApi();
		});
	}

	public add(name: string, category: string, image: string, price: string, description: string) : void{
		let requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name : name, category : category, image : image, price : price, description : description})
		};
		fetch(this.ADD_API_URL, requestOptions)
		.then(response => response.json())
		.then((data) => {
			this.getProductsFromApi();
		});
	}

	public update(id: string, name: string, category: string, image: string, price: string, description: string) : void{
		let requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: id, name: name, category: category, image: image, price: price, description: description})
		};
		fetch(this.UPDATE_API_URL, requestOptions)
		.then(response => response.json())
		.then((data) => {
			this.getProductsFromApi();
		});
	}
}

export default createContext(new ProductsStore());
