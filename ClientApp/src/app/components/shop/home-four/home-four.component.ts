import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { ProductService } from '../../shared/services/product.service';
import { CartItem } from 'src/app/modals/cart-item';
import { CartService } from '../../shared/services/cart.service';
import { AppCarouselService } from '../../shared/services/carousel.service';
import { FirstPageCarouselSerial } from '../../../modals/FirstPageCarouselSerial.model';


@Component({
  selector: 'app-home-four',
  templateUrl: './home-four.component.html',
  styleUrls: ['./home-four.component.sass']
})
export class HomeFourComponent implements OnInit {

  public currencies = ['USD', 'EUR'];
  public currency:any;
  public flags = [
    { name:'English', image: 'assets/images/flags/gb.svg' },
    { name:'German', image: 'assets/images/flags/de.svg' },
    { name:'French', image: 'assets/images/flags/fr.svg' },
    { name:'Russian', image: 'assets/images/flags/ru.svg' },
    { name:'Turkish', image: 'assets/images/flags/tr.svg' }
  ]
  public flag:any;

    products: Product[];

    productsDiscountList: Product[];
    productsOldBookList: Product[];
    productsMostSoldList: Product[];
    productsPreOrderList: Product[];
    productsStationeryList: Product[];
    productsArtAndCraftList: Product[];
    productsOrgOrdertList: Product[];

    public slides: [] = [];
    public banners = [];
  indexProduct: number;
  shoppingCartItems: CartItem[] = [];
    wishlistItems: Product[] = [];
    discount: string = "discount";
    productTopCarouselDataList: [Product[]] = [[]];
    productTopCarouselList = [];
    //productTopCarouselList: any = [
    //    { mainSlno: 0, typeSl: 1, caption: 'পুরাতন জনপ্রিয় বই', type: 'c', routerlink: '' },
    //    { mainSlno: 1, typeSl: 0, caption: 'বিশেষ ছাড়', type: 'c', routerlink:''},
        
    //    { mainSlno: 2, typeSl: 0, caption: 'Banner', type: 'b', routerlink: '' },
       


    //    { mainSlno: 3, typeSl: 1, caption: 'Banner', type: 'b', routerlink: '' },
    //    { mainSlno: 4, typeSl: 2, caption: 'সর্বাধিক বিক্রিত পণ্য', type: 'c', routerlink: '' },
    //];
  //public slides = [
  //    //{ title: 'ইসলামিক বই এ', subtitle: ' ৪০% ছাড়', description: 'সুযোগ ফুরিয়ে যাওয়ার আগে ঝাঁপিয়ে পড়ুন ', image: 'assets/images/carousel/islamikbook1.png' },
  //    //{ title: 'হুমায়ুন আহমেদ এর বই এ', subtitle: '২০% ছাড়', description: 'সুযোগ ফুরিয়ে যাওয়ার আগে ঝাঁপিয়ে পড়ুন ', image: 'assets/images/carousel/humayun-ahmed.png' },
  //    //{ title: 'ইংলিশ বই এ ', subtitle: '৩০% ছাড় ', description: 'সুযোগ ফুরিয়ে যাওয়ার আগে ঝাঁপিয়ে পড়ুন ', image: 'assets/images/carousel/english.png' }
  //  //  ,
  //  //{ title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
  //  //{ title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
  //];

    constructor(private productService: ProductService, private cartService: CartService, private appCarouselService: AppCarouselService) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
      
  }

    ngOnInit() {

        //for (var i = 0; i < this.productTopCarouselList.length; i++) {
        //    console.log(this.productTopCarouselList[i].caption)
        //    if (this.productTopCarouselList[i].type == 'c') {
        //       // this.productTopCarouselDataList= this.productsDiscountList;
        //    }
        //    //else {
        //    //    this.productTopCarouselDataList[i] = this.banners[this.productTopCarouselList[i].typeSl];
        //    //}
           
        //}

    //this.productService.getBanners()
    //.subscribe(
    //  data => this.banners = data
    //);
        


        this.appCarouselService.getAllBanners()
            .subscribe(
                (items: any) => {
                    this.banners = items;
                    console.log(this.banners);

                }
            );
      this.appCarouselService.getAllMain_carousel()
          .subscribe(
              (items: any) => {
                  this.slides = items;
                  //console.log(this.slides.length);

              }
        );


        this.appCarouselService.getFirstPageCarouselSerial()
            .subscribe(
                (items1: any) => {

                    this.productTopCarouselList = items1;
                    console.log(this.productTopCarouselList);

          

        this.appCarouselService.getAllFirstPageCarouselDisplay()
            .subscribe(
                (items: Product[]) => {

                    for (var i = 0; i < items1.length; i++) {
                        this.productTopCarouselDataList.splice(i, 0, items.filter(res => res.cId === i+1))
                    }
                    console.log(this.productTopCarouselDataList);
                    console.log(items);
                    console.log(items.filter(res => res.cId === 1));

                }
            );
              

                }
        );






      this.productService.getProducts()
          .subscribe(
              (product: Product[]) => {
                  this.products = product
              }
          );



 this.currency = this.currencies[0];
  this.flag = this.flags[0];


}





public changeCurrency(currency){
  this.currency = currency;
}
public changeLang(flag){
  this.flag = flag;
}

}













      //this.productService.getAllDiscountProduct()
      //    .subscribe(
      //        (product: Product[]) => {
      //            this.productsDiscountList = product
      //          //  this.productTopCarouselDataList.splice(0,0,product);
      //           // array.splice(2, 0, "three");
      //           console.log(product);
      //        }
      //    );
      //this.productService.getAllOldPopularProduct()
      //    .subscribe(
      //        (product: Product[]) => {
      //            this.productsOldBookList = product;
      //        //    this.productTopCarouselDataList.splice(1, 0, product);
      //        }
      //    );

      //this.productService.getAllMostSoldProduct()
      //    .subscribe(
      //        (product: Product[]) => {
      //            this.productsMostSoldList = product;
      //       //     this.productTopCarouselDataList.splice(2, 0, product);
      //        //    console.log(this.productsMostSoldList);
      //        }
      //    );

      //this.productService.getAllPreOrderProduct()
      //    .subscribe(
      //        (product: Product[]) => {
      //            this.productsPreOrderList = product;
      //         //   this.productTopCarouselDataList.splice(3, 0, product);
      //         //   console.log(this.productsPreOrderList);
      //        }
      //    );

      //  this.productService.getAllStationeryProduct()
      //      .subscribe(
      //          (product: Product[]) => {
      //              this.productsStationeryList = product;
      //          //    this.productTopCarouselDataList.splice(4, 0, product);
      //             console.log(this.productsStationeryList);
      //          }
      //      );
      //  this.productService.getAllArtAndCraftProduct()
      //      .subscribe(
      //          (product: Product[]) => {
      //              this.productsArtAndCraftList = product;
      //          //    this.productTopCarouselDataList.splice(5, 0, product);
      //            //  console.log(this.productsArtAndCraftList);
      //          }
      //      );
      //  this.productService.getAllOrgOrderProduct()
      //      .subscribe(
      //          (product: Product[]) => {
      //              this.productsOrgOrdertList = product;
      //         //     this.productTopCarouselDataList.splice(6, 0, product);
      //            //  console.log(this.productsOrgOrdertList);
      //          }
      //      );
