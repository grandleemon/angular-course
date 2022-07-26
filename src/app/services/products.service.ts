import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../models/product.interface";

@Injectable({
	providedIn: 'root'
})

export class ProductsService {
	constructor(private readonly http: HttpClient) {
	}

	async getAll(): Promise<Observable<IProduct[]>> {
		return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
			params: new HttpParams().append('limit', 5)
		});
	}
}
