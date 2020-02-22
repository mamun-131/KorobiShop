import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.sass']
})
export class BrandsComponent implements OnInit {

  // brands: string[] = ['all', 'Lenovo', 'Dell', 'Dell', 'Lg', 'Samsung'];
    brands: string[] = ['all'];

  @Output() brandChanged = new EventEmitter();



       

        constructor(private productService: ProductService) { }

        ngOnInit() {
            this.productService.getAllBrand().subscribe(brand => {

                console.log(brand);
                for (var val of brand) {
                    this.brands.push(val.brand);
                }
             
                console.log(this.brands);
            });
        }



  brendSelect(event) {
  this.brandChanged.emit(
    event.value
  );
  }

}
