import {observable} from "mobx";
import productsJson from "../resources/products.json";
import {createContext} from "react";
import * as _ from "lodash";
import {IProduct} from "./IProduct";

class ProductsStore{
	@observable public products: IProduct[];

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
}

export default createContext(new ProductsStore());
