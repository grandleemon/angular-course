import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
	constructor(public readonly productService: ProductsService, public modalService: ModalService) {
	}

	title = 'angular';
	// products: IProduct[] = []
	loading = false
	// products$: Observable<IProduct[]>
	term: ''

	ngOnInit(): void {
		this.loading = true;
		// this.products$ = this.productService.getAll().pipe(
		// 	tap(() => this.loading = false)
		// )
		(this.productService.getAll()).subscribe(() => {
			this.loading = false;
		})
	}
}
