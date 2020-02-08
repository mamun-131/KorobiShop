import { Component, OnInit,Input } from '@angular/core';
import { Router } from  '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
    links = ['First', 'Second', 'Third'];
    activeLink = this.links[0];
    background = '';
    allSelectedIndex: number[] = [];
    writerList: any = {};
    publisherList: any = {};
    //selectedIndex = 0;
    //selectedIndex1 = 0;
    //selectedIndex2 = 0;
    //selectedIndex3 = 0;
    //selectedIndex4 = 0;
    menuIndex:string = '';
    menuItems: string = '';
    
    toggleBackground() {
        this.background = this.background ? '' : 'primary';
    }

    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
    constructor(private router: Router, private productService: ProductService) { }

    ngOnInit() {
        this.allSelectedIndexZero();

        

        this.productService.getAllWriters()
          .subscribe(
              (writer: any) => {
                  this.writerList = writer;
                  console.log(writer);
              }
        );


        this.productService.getAllPublishers()
            .subscribe(
                (publisher: any) => {
                    this.publisherList = publisher;
                    console.log(publisher);
                }
            );
    }


    menuRouting(event: MouseEvent, menuCode: string) {
        console.log('mamun' + menuCode);

     
      
        switch (menuCode) {
            case '-0-0':
                this.router.navigate(['/home/four']);
                break;
            case '-1-2':
                this.router.navigate(['/home/products/-morew']);
                break;
            case '-1-3':
                this.router.navigate(['/home/products/-morep']);
                break;
            default:
                  if (this.menuItems != 'mat-menu-item') {
                      this.router.navigate(['/home/products/' + menuCode]);
                    }
                break;
        }

        //let toArray = menuCode.split('-', 2);
        //if (toArray[0] != '0') {
        //    this.router.navigate(['/home/products/000subcat' + toArray[0] + '-' + toArray[1]]);
        //}

    }

    allSelectedIndexZero() {
        let currentIndex = this.allSelectedIndex[0]
        for (var i = 0; i < 9; i++) {
            this.allSelectedIndex[i] = 0;
        }
       
      //  this.allSelectedIndex[0] = currentIndex;
    }
    allTabClick(event: MouseEvent) {
        let el = event.target as HTMLInputElement;
        const attr = el.attributes.getNamedItem('class');
        console.log(el.id.length);
        console.log(el.id);
        console.log(attr.textContent);
        console.log(el.id.substring(el.id.length - 2));

        this.menuItems = attr.textContent;

        if (el.id.charAt(15) == '-') {
            var tabIndex = '';
            if (el.id.length == 17) {
                 tabIndex = el.id.substring(el.id.length - 4);
            } else {
                 tabIndex = el.id.substring(el.id.length - 5);
            }
            
             for (var i = 0; i < 12; i++) {

                if (el.id.charAt(14) == String(i)) {
                    if (el.id.substring(el.id.length - 2).charAt(0) == '-') {
                        this.allSelectedIndex[i] = Number(el.id.substring(el.id.length - 1));
                        
                    }
                    else {
                        this.allSelectedIndex[i] = Number(el.id.substring(el.id.length - 2));
                        
                    }

                    this.menuIndex = tabIndex;
                }
            }

        }

        //if (el.id.charAt(16) == '-') {
        //    const tabIndex = el.id.substring(el.id.length - 5);
        //    for (var i = 0; i < 12; i++) {

        //        if (el.id.substring(13,15) == String(i)) {
        //            if (el.id.substring(el.id.length - 2).charAt(0) == '-') {
        //                this.allSelectedIndex[i] = Number(el.id.substring(el.id.length - 1));

        //            }
        //            else {
        //                this.allSelectedIndex[i] = Number(el.id.substring(el.id.length - 2));

        //            }

        //            this.menuIndex = tabIndex;
        //        }
        //    }

        //}

    }


  openMegaMenu(){
    let pane = document.getElementsByClassName('cdk-overlay-pane');
    [].forEach.call(pane, function (el) {
        if(el.children.length > 0){
          if(el.children[0].classList.contains('mega-menu')){
            el.classList.add('mega-menu-pane');
          }
        }
    });
    }



}











    //tabClick(event: MouseEvent) {

    //    let el = event.target as HTMLInputElement;

    //    const attr = el.attributes.getNamedItem('class');

    //    //if (attr.value.indexOf('mat-tab-label-content') >= 0) {
    //    //    el = el.parentElement;
    //    //}
    //    //console.log(attr);
    //    const tabIndex = el.id.substring(el.id.length - 3);
    //    //if (parseInt(tabIndex) === this.selectedTabIndex) {
    //    //    // active tab clicked
    //    //    this.selectedIndex = tabIndex;
    //        //console.log(tabIndex);
    //    //}

    //    if (tabIndex.charAt(0) == '0') {
    //        this.selectedIndex = Number(tabIndex.charAt(2));
    //        //this.menuIndex = Number(tabIndex.charAt(2));
    //        this.menuIndex = tabIndex;
    //    }



    //}

    //tabClick1(event: MouseEvent) {
    //    let el = event.target as HTMLInputElement;
    //    const attr = el.attributes.getNamedItem('class');
    //    console.log(attr);
    //    const tabIndex = el.id.substring(el.id.length - 3);
    //    console.log(tabIndex + '---' + 'tabClick1');

    //    if (tabIndex.charAt(0) == '1') {
    //        this.selectedIndex1 = Number(tabIndex.charAt(2));
    //        this.menuIndex = tabIndex;
    //      //  this.menuIndex1 = Number(tabIndex.charAt(2));
    //    }
    //}
    //tabClick2(event: MouseEvent) {
    //    let el = event.target as HTMLInputElement;
    //    const attr = el.attributes.getNamedItem('class');
    //    console.log(attr);
    //    const tabIndex = el.id.substring(el.id.length - 3);
    //    console.log(tabIndex);

    //    if (tabIndex.charAt(0) == '2') {
    //        this.selectedIndex2 = Number(tabIndex.charAt(2));
    //        this.menuIndex = tabIndex;
    //        //this.menuIndex2 = Number(tabIndex.charAt(2));
    //    }
    //}
    //tabClick3(event: MouseEvent) {
    //    let el = event.target as HTMLInputElement;
    //    const attr = el.attributes.getNamedItem('class');
    //    console.log(attr);
    //    const tabIndex = el.id.substring(el.id.length - 3);
    //    console.log(tabIndex);

    //    if (tabIndex.charAt(0) == '3') {
    //        this.selectedIndex3 = Number(tabIndex.charAt(2));
    //        //this.menuIndex3 = Number(tabIndex.charAt(2));
    //        this.menuIndex = tabIndex;
    //    }
    //}
    //tabClick4(event: MouseEvent) {
    //    let el = event.target as HTMLInputElement;
    //    const attr = el.attributes.getNamedItem('class');
    //    console.log(attr);
    //    const tabIndex = el.id.substring(el.id.length - 3);
    //    console.log(tabIndex);

    //    if (tabIndex.charAt(0) == '4') {
    //        this.selectedIndex4 = Number(tabIndex.charAt(2));
    //       // this.menuIndex4 = Number(tabIndex.charAt(2));
    //        this.menuIndex = tabIndex;
    //    }
    //}
    ////selectTab(index: number): void {
    ////    this.selectedIndex = index;
    ////}
