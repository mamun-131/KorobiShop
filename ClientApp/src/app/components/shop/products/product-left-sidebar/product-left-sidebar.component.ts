import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, ColorFilter } from 'src/app/modals/product.model';
import { MenuTagMap } from '../../../../modals/menuTagMap.model';

@Component({
  selector: 'app-product-left-sidebar',
  templateUrl: './product-left-sidebar.component.html',
    styleUrls: ['./product-left-sidebar.component.sass'],

})
export class ProductLeftSidebarComponent implements OnInit {
  public sidenavOpen:boolean = true;
  public animation    :   any;   // Animation
  public sortByOrder  :   string = '';   // sorting
  public page:any;
  public tagsFilters  :   any[] = [];
  public viewType: string = 'grid';
  public viewCol: number = 25;
  public colorFilters :   ColorFilter[] = [];

  public items        :   Product[] = [];
  public allItems: Product[] = [];
  public products: Product[] = [];
  public tags         :   any[] = [];
    public colors: any[] = [];
    public menuTagMap: MenuTagMap ;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) => {
            const category = params['category'];

            //var strlength = category.length;
            //var substrcat = category.substring(0, 9);
            //var catid = category.substring(9, strlength);
            //console.log(strlength);
            if (category.length > 5) {
            console.log(category.substr(0, 6));
            }
            console.log('category' + category);
            console.log('category>>>>' + category.charAt(0));
            if (category.charAt(0) == '-') {
                this.productService.getMenuTagMapById("'" + category + "'").subscribe(cat => {
                    this.menuTagMap = cat;
                    console.log(this.menuTagMap[0]);
                    console.log('length' + this.menuTagMap);
                    if (this.menuTagMap) {
                        if (this.menuTagMap[0].tagType == 'Category') {



                            if (category == '-1-0' || category == '-3-0' || category == '-4-0' || category == '-2-0' || category == '-5-0' || category == '-6-0' || category == '-7-0') {
                                console.log('%%%%%' + this.menuTagMap[0].tagValue);

                                this.productService.getAllSpecialSalesProduct(Number(this.menuTagMap[0].tagValue)).subscribe(products => {
                                    this.allItems = products;
                                    //this.products = products.slice(0.8);
                                    console.log(products);

                                });
                            }
                            else {
                                this.productService.getProductByCategoryId(Number(this.menuTagMap[0].tagValue)).subscribe(products => {
                                    this.allItems = products;
                                    // this.products = products.slice(0.8);
                                    console.log(products);

                                });
                            }


                        }
                        else if (this.menuTagMap[0].tagType == 'ProductTag-Condition-Old-Old') {
                            this.productService.getAllAttributeTagProduct('Condition-Old-Old-' + this.menuTagMap[0].tagValue).subscribe(products => {
                                this.allItems = products;
                                // this.products = products.slice(0.8);
                                console.log('>>>>>ProductTag-Condition-Old-Old');
                                console.log(products);

                            });
                        }

                    }


                });

            }
            else if (category.substr(0,6) == 'writer') {
                console.log('writer>>>>' + category.substr(6, category.length));
                this.productService.getProductByWriter(Number(category.substr(6, category.length))).subscribe(products => {
                    this.allItems = products;
                    this.products = products.slice(0.8);
                    console.log(products);

                });
            }
            else if (category.substr(0,6) == '-morew') {
                console.log('writer>>>>' + category.substr(6, category.length));
                this.productService.getProductByCategoryId(Number(this.menuTagMap[0].tagValue)).subscribe(products => {
                    this.allItems = products;
                    this.products = products.slice(0.8);
                    console.log(products);

                });
            }
            else if (category.substr(0, 9) == 'publisher') {
                console.log('publisher>>>>' + category.substr(9, category.length));
                this.productService.getProductByPublisher(Number(category.substr(9, category.length))).subscribe(products => {
                    this.allItems = products;
                    this.products = products.slice(0.8);
                    console.log(products);

                });
            }
            else if (category.substr(0, 6) == '-morep') {
                console.log('publisher>>>>' + category.substr(6, category.length));
                this.productService.getProductByCategoryId(Number(this.menuTagMap[0].tagValue)).subscribe(products => {
                    this.allItems = products;
                    this.products = products.slice(0.8);
                    console.log(products);

                });
            }
            else if (category.substr(0, 6) == 'search') {
                console.log('search>>>>' + category.substr(6, category.length));
                this.productService.getProductBySearch(category.substr(6, category.length)).subscribe(products => {
                    this.allItems = products;
                    this.products = products.slice(0.8);
                    console.log(products);

                });
            }
            else {
                this.productService.getProductByCategoryId(Number(category)).subscribe(products => {
                    this.allItems = products;
                    this.products = products.slice(0.8);
                    console.log(products);

                });

            }



 
            //if (strlength === 4) {
            //    this.productService.getProductByCategoryId(category).subscribe(products => {
            //        this.allItems = products;
            //        this.products = products.slice(0.8);
            //        console.log('mmmmmm');
            //        console.log(products);
            //        //this.getTags(products)
            //        //this.getColors(products)
            //    })
            //}
            //else {
            //switch (category) {
            //    case '000000cat1':
            //        this.productService.getProductByCategoryId('1001').subscribe(products => {
            //            this.allItems = products;
            //            this.products = products.slice(0.8);
            //            console.log(products);
            //            //this.getTags(products)
            //            //this.getColors(products)
            //        })
            //        break;
            //    case '000subcat':
            //        let toArray = catid.split("-", 2);
            //        this.productService.getProductBySubCategoryId(toArray[0], toArray[1]).subscribe(products => {
            //            this.allItems = products;
            //            this.products = products.slice(0.8);
            //            console.log(products);
            //            //this.getTags(products)
            //            //this.getColors(products)
            //        })
            //        break;
            //    case 'subsubcat':
            //        this.productService.getProductByCategoryId(catid).subscribe(products => {
            //            this.allItems = products;
            //            this.products = products.slice(0.8);
            //            console.log(products);
            //            //this.getTags(products)
            //            //this.getColors(products)
            //        })
            //        break;              
            //   default:
            //        //this.productService.getProductByCategoryId(1).subscribe(products => {
            //        //    this.allItems = products;
            //        //    this.products = products.slice(0.8);
            //        //    console.log(products);
            //        //    //this.getTags(products)
            //        //    //this.getColors(products)
            //        //})
            //        break;
            //}
            //}
   


      }
    )
  }



     // Get current product tags
     public getTags(products) {
      var uniqueBrands = []
      var itemBrand = Array();
      products.map((product, index) => {
         if(product.tags) {
            product.tags.map((tag) => {
            const index = uniqueBrands.indexOf(tag);
            if(index === -1)  uniqueBrands.push(tag);
         })
        }
      });
      for (var i = 0; i < uniqueBrands.length; i++) {
           itemBrand.push({brand:uniqueBrands[i]})
      }
      this.tags = itemBrand
   }

     // Get current product colors
     public getColors(products) {
      var uniqueColors = []
      var itemColor = Array();
      products.map((product, index) => {
        if(product.colors) {
        product.colors.map((color) => {
            const index = uniqueColors.indexOf(color);
            if(index === -1)  uniqueColors.push(color);
        })
       }
      });
      for (var i = 0; i < uniqueColors.length; i++) {
           itemColor.push({color:uniqueColors[i]})
      }
      this.colors = itemColor
   }

  ngOnInit() {
  }



  public changeViewType(viewType, viewCol){
    this.viewType = viewType;
    this.viewCol = viewCol;
  }
    // Animation Effect fadeIn
    public fadeIn() {
      this.animation = 'fadeIn';
  }

  // Animation Effect fadeOut
  public fadeOut() {
      this.animation = 'fadeOut';
  }

    // Update tags filter
    public updateTagFilters(tags: any[]) {
      this.tagsFilters = tags;
      this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }



    // sorting type ASC / DESC / A-Z / Z-A etc.
    public onChangeSorting(val) {
      this.sortByOrder = val;
      this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
   }

     // Initialize filetr Items
  public filterItems(): Product[] {
    return this.items.filter((item: Product) => {
        const Colors: boolean = this.colorFilters.reduce((prev, curr) => { // Match Color
          if(item.colors){
            if (item.colors.includes(curr.color)) {
              return prev && true;
            }
          }
        }, true);
        const Tags: boolean = this.tagsFilters.reduce((prev, curr) => { // Match Tags
          if(item.tags) {
            if (item.tags.includes(curr)) {
              return prev && true;
            }
          }
        }, true);
        return Colors && Tags; // return true
    });

}

public onPageChanged(event){
  this.page = event;
  this.allItems;
  window.scrollTo(0,0);
}


  // Update price filter
//   public updatePriceFilters(price: any) {
//     let items: any[] = [];
//     this.products.filter((item: Product) => {
//         if (item.price >= price[0] && item.price <= price[1] )  {
//            items.push(item); // push in array
//         }
//     });
//     this.items = items;
// }


  // Update price filter
  public updatePriceFilters(price: any) {
    console.log(price);
    console.log(this.products);


   this.allItems = this.products.filter((item: Product) => {
     return item.price >= price.priceFrom && item.price <= price.priceTo
    });
     console.log(this.products);

}

onBrendsChanged(newBrend) {
  console.log(newBrend);
  this.allItems = newBrend === 'all' ? this.products : this.products.filter(

    item => item.brand === newBrend
  )
  console.log(this.allItems);


}
}
