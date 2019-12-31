import { Component, OnInit, Input } from '@angular/core';
import { Banners } from '../../../modals/banners.model';

@Component({
  selector: 'app-banners-four',
  templateUrl: './banners-four.component.html',
  styleUrls: ['./banners-four.component.sass']
})
export class BannersFourComponent implements OnInit {

    @Input('banners') banners: Array<Banners> = [];
    @Input('bannerNumber') bannerNumber: number;

  constructor() { }

    ngOnInit() {


  }

    public getBanner(index) {
        //console.log(this.banners);
        //console.log(this.bannerNumber);
    return this.banners[index];
  }

  public getBgImage(index){
    let bgImage = {
      'background-image': index != null ? "url(" + this.banners[index].image + ")" : "url(https://via.placeholder.com/600x400/ff0000/fff/)"
    };
    return bgImage;
  }

}
