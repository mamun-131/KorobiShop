import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  carouselForm: any;
  carouselList: any = [];
  columnscarousel: string[] = ['id', 'caption'];

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.initFrom();
  }
  ngOnInit() {
    this.getCarouselList();
  }

  initFrom() {
    this.carouselForm = this.fb.group({
      id: [0],
      caption: ['', [Validators.maxLength(50)]],
    });
  }

  getCarouselList() {
    this.productService.getCarouselList().subscribe(res => {
      if (res.length) {
        this.carouselList = res;
      }
    });
  }

  onSaveClick() {
    let model = this.carouselForm.value;
    model.caption = model.caption.trim();
    if (!model.caption) {
      return;
    }
    this.productService.saveCarousel(model).subscribe(res => {
      if (res && res.id) {
        this.carouselList.push(res);
        this.carouselList = [...this.carouselList];
        this.productService.snackBar.open('Carousel Added Successfully.', '×', { panelClass: ['success'], verticalPosition: 'top', duration: 3000 });
        this.carouselForm.patchValue({ id: 0, caption: '' });
      } else {
        this.productService.snackBar.open('Error: Carousel Not Saved.', '×', { panelClass: ['error'], verticalPosition: 'top', duration: 3000 });
      }
    });
  }

}
