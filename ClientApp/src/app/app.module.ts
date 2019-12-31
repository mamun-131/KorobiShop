import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxImgZoomModule } from 'ngx-img-zoom';


import { MainComponent } from './components/main/main.component';
//import { HeaderThreeComponent } from './components/shared/header-three/header-three.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';
//import { PagesModule } from './components/pages/pages.module';
import { ShopModule } from './components/shop/shop.module';



import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

@NgModule({
  declarations: [
        AppComponent,
        MainComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
        FetchDataComponent
        //,
        //HeaderThreeComponent
  ],
  imports: [
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      SharedModule,
      //PagesModule,
      ShopModule,

    HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      NgxSpinnerModule,
      NgxImgZoomModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
