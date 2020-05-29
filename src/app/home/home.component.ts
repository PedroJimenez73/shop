import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    products: Array<Product>;

    constructor(private productServices: ProductService) { }

    ngOnInit(): void {
        this.products = this.productServices.getProducts();
    }

}
