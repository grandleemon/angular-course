import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product.interface";
import {ProductsService} from "./services/products.service";
import {Observable, tap} from "rxjs";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	constructor(private readonly productService: ProductsService) {
	}

	title = 'angular';
	// products: IProduct[] = []
	loading = false
	products$: Observable<IProduct[]>

	ngOnInit(): void {
		this.loading = true;
		this.products$ = this.productService.getAll().pipe(
			tap(() => this.loading = false)
		)
		// (await this.productService.getAll()).subscribe(products => {
		// 	this.products = products
		// 	this.loading = false;
		// })
	}
}
