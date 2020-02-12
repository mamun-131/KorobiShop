import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscriber, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/modals/product.model';
import { MatSnackBar } from '@angular/material';
import { map } from 'rxjs/operators';
import { Inject } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { ProductImage } from 'src/app/modals/productImage.model';
import { ProductAttribute } from 'src/app/modals/productAtrribute.model';
import { MenuTagMap } from '../../../modals/menuTagMap.model';

import { share, debounceTime } from 'rxjs/operators';

// Get product from Localstorage
let products = JSON.parse(localStorage.getItem("compareItem")) || [];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public currency: string = 'TK. ';
  public catalogMode: boolean = false;
  // @Inject('BASE_URL') baseUrl: string;
  private _url: string = "assets/data/";
  public url = "assets/data/banners.json";
  baseUrl = 'https://localhost:44364/';

  public compareProducts: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public observer: Subscriber<{}>;

  constructor(private httpClient: HttpClient, public snackBar: MatSnackBar) {
    this.compareProducts.subscribe(products => products = products)
  }

  private products(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('assets/data/products2.json');
  }

  public banners(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }


  // Get Banners
  public getBanners() {
    return this.banners();
  }

  // Get Banners
  public getProducts(): Observable<Product[]> {
    return this.products();
  }


  // Get Products By Id
  public getProduct(id: number): Observable<Product> {
    return this.products().pipe(map(items => {
      return items.find((item: Product) => { return item.id === id; });
    }));
    // return this.products.find(product=> product.id === id);

    // return this.httpClient.get<Product>(this._url + 'product-' + id + '.json');
  }


  /*
---------------------------------------------
----------  Compare Product  ----------------
---------------------------------------------
*/

  // Get Compare Products
  public getComapreProducts(): Observable<Product[]> {
    const itemsStream = new Observable(observer => {
      observer.next(products);
      observer.complete();
    });
    return <Observable<Product[]>>itemsStream;
  }

  // If item is aleready added In compare
  public hasProduct(product: Product): boolean {
    const item = products.find(item => item.id === product.id);
    return item !== undefined;
  }

  // Add to compare
  public addToCompare(product: Product): Product | boolean {
    let message, status;
    var item: Product | boolean = false;
    if (this.hasProduct(product)) {
      item = products.filter(item => item.id === product.id)[0];
      const index = products.indexOf(item);
      this.snackBar.open('The product  ' + product.name + ' already added to comparison list.', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

    } else {
      if (products.length < 4)
        products.push(product);
      message = 'The product ' + product.name + ' has been added to comparison list.';
      status = 'success';
      this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });

    }
    localStorage.setItem("compareItem", JSON.stringify(products));
    return item;
  }

  // Removed Product
  public removeFromCompare(product: Product) {
    if (product === undefined) { return; }
    const index = products.indexOf(product);
    products.splice(index, 1);
    localStorage.setItem("compareItem", JSON.stringify(products));
  }

  // Get Products By category
  public getProductByCategory(category: string): Observable<Product[]> {
    return this.products().pipe(map(items =>
      items.filter((item: Product) => {
        if (category == 'all')
          return item
        else
          return item.category === category;

      })
    ));
  }








  ////////////////////////////////////New Addition///////////////////////////////////////////////////////////////




  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'

    })
  }
  options = {
    headers: this.httpOptions.headers
  }


  //// GET ALL
  getAllSpecialSalesProduct(id: number): Observable<Product[]> {
    //console.log(this.baseUrl);
    return this.httpClient.get<Product[]>('api/GetAllSpecialSalesProduct/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }



  getAllWriters(): Observable<any> {
    //console.log(this.baseUrl);
    return this.httpClient.get<any>('api/GetAllWriters/')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }



  getProductByWriter(id: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>('api/GetProductByWriter/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }



  getAllPublishers(): Observable<any> {
    //console.log(this.baseUrl);
    return this.httpClient.get<any>('api/GetAllPublishers/')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  getProductByPublisher(id: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>('api/GetProductByPublisher/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }


  getAllAttributeTagProduct(param: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>('api/GetAllAttributeTagProduct/' + param)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  //getAllOldPopularProduct(): Observable<Product[]> {
  //    //console.log(this.baseUrl);
  //    return this.httpClient.get<Product[]>('api/GetAllOldPopularProduct/')
  //        .pipe(
  //            retry(1),
  //            catchError(this.errorHandl)
  //        )
  //}
  //getAllMostSoldProduct(): Observable<Product[]> {
  //    //console.log(this.baseUrl);
  //    return this.httpClient.get<Product[]>('api/GetAllMostSoldProduct/')
  //        .pipe(
  //            retry(1),
  //            catchError(this.errorHandl)
  //        )
  //}

  //getAllPreOrderProduct(): Observable<Product[]> {
  //    //console.log(this.baseUrl);
  //    return this.httpClient.get<Product[]>('api/GetAllPreOrderProduct/')
  //        .pipe(
  //            retry(1),
  //            catchError(this.errorHandl)
  //        )
  //}


  //getAllStationeryProduct(): Observable<Product[]> {
  //    //console.log(this.baseUrl);
  //    return this.httpClient.get<Product[]>('api/GetAllStationeryProduct/')
  //        .pipe(
  //            retry(1),
  //            catchError(this.errorHandl)
  //        )
  //}

  //getAllArtAndCraftProduct(): Observable<Product[]> {
  //    //console.log(this.baseUrl);
  //    return this.httpClient.get<Product[]>('api/GetAllArtAndCraftProduct/')
  //        .pipe(
  //            retry(1),
  //            catchError(this.errorHandl)
  //        )
  //}

  //getAllOrgOrderProduct(): Observable<Product[]> {
  //    //console.log(this.baseUrl);
  //    return this.httpClient.get<Product[]>('api/GetAllOrgOrderProduct/')
  //        .pipe(
  //            retry(1),
  //            catchError(this.errorHandl)
  //        )
  //}











  // Get Products By Id




  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>('api/GetProductById/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  getProducAttributeTagsById(id: number): Observable<ProductAttribute[]> {
    return this.httpClient.get<ProductAttribute[]>('api/GetProducAttributeTagsById/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  getMenuTagMapById(id: string): Observable<MenuTagMap> {
    return this.httpClient.get<MenuTagMap>('api/GetMenuTagMapById/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }


  getProductPicturesById(id: number): Observable<ProductImage[]> {
    return this.httpClient.get<ProductImage[]>('api/GetProductImagesById/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  getProductByCategoryId(id: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>('api/GetProductByCategory/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  getProductBySubCategoryId(catid: number, subid: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>('api/GetProductBySubCategory/' + catid + '/' + subid)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  getProductBySearch(id: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>('api/GetProductBySearch/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  getCarouselList(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/getCarousels/');
  }

  getCarouselSerialList(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/getCarouselSerials/');
  }

  saveCarousel(model): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'api/saveCarousel/', model);
  }

  saveCarouselSerial(model): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'api/saveCarouselSerial/', model);
  }


  GetAllPreOrderProduct
  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
