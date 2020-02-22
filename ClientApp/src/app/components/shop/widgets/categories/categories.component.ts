import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

    category: any = {};

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getAllCategory().subscribe(category => {

            console.log(category);
            this.category = category;

        });
  }

}
