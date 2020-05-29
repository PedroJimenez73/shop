import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    products: Array<Product> = [
        {
            sku: 'C1245',
            name: 'Camiseta Nasa',
            description: 'Camiseta gris con logotipo NASA en algodón 100%',
            category: 'CAMISETAS',
            pics: [
                'assets/items/nasa1.jpg',
                'assets/items/nasa2.jpg',
                'assets/items/nasa3.jpg',
                'assets/items/nasa4.jpg'
            ],
            sizes: ['L','XL'],
            tags: ['hombre'],
            price: 16
        }
    ]


    constructor() { }

    getProducts() {
        return this.products;
    }

}
