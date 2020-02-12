import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-carousel-serial',
  templateUrl: './carousel-serial.component.html',
  styleUrls: ['./carousel-serial.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselSerialComponent implements OnInit {
  carouselSerialForm: any;
  carouselSerialList: any = [];
  columnsCarouselSerial: string[] = ['id', 'mainSlno', 'typeSl', 'caption', 'type', 'routerlink', 'isActive'];

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.initFrom();
  }
  ngOnInit() {
    this.getCarouselSerialList();
  }

  initFrom() {
    this.carouselSerialForm = this.fb.group({
      id: [0],
      mainSlno: ['', Validators.required],
      typeSl: ['', Validators.required],
      caption: ['', [Validators.required, Validators.maxLength(50)]],
      type: ['', [Validators.required, Validators.maxLength(50)]],
      routerlink: ['', [Validators.maxLength(50)]],
      isActive: ['', Validators.required]
    });
  }

  getCarouselSerialList() {
    this.productService.getCarouselSerialList().subscribe(res => {
      if (res.length) {
        this.carouselSerialList = res;
      }
    });
  }

  onSaveClick() {
    let model = this.carouselSerialForm.value;
    model.caption = model.caption.trim();
    if (!(model.mainSlno && model.typeSl && model.caption && model.type)) {
      return;
    }
    model.isActive = model.isActive == 1 ? true : false;

    this.productService.saveCarouselSerial(model).subscribe(res => {
      if (res && res.id) {
        this.carouselSerialList.push(res);
        this.carouselSerialList = [...this.carouselSerialList];
        this.productService.snackBar.open('Carousel Serial Added Successfully.', '×', { panelClass: ['success'], verticalPosition: 'top', duration: 3000 });

        this.carouselSerialForm.reset();
        this.carouselSerialForm.patchValue({ id: 0 });
      } else {
        this.productService.snackBar.open('Error: Carousel Serial Not Saved.', '×', { panelClass: ['error'], verticalPosition: 'top', duration: 3000 });
      }
    });
  }

}