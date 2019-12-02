import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
    links = ['First', 'Second', 'Third'];
    activeLink = this.links[0];
    background = '';
    selectedIndex = 0;
    selectedIndex1 = 0;
    selectedIndex2 = 0;
    selectedIndex3 = 0;
    selectedIndex4 = 0;

    toggleBackground() {
        this.background = this.background ? '' : 'primary';
    }

    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
  constructor() { }

  ngOnInit() {
    }



    tabClick(event: MouseEvent) {
        let el = event.srcElement;
        //console.log(el.id);
        const attr = el.attributes.getNamedItem('class');
      
        if (attr.value.indexOf('mat-tab-label-content') >= 0) {
            el = el.parentElement;
        }
       // console.log(el);
        const tabIndex = el.id.substring(el.id.length - 3);
        //if (parseInt(tabIndex) === this.selectedTabIndex) {
        //    // active tab clicked
        //    this.selectedIndex = tabIndex;
        //    //console.log(tabIndex);
        //}
        if (tabIndex.charAt(0) == '0') {
            this.selectedIndex = tabIndex.charAt(2);
        }

    }

    tabClick1(event: MouseEvent) {
        let el = event.srcElement;
        const attr = el.attributes.getNamedItem('class');

        if (attr.value.indexOf('mat-tab-label-content') >= 0) {
            el = el.parentElement;
        }
        const tabIndex = el.id.substring(el.id.length - 3);
        console.log(tabIndex.charAt(0));
        if (tabIndex.charAt(0) == '1') {
            this.selectedIndex1 = tabIndex.charAt(2);
        }
    }
    tabClick2(event: MouseEvent) {
        let el = event.srcElement;
        const attr = el.attributes.getNamedItem('class');

        if (attr.value.indexOf('mat-tab-label-content') >= 0) {
            el = el.parentElement;
        }
        const tabIndex = el.id.substring(el.id.length - 3);
        console.log(tabIndex.charAt(0));
        if (tabIndex.charAt(0) == '2') {
            this.selectedIndex2 = tabIndex.charAt(2);
        }
    }
    tabClick3(event: MouseEvent) {
        let el = event.srcElement;
        const attr = el.attributes.getNamedItem('class');

        if (attr.value.indexOf('mat-tab-label-content') >= 0) {
            el = el.parentElement;
        }
        const tabIndex = el.id.substring(el.id.length - 3);
        console.log(tabIndex.charAt(0));
        if (tabIndex.charAt(0) == '3') {
            this.selectedIndex3 = tabIndex.charAt(2);
        }
    }
    tabClick4(event: MouseEvent) {
        let el = event.srcElement;
        const attr = el.attributes.getNamedItem('class');

        if (attr.value.indexOf('mat-tab-label-content') >= 0) {
            el = el.parentElement;
        }
        const tabIndex = el.id.substring(el.id.length - 3);
        console.log(tabIndex.charAt(0));
        if (tabIndex.charAt(0) == '4') {
            this.selectedIndex4 = tabIndex.charAt(2);
        }
    }
    //selectTab(index: number): void {
    //    this.selectedIndex = index;
    //}
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
