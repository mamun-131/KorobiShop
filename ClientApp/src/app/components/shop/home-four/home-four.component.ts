import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { ProductService } from '../../shared/services/product.service';
import { CartItem } from 'src/app/modals/cart-item';
import { CartService } from '../../shared/services/cart.service';
import { AppCarouselService } from '../../shared/services/carousel.service';


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

      this.productService.getProducts()
          .subscribe(
              (product: Product[]) => {
                  this.products = product
              }
          );


      this.productService.getAllDiscountProduct()
          .subscribe(
              (product: Product[]) => {
                  this.productsDiscountList = product
                //  console.log(product);
              }
          );
      this.productService.getAllOldPopularProduct()
          .subscribe(
              (product: Product[]) => {
                  this.productsOldBookList = product
              }
          );

      this.productService.getAllMostSoldProduct()
          .subscribe(
              (product: Product[]) => {
                  this.productsMostSoldList = product
              //    console.log(this.productsMostSoldList);
              }
          );

      this.productService.getAllPreOrderProduct()
          .subscribe(
              (product: Product[]) => {
                  this.productsPreOrderList = product
               //   console.log(this.productsPreOrderList);
              }
          );
      
        this.productService.getAllStationeryProduct()
            .subscribe(
                (product: Product[]) => {
                    this.productsStationeryList = product
                   console.log(this.productsStationeryList);
                }
            );
        this.productService.getAllArtAndCraftProduct()
            .subscribe(
                (product: Product[]) => {
                    this.productsArtAndCraftList = product
                  //  console.log(this.productsArtAndCraftList);
                }
            );
        this.productService.getAllOrgOrderProduct()
            .subscribe(
                (product: Product[]) => {
                    this.productsOrgOrdertList = product
                  //  console.log(this.productsOrgOrdertList);
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
