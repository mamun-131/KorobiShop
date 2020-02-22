import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { Product, ProductAtrributes } from 'src/app/modals/product.model';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CartService } from 'src/app/components/shared/services/cart.service';
import { SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ProductZoomComponent } from './product-zoom/product-zoom.component';
import { ProductImage } from 'src/app/modals/productImage.model';
import { ProductAttribute } from '../../../../modals/productAtrribute.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  public config: SwiperConfigInterface={};

  @ViewChild('zoomViewer', { static: false }) zoomViewer;
    @ViewChild(SwiperDirective, { static: true }) directiveRef: SwiperDirective;

    myThumbnail = "https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
    myFullresImage = "https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";

  public product            :   Product = {};
  public products           :   Product[] = [];
  public productPictures: ProductImage[];
    public productAttributeTags: ProductAttribute[];
    public productColor: string[] = [];
    public productColortext: string[] = [];
    public productColorValue: any;
    public productCondition: string[] = [];
    public productConditiontext: string[] = [];
    public productConditionValue: string;
    public productSize: string[] = [];
    public productSizetext: string[] = [];
    public productSizeValue: string; 
    public productMaterial: string[] = [];
    public productMaterialtext: string[] = [];
    public productMaterialValue: string;
    public productDimension: string[] = [];
    public productDimensiontext: string[] = [];
    public productDimensionValue: string;
    public productAge: string[] = [];
    public productAgetext: string[] = [];
    public productAgeValue: string;
    public productBrand: string[] = [];
    public productBrandtext: string[] = [];
    public productBrandValue: string;
  public thumbImage: any;
  public fullImage: any;
  public image: any;
  public zoomImage: any;

  public counter  :   number = 1;

  index: number;

  constructor(private route: ActivatedRoute, public productsService: ProductService, public dialog: MatDialog, private router: Router, private cartService: CartService) {
    this.route.params.subscribe(params => {
      const id = +params['id'];
        //this.productsService.getProduct(id).subscribe(product => this.product = product)
        this.productsService.getProductPicturesById(id).subscribe(
            (productPictures: ProductImage[]) => {
                this.productPictures = productPictures;
                this.thumbImage = productPictures[0].imagePath;
                this.fullImage = productPictures[0].imagePath;
                this.zoomImage = this.thumbImage;
                console.log(productPictures);
            }
        );

        this.productsService.getProducAttributeTagsById(id).subscribe(
            (productAttributeTags: ProductAttribute[]) => {
                this.productAttributeTags = productAttributeTags;
                console.log(productAttributeTags);
                for (var i = 0; i < productAttributeTags.length; i++) {
                    if (this.productAttributeTags[i].product_attribute == 'Color') {

                        this.productColor.push(this.productAttributeTags[i].attribute_value);
                        this.productColortext.push (this.productAttributeTags[i].attribute_valuetext);
                    }
                    if (this.productAttributeTags[i].product_attribute == 'Condition') {
                        this.productCondition.push(this.productAttributeTags[i].attribute_value);
                        this.productConditiontext.push(this.productAttributeTags[i].attribute_valuetext);
                    }
                    if (this.productAttributeTags[i].product_attribute == 'Size') {
                        this.productSize.push(this.productAttributeTags[i].attribute_value);
                        this.productSizetext.push(this.productAttributeTags[i].attribute_valuetext);
                    }
                    if (this.productAttributeTags[i].product_attribute == 'Material') {
                        this.productMaterial.push(this.productAttributeTags[i].attribute_value);
                        this.productMaterialtext.push(this.productAttributeTags[i].attribute_valuetext);
                    }
                    if (this.productAttributeTags[i].product_attribute == 'Dimension') {
                        this.productDimension.push(this.productAttributeTags[i].attribute_value);
                        this.productDimensiontext.push(this.productAttributeTags[i].attribute_valuetext);
                    }
                    if (this.productAttributeTags[i].product_attribute == 'Age') {
                        this.productAge.push(this.productAttributeTags[i].attribute_value);
                        this.productAgetext.push(this.productAttributeTags[i].attribute_valuetext);
                    }
                    if (this.productAttributeTags[i].product_attribute == 'Brand') {
                        this.productBrand.push(this.productAttributeTags[i].attribute_value);
                        this.productBrandtext.push(this.productAttributeTags[i].attribute_valuetext);
                    }
                }
            }
        );
        

        this.productsService.getProductById(id)
            .subscribe(
                (product: Product) => {
                    this.product = product[0];
                    //console.log(product);
                }
            );
        //this.productsService.getProductById(id).subscribe(product => this.product = product);
        console.log(id);

    });
   }

//Attributes setting to cart 
    checkColorattribute(attr: any) {
        this.productColorValue = attr;
        console.log(attr);
    }

    checkConditionattribute(attr: any) {
        this.productConditionValue = attr;
        console.log(attr);
    }

    checkSizeattribute(attr: any) {
        this.productSizeValue = attr;
        console.log(attr);
    }
    checkMaterialattribute(attr: any) {
        this.productMaterialValue = attr;
        console.log(attr);
    }
    checkDimensionattribute(attr: any) {
        this.productDimensionValue = attr;
        console.log(attr);
    }
    checkAgeattribute(attr: any) {
        this.productAgeValue = attr;
        console.log(attr);
    }
    checkBrandattribute(attr: any) {
        this.productBrandValue = attr;
        console.log(attr);
    }


  ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);


      this.getRelatedProducts();

      //console.log(this.product);
      //console.log(this.productPictures);
  }


  ngAfterViewInit(){
      this.config = {
          observer: true,
          slidesPerView: 3,
          spaceBetween: 16,
          keyboard: true,
          navigation: true,
          pagination: false,
          grabCursor: true,
          loop: true,
          preloadImages: false,
          lazy: true,
          breakpoints: {
              480: {
                  slidesPerView: 1
              },
              740: {
                  slidesPerView: 2,
              },
              960: {
                  slidesPerView: 3,
              },
              1280: {
                  slidesPerView: 4,
              },


          }
      }
  }

  public selectImage(image){
      this.thumbImage = image;
      this.fullImage = image;
      this.zoomImage = image;
  }




public increment() {
  this.counter += 1;
}

public decrement() {
  if(this.counter >1){
     this.counter -= 1;
  }
}

getRelatedProducts() {
  this.productsService.getProducts()
  .subscribe(
    (product: Product[]) => {
      this.products = product
    });
}

  // Add to cart
  public addToCart(product: Product, quantity) {
      if (quantity == 0) return false;
      product.color = this.productColorValue;
      product.condition = this.productConditionValue;
      product.size = this.productSizeValue;
      product.material = this.productMaterialValue;
      product.dimension = this.productDimensionValue;
      product.age = this.productAgeValue;
      product.brandatrributes = this.productBrandValue;

      console.log(product);
    this.cartService.addToCart(product, parseInt(quantity));
  }

   // Add to cart
   public buyNow(product: Product, quantity) {
    if (quantity > 0)
      this.cartService.addToCart(product,parseInt(quantity));
      this.router.navigate(['/pages/checkout']);
 }



 public onMouseMove(e){
  if(window.innerWidth >= 1280){
    var image, offsetX, offsetY, x, y, zoomer;
    image = e.currentTarget;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    x = offsetX/image.offsetWidth*100;
      y = offsetY / image.offsetHeight * 100;

    zoomer = this.zoomViewer.nativeElement.children[0];
    if(zoomer){
      zoomer.style.backgroundPosition = x + '% ' + y + '%';
      zoomer.style.display = "block";
      zoomer.style.height = image.height + 'px';
      zoomer.style.width = image.width + 'px';
    }
  }
}

public onMouseLeave(event){
  this.zoomViewer.nativeElement.children[0].style.display = "none";
}

    public openZoomViewer() {
        console.log(this.zoomImage);
    this.dialog.open(ProductZoomComponent, {

        data: this.zoomImage,
        //maxWidth: '90vw',
        maxHeight: '90vh',
        height: '90%',
        //width: '90%',
        
        panelClass: 'full-screen-modal'
    //panelClass: 'zoom-dialog'
  });
}



}


