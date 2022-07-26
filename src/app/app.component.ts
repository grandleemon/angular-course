import {Component} from '@angular/core';
import {IProduct} from "./models/product.interface";
import {products} from './data/products'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular';

	products: IProduct[] = products
}
