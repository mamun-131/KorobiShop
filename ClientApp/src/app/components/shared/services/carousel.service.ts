import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Inject } from '@angular/core';
import { MainCarousel } from 'src/app/modals/main-carousel.model';
import { Banners } from 'src/app/modals/banners.model';
import { FirstPageCarouselSerial } from '../../../modals/FirstPageCarouselSerial.model';
import { Product } from '../../../modals/product.model';

@Injectable({
    providedIn: 'root'
})

export class AppCarouselService {
    // Base url
     @Inject('BASE_URL') baseUrl: string;
    //baseUrl = 'https://korobi-book-shop.azurewebsites.net/';
    //// baseAPIurl = 'https://localhost:5001/api';

    //baseUrl = 'https://localhost:44364';
    ////  // https://mamun-mobile-app.herokuapp.com/inventory/3333
    constructor(private http: HttpClient) { }

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

    // GET ALL
    getAllMain_carousel(): Observable<MainCarousel> {
        console.log(this.baseUrl);
        return this.http.get<MainCarousel>( 'api/GetAllMain_carousel/')
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            )
    }

    getAllBanners(): Observable<Banners> {
        //console.log(this.baseUrl);
        return this.http.get<Banners>('api/GetAllBanners/')
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            )
    }
    getFirstPageCarouselSerial(): Observable<FirstPageCarouselSerial> {
      //  console.log(this.http.get<FirstPageCarouselSerial>('api/GetFirstPageCarouselSerial/'));
        return this.http.get<FirstPageCarouselSerial>('api/GetFirstPageCarouselSerial/')
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            )
    }
    getAllFirstPageCarouselDisplay(): Observable<Product[]> {

        return this.http.get<Product[]>('api/GetAllFirstPageCarouselDisplay/')
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            )
    } 

    //// GET
    //GetIssue(id): Observable<Bug> {
    //    return this.http.get<Bug>(this.baseurl + '/bugtracking/' + id)
    //        .pipe(
    //            retry(1),
    //            catchError(this.errorHandl)
    //        )
    //}

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


