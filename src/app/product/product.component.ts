import { Component, OnInit, ViewChildren, QueryList, ViewChild, ElementRef } from '@angular/core';

class Item {
    size: string;
    color: string;
    quantity: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    product = {
        sku: 'C1245',
        name: 'Camiseta Nasa',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, perspiciatis! Eum esse hic laboriosam ullam dicta laudantium impedit, sequi officia est, obcaecati, eaque repudiandae vitae! Voluptas molestias incidunt in possimus ut!',
        category: 'camisetas',
        pics: [
            'assets/items/nasa1.jpg',
            'assets/items/nasa2.jpg',
            'assets/items/nasa3.jpg',
            'assets/items/nasa4.jpg'
        ],
        sizes: ['M','L','XL'],
        colors: ['Único'],
        tags: ['hombre'],
        price: 16
    }

    activePic = this.product.pics[0];

    item: Item = {
        size: this.product.sizes[0],
        color: this.product.colors[0],
        quantity: 0
    }

    @ViewChildren('thumb') thumbs: QueryList<any>;
    @ViewChild('sizeOptions') sizeOptions: ElementRef;
    @ViewChild('colorOptions') colorOptions: ElementRef;
  
    constructor() { }

    ngOnInit(): void {
    }

    ngAferViewChecked() {
        // this.thumbs.forEach(div => console.log(div));
    }

    showPic(i) {
        this.thumbs.forEach((elem, index) => {
            this.activePic = this.product.pics[i];
            if (i === index) {
                elem.nativeElement.classList.add('active');
            } else {
                elem.nativeElement.classList.remove('active');
            }
        });
    }

    showSizeOptions() {
        this.sizeOptions.nativeElement.classList.add('show');
    }

    setSize(i) {
        this.item.size = this.product.sizes[i];
        this.sizeOptions.nativeElement.classList.remove('show');
    }

    showColorOptions() {
        this.colorOptions.nativeElement.classList.add('show');
    }

    setColor(i) {
        this.item.color = this.product.colors[i];
        this.colorOptions.nativeElement.classList.remove('show');
    }

}
