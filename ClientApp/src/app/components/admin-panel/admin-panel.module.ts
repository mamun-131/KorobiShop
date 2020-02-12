import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselSerialComponent } from './carousel-serial/carousel-serial.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../components/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'carousel',
    component: CarouselComponent,
    pathMatch: 'full'
  }, {
    path: 'carousel-serial',
    component: CarouselSerialComponent,
    pathMatch: 'full'
  }]

@NgModule({
  declarations: [CarouselComponent, CarouselSerialComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminPanelModule { }
