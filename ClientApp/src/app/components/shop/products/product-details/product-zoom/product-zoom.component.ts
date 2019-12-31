import { Component, OnInit, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { Product } from 'src/app/modals/product.model';
import { ProductImage } from '../../../../../modals/productImage.model';

@Component({
  selector: 'app-product-zoom',
  templateUrl: './product-zoom.component.html',
  styleUrls: ['./product-zoom.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ProductZoomComponent implements OnInit {
  public product            :   Product = {};
  public products           :   Product[] = [];
    public productPictures: ProductImage[];
  @ViewChild('zoomImage', { static: true }) zoomImage;

  constructor( private productsService: ProductService, public dialogRef: MatDialogRef<ProductZoomComponent>,
              @Inject(MAT_DIALOG_DATA) public image:any) { }

    ngOnInit() {
        console.log(this.zoomImage);

      //this.productsService.getProducts().subscribe(product => this.products = product);

      //this.productsService.getProductPicturesById(id).subscribe(
      //    (productPictures: ProductImage[]) => {
      //        this.productPictures = productPictures;
      //        //this.thumbImage = productPictures[0].imagePath;
      //        //this.fullImage = productPictures[0].imagePath;
      //        console.log(productPictures);
      //    }
      //);
  }

  public close(): void {
    this.dialogRef.close();
  }

  public count:number = 10;
  public maxWidth:number = 60;
  public zoomIn(){
    if(this.count < 60){
      this.maxWidth = this.maxWidth + this.count;
      this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
      this.count = this.count + 10;
    }
  }

  public zoomOut(){
    if(this.count > 10){
      this.count = this.count - 10;
      this.maxWidth = this.maxWidth - this.count;
      this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
    }
  }

}
