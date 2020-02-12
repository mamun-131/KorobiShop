import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSerialComponent } from './carousel-serial.component';

describe('CarouselSerialComponent', () => {
  let component: CarouselSerialComponent;
  let fixture: ComponentFixture<CarouselSerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselSerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
