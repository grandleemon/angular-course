import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product.interface";
import {ProductsService} from "./services/products.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	constructor(private readonly productService: ProductsService) {
	}

	title = 'angular';
	products: IProduct[] = []
	loading = false

	async ngOnInit(): Promise<void> {
		this.loading = true;
		(await this.productService.getAll()).subscribe(products => {
			this.products = products
			this.loading = false;
		})
	}
}
